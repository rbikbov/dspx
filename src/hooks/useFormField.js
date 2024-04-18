import { useState } from 'react'

export const useFormField = (initialValue, validators = []) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setIsDirty] = useState(false)

  const errors = validators.map((v) => v({ value })).filter(Boolean)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const touch = () => {
    setIsDirty(true)
  }

  const onBlur = () => {
    touch()
  }

  const resetValue = () => {
    setValue(initialValue)
    setIsDirty(false)
  }

  return {
    value,
    setValue,
    resetValue,
    onChange,
    onBlur,
    touch,
    isDirty,
    errors,
  }
}
