import * as React from 'react'
import { useLocalStorage } from '../../src/useLocalStorage'

export default function UseLocalStorage() {
  const [isChecked, setIsChecked] = useLocalStorage('checked', false)

  return (
    <div>
      <label>This checkbox uses local storage refresh</label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      ></input>

      <div onClick={() => location.reload()}>Refresh the page</div>
    </div>
  )
}
