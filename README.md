# SkyVerge Tackle Box
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

This consists of commonly used hooks, components, and helper functions for React projects. The main goal is to provide an opinionated and consistent approach to creating performant React applications and components.

## Installation and Usage

The best and easiest way to use tackle-box is to install it from npm and build it into your app with Webpack or Parcel.

```
yarn add @skyverge/tackle-box // we prefer yarn
npm install @skyverge/tackle-box
```

To use tackle-box in your app, you will need to import the appropriate hook or function and call it in your components.

```tsx
// Example of using the usePrevious hook

import * as React from 'react'
import { usePrevious } from '@skyverge/tackle-box'

function App() {
  const [count, setCount] = React.useState(0)
  const prevCount = usePrevious(count)

  return (
    <button type="button" onClick={setCount(count + 1)}>
      Increase count
    </button>
  )
}
```


## `useLocalStorage`

Persists values to localstorage

### Example

```tsx
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
```

### Function Signature

```tsx
  function useLocalStorage<T>(
    key: string,
    initialValue: T,
  ): [T, (value: T) => void]
```

### Params

#### `key`

The key to use to store

#### `initialValue`

The initial value

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://jilt.com"><img src="https://avatars0.githubusercontent.com/u/1162694?v=4" width="100px;" alt="Wesley Cole"/><br /><sub><b>Wesley Cole</b></sub></a><br /><a href="https://github.com/skyverge/tackle-box/commits?author=wesleycole" title="Documentation">📖</a> <a href="https://github.com/skyverge/tackle-box/commits?author=wesleycole" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/alexandermchan"><img src="https://avatars2.githubusercontent.com/u/1864372?v=4" width="100px;" alt="Alex Chan"/><br /><sub><b>Alex Chan</b></sub></a><br /><a href="https://github.com/skyverge/tackle-box/commits?author=alexanderchan" title="Documentation">📖</a> <a href="https://github.com/skyverge/tackle-box/commits?author=alexanderchan" title="Code">💻</a> <a href="#ideas-alexanderchan" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!