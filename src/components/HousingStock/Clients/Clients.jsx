import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { fetchFlatClients } from '@/api'
import { FlatDto } from '@/api/codegen/src'
import { AsyncStatuses, useAsync } from '@/hooks/useAsync'

import { ListStatuses } from '@/components/UI/ListStatuses/ListStatuses'
import { ClientItem } from '@/components/HousingStock/ClientItem/ClientItem'
import { ClientForm } from '@/components/HousingStock/ClientForm/ClientForm'

import styles from './Clients.module.css'

export const Clients = ({ flatDto }) => {
  const [clientsList, setClientsList] = useState([])

  const wrappedFetchFlatClients = useCallback(async () => {
    const result = await fetchFlatClients(flatDto.id)
    setClientsList(result)
  }, [flatDto.id])

  const {
    call: fetchClients,
    status: clientsStatus,
    error: clientsError,
  } = useAsync(wrappedFetchFlatClients, [], [])

  useEffect(() => {
    fetchClients()
  }, [flatDto.id, fetchClients])

  const onClientRemoveSuccess = useCallback(() => {
    fetchClients()
  }, [fetchClients])

  const onSuccessCreateAndBindClient = useCallback(() => {
    fetchClients()
  }, [fetchClients])

  return (
    <>
      <div className={styles.clientsTop}>
        <div
          className={[
            styles.clientsTop__statuses,
            clientsStatus === AsyncStatuses.pending ||
            clientsStatus === AsyncStatuses.error
              ? styles.clientsTop__statuses_bg
              : '',
            clientsStatus === AsyncStatuses.success &&
            Array.isArray(clientsList) &&
            Boolean(clientsList.length)
              ? styles.clientsTop__statuses_hidden
              : '',
          ]
            .join(' ')
            .trim()}
        >
          {flatDto?.id && (
            <ListStatuses
              status={clientsStatus}
              error={clientsError}
              list={clientsList}
            />
          )}
        </div>
        {flatDto?.id &&
          Array.isArray(clientsList) &&
          Boolean(clientsList.length) && (
            <div className={styles.clientsList}>
              {clientsList.map((clientDto) => (
                <ClientItem
                  key={clientDto.id}
                  clientDto={clientDto}
                  onRemoveSuccess={onClientRemoveSuccess}
                />
              ))}
            </div>
          )}
      </div>
      <div className={styles.clientsBottom}>
        <h3>Добавить клиента</h3>
        <ClientForm
          flatDto={flatDto}
          onSuccess={onSuccessCreateAndBindClient}
        />
      </div>
    </>
  )
}

Clients.propTypes = {
  flatDto: PropTypes.instanceOf(FlatDto).isRequired,
}

Clients.defaultProps = {}
