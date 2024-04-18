export const requiredValidator = ({ value }) =>
  !value.trim().length ? 'Поле обязательно для заполнения' : ''

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export const emailValidator = ({ value }) =>
  !emailRegex.test(value) ? 'Некорректный email' : ''

const ruPhoneRegex = /^((\+7|8)[0-9]{10})$/

export const ruPhoneValidator = ({ value }) =>
  !ruPhoneRegex.test(value) ? 'Некорректный номер телефона' : ''

export const minLengthValidator =
  (minLength) =>
  ({ value }) =>
    value.trim().length < minLength
      ? `Минимальное количество символов ${minLength}`
      : ''
