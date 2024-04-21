import { useCallback, useMemo, useState } from 'react'

export const useFormField = (initialValue, validators = []) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setIsDirty] = useState(false)

  const errors = useMemo(
    () => validators.map((v) => v({ value })).filter(Boolean),
    [validators, value],
  )

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value)
    },
    [setValue],
  )

  const touch = useCallback(() => {
    setIsDirty(true)
  }, [setIsDirty])

  const onBlur = useCallback(() => {
    touch()
  }, [touch])

  const resetValue = useCallback(() => {
    setValue(initialValue)
    setIsDirty(false)
  }, [setValue, setIsDirty, initialValue])

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
