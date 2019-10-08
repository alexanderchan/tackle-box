import * as React from 'react'

type Value = string | number | boolean | object

/**
 * usePrevious hook
 *
 * Provides you with the value from the previous render of
 * the argument passed in
 *
 * @param value: Value
 * @returns Value
 */
export function usePrevious(value: Value) {
  const ref = React.useRef<Value | null>(null)

  React.useEffect(() => void (ref.current = value), [value])

  return ref.current
}
