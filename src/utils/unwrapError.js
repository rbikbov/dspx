import { isPlainObject } from './isPlainObject'

export const unwrapError = (error) => {
  if (
    isPlainObject(error) &&
    Object.prototype.hasOwnProperty.call(error, 'error')
  ) {
    return unwrapError(error.error)
  }
  return error
}

export const getErrorText = (error) => {
  if (error instanceof Error) {
    return error.message
  }

  if (
    isPlainObject(error) &&
    Object.prototype.hasOwnProperty.call(error, 'error')
  ) {
    return getErrorText(error.error)
  }

  if (typeof error === 'string') {
    return error
  }

  return 'Unknown error'
}
