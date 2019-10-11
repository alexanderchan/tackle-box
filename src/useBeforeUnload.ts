import * as React from 'react'

/**
 * useBeforeUnload hook
 *
 * Adds (and removes) the onUnload event based on a boolean
 *
 * @param enabled: boolean
 * @returns void
 */
export function useBeforeUnload({
  enabled = true,
  onBeforeUnload,
}: {
  enabled: boolean
  onBeforeUnload?: (e: BeforeUnloadEvent) => void
}) {
  React.useEffect(() => {
    const handler = (event: BeforeUnloadEvent) => {
      if (onBeforeUnload) {
        return onBeforeUnload(event)
      }

      event.preventDefault()
      event.returnValue = null

      return event.returnValue
    }

    if (!enabled) {
      window.removeEventListener('beforeunload', handler)
    } else {
      window.addEventListener('beforeunload', handler)
    }

    return () => window.removeEventListener('beforeunload', handler)
  }, [enabled, onBeforeUnload])
}
