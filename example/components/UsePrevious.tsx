import * as React from 'react'
import { usePrevious } from '../../src/usePrevious'

export default function UsePrevious() {
  const [count, setCount] = React.useState(0)
  const prevCount = usePrevious(count)

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>

      <button type="button" onClick={() => setCount(count + 1)}>
        Increase count
      </button>
    </div>
  )
}
