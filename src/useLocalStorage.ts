import React from 'react'
// based on https://usehooks.com/useLocalStorage/
// with added updates when the key changes and event listener

function stringify<T>(value: T) {
  return typeof value === 'string' ? value : JSON.stringify(value)
}

function getLocalStorageValue<T>({
  key,
  initialValue,
}: {
  key: string
  initialValue: T
}) {
  try {
    // Get from local storage by key
    const item = window.localStorage.getItem(key)
    return item ? item : stringify(initialValue)
  } catch (error) {
    // If error also return initialValue
    return stringify(initialValue)
  }
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once

  const [storedValue, setStoredValue] = React.useState<T>(initialValue)

  // Refresh if the key changes
  React.useEffect(() => {
    setStoredValue(JSON.parse(getLocalStorageValue<T>({ key, initialValue })))
  }, [key, initialValue])

  React.useEffect(() => {
    // Local storage updates on the same page will not trigger an onStorage
    function onStorage({ key: k, newValue }: StorageEvent) {
      if (k === key) {
        const newState = newValue === null ? null : JSON.parse(newValue)

        if (storedValue !== newState) {
          setStoredValue(newState)
        }
      }
    }

    window.addEventListener('storage', onStorage)

    return () => window.removeEventListener('storage', onStorage)
  }, [key, storedValue])

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  function setValue(value: T) {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      throw error
    }
  }

  return [storedValue, setValue]
}
