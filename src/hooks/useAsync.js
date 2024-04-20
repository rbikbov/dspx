import { handlePromise } from '@/utils/promises/handlePromise'
import { useCallback, useState } from 'react'

export const AsyncStatuses = {
  idle: 'idle',
  pending: 'pending',
  error: 'error',
  success: 'success',
}

Object.freeze(AsyncStatuses)

export function useAsync(callback, initialResult = null, dependencies = []) {
  const [status, setStatus] = useState(AsyncStatuses.idle)
  const [error, setError] = useState('')
  const [result, setResult] = useState(initialResult)

  const call = useCallback(
    async (...args) => {
      setStatus(AsyncStatuses.pending)
      setError('')
      setResult(initialResult)
      const { error, result } = await handlePromise(callback(...args))
      if (error) {
        setStatus(AsyncStatuses.error)
        setError(error)
      } else {
        setStatus(AsyncStatuses.success)
        setResult(result)
      }
      return { error, result }
    },
    [callback, JSON.stringify(initialResult), ...dependencies],
  )

  return { call, status, error, result }
}
