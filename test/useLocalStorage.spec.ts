import { renderHook, act } from '@testing-library/react-hooks'
import { useLocalStorage } from '../src/useLocalStorage'

describe('useLocalStorage', () => {
  it('should work with an initial value of an object', () => {
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem')
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')

    const { result } = renderHook(
      ({ key, initialValue }) => useLocalStorage(key, initialValue),
      {
        initialProps: {
          key: 'aKey',
          initialValue: { test: true },
        },
      },
    )

    expect(getItemSpy).toHaveBeenCalledWith('aKey')
    expect(getItemSpy).toHaveBeenCalledTimes(1)

    const [value, setValue] = result.current
    expect(value).toEqual({ test: true })

    act(() => {
      setValue({ test: false })
    })

    expect(setItemSpy).toHaveBeenCalledWith(
      'aKey',
      JSON.stringify({ test: false }),
    )
    expect(setItemSpy).toHaveBeenCalledTimes(1)

    expect(result.current[0]).toEqual({ test: false })
    expect(JSON.parse(window.localStorage.getItem('aKey') as string)).toEqual({
      test: false,
    })

    const { result: result2 } = renderHook(
      ({ key, initialValue }) => useLocalStorage(key, initialValue),
      {
        initialProps: {
          key: 'aKey',
          initialValue: { test: true },
        },
      },
    )
    // it should retrieve the result in subsequent render
    expect(result2.current[0]).toEqual({ test: false })
  })
})
