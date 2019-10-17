import * as React from 'react'
import { useBeforeUnload } from '../../src/useBeforeUnload'

export default function UseBeforeUnload() {
  const [isBlocked, setIsBlocked] = React.useState(true)
  useBeforeUnload({ enabled: isBlocked })
  return (
    <div>
      <label>Block unload</label>
      <input
        type="checkbox"
        checked={isBlocked}
        onChange={() => setIsBlocked(!isBlocked)}
      ></input>

      <a href="https://jilt.com">Navigate away</a>
    </div>
  )
}
