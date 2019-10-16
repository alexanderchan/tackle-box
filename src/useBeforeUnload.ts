import React from 'react'

export function useBeforeUnload({
  enabled = true,
  onBeforeUnload,
}: {
  enabled: boolean
  onBeforeUnload?: (e: BeforeUnloadEvent) => void
}) {
  React.useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (onBeforeUnload) {
        return onBeforeUnload(event)
      }

      // Only IE
      const confirmationMessage = 'Changes you made may not be saved.'
      ;(event || window.event).returnValue = confirmationMessage //Gecko + IE
      return confirmationMessage //Webkit, Safari, Chrome etc.
    }

    if (!enabled) {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    } else {
      window.addEventListener('beforeunload', handleBeforeUnload)
    }

    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [enabled, onBeforeUnload])
}
