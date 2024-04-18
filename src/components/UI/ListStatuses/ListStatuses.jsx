import PropTypes from 'prop-types'

import { AsyncStatuses } from '@/hooks/useAsync'
import { getErrorText } from '@/utils/unwrapError'

import styles from './ListStatuses.module.css'

export const ListStatuses = ({ status, error, list }) => {
  return (
    <>
      {status === AsyncStatuses.pending && <div>Загрузка...</div>}
      {status === AsyncStatuses.error && (
        <div className={styles.listStatuses__error}>
          Ошибка: {getErrorText(error)}
        </div>
      )}
      {status === AsyncStatuses.success &&
        Array.isArray(list) &&
        !list.length && <div>Пусто</div>}
    </>
  )
}

ListStatuses.propTypes = {
  status: PropTypes.oneOf(Object.keys(AsyncStatuses)).isRequired,
  error: PropTypes.oneOfType([PropTypes.instanceOf(Error), PropTypes.string]),
  list: PropTypes.instanceOf(Array).isRequired,
}

ListStatuses.defaultProps = {
  error: '',
}
