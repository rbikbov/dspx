import { useId } from 'react'
import PropTypes from 'prop-types'

import styles from './FormField.module.css'

export const FormField = ({
  errors,
  isDirty,
  tag,
  children,
  label,
  ...rest
}) => {
  const Component = tag
  const id = useId()

  return (
    <div className={styles.formField}>
      {Boolean(label) && (
        <label
          className={styles.formField__label}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <Component
        className={styles.formField__field}
        id={id}
        {...rest}
      >
        {children}
      </Component>
      {isDirty && Array.isArray(errors) && Boolean(errors.length) && (
        <div className={styles.formField__errors}>
          <div className={styles.formFieldError}>{errors[0]}</div>
        </div>
      )}
    </div>
  )
}

FormField.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
  isDirty: PropTypes.bool.isRequired,
  tag: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
}

FormField.defaultProps = {
  tag: 'input',
  errors: [],
}
