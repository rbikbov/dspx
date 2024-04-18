import PropTypes from 'prop-types'

import { AsyncStatuses } from '@/hooks/useAsync'
import { useFormField } from '@/hooks/useFormField'
import {
  emailValidator,
  minLengthValidator,
  requiredValidator,
  ruPhoneValidator,
} from '@/utils/validators'
import { getErrorText } from '@/utils/unwrapError'

import { FormField } from '@/components/UI/FormField/FormField'

import styles from './ClientFormContent.module.css'

const nameValidators = [requiredValidator, minLengthValidator(5)]
const phoneValidators = [requiredValidator, ruPhoneValidator]
const emailValidators = [requiredValidator, emailValidator]

export const ClientFormContent = ({ status, onSubmit, formError }) => {
  const name = useFormField('', nameValidators)
  const phone = useFormField('', phoneValidators)
  const email = useFormField('', emailValidators)

  const fields = [name, phone, email]

  const formEmpty = fields.every((f) => !f.value)

  const resetForm = () => {
    fields.forEach((f) => f.resetValue())
  }

  const someFieldHasError = fields.some((field) => Boolean(field.errors.length))

  const isPending = status === AsyncStatuses.pending

  const isSubmitDisabled = isPending || someFieldHasError

  const wrappedOnSubmit = (e) => {
    e.preventDefault()
    fields.forEach((f) => f.touch())
    if (isSubmitDisabled) {
      return
    }
    onSubmit(e, {
      name: name.value,
      phone: phone.value,
      email: email.value,
    })
      .then(() => resetForm())
      .catch(console.warn)
  }

  return (
    <form
      onSubmit={wrappedOnSubmit}
      onReset={resetForm}
      className={styles.clientFormContent}
    >
      <FormField
        label="Имя"
        autoComplete="name"
        type="text"
        name="name"
        readOnly={isPending}
        value={name.value}
        onChange={name.onChange}
        onBlur={name.onBlur}
        errors={name.errors || ['test']}
        isDirty={name.isDirty}
      />
      <FormField
        label="Телефон"
        autoComplete="phone"
        type="text"
        name="phone"
        readOnly={isPending}
        value={phone.value}
        onChange={phone.onChange}
        onBlur={phone.onBlur}
        errors={phone.errors}
        isDirty={phone.isDirty}
      />
      <FormField
        label="Email"
        autoComplete="email"
        type="text"
        name="email"
        readOnly={isPending}
        value={email.value}
        onChange={email.onChange}
        onBlur={email.onBlur}
        errors={email.errors}
        isDirty={email.isDirty}
      />
      <div className={styles.clientFormContent__actions}>
        <button disabled={isSubmitDisabled}>Отправить</button>
        <button
          type="reset"
          disabled={isPending || formEmpty}
        >
          Сбросить
        </button>
      </div>
      {status === AsyncStatuses.error && (
        <div className={styles.clientFormContent__error}>
          Ошибка: {getErrorText(formError)}
        </div>
      )}
    </form>
  )
}

ClientFormContent.propTypes = {
  status: PropTypes.oneOf(Object.keys(AsyncStatuses)).isRequired,
  onSubmit: PropTypes.func.isRequired,
  formError: PropTypes.oneOfType([
    PropTypes.instanceOf(Error),
    PropTypes.string,
  ]),
}

ClientFormContent.defaultProps = {
  formError: '',
}
