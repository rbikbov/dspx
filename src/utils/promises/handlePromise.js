import { unwrapError } from '../unwrapError'

// https://dev.to/oieduardorabelo/javascript-handling-errors-like-go-3efk
export const handlePromise = async (promise) => {
  try {
    const result = await promise
    return { error: null, result }
  } catch (e) {
    const error = unwrapError(e)
    return { error, result: null }
  }
}
