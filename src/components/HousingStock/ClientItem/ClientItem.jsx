import PropTypes from 'prop-types'

import { removeClientFromFlat } from '@/api'
import { ClientDto } from '@/api/codegen/src'
import { AsyncStatuses, useAsync } from '@/hooks/useAsync'
import { getErrorText } from '@/utils/unwrapError'

import styles from './ClientItem.module.css'

export const ClientItem = ({ clientDto, onRemoveSuccess }) => {
  const wrappedRemoveClient = async () => {
    await removeClientFromFlat(clientDto.bindId)
    onRemoveSuccess(clientDto)
    return null
  }

  const {
    call: removeClient,
    status: removeStatus,
    error: removeError,
  } = useAsync(wrappedRemoveClient, null, [clientDto.id])

  const onDelete = () => {
    removeClient()
  }

  return (
    <div
      className={styles.clientItem}
      key={clientDto.id}
    >
      <div>ID: {clientDto.id}</div>
      <div>Bind ID: {clientDto.bindId}</div>
      <div>{clientDto.name}</div>
      <div>{clientDto.email}</div>
      <div>{clientDto.phone}</div>
      <div>
        {removeStatus === AsyncStatuses.pending && <div>Удаление...</div>}
        {removeStatus === AsyncStatuses.error && (
          <div className={styles.clientItem__error}>
            Ошибка удаления: {getErrorText(removeError)}
          </div>
        )}
      </div>
      <div className={styles.clientItem__actions}>
        <button
          type="button"
          onClick={onDelete}
          disabled={removeStatus === AsyncStatuses.pending}
        >
          Удалить
        </button>
      </div>
    </div>
  )
}

ClientItem.propTypes = {
  clientDto: PropTypes.instanceOf(ClientDto).isRequired,
  onRemoveSuccess: PropTypes.func,
}

ClientItem.defaultProps = {
  onRemoveSuccess: (clientDto) => {
    console.log('Жилец успешно удален: ', clientDto)
  },
}
