import { memo, useCallback } from 'react'
import PropTypes from 'prop-types'

import { createClient, bindClientToAddress } from '@/api'
import { BindClientDto, ClientDto, FlatDto } from '@/api/codegen/src'
import { useAsync, AsyncStatuses } from '@/hooks/useAsync'
import { handlePromise } from '@/utils/promises/handlePromise'

import { ClientFormContent } from '@/components/HousingStock/ClientFormContent/ClientFormContent'

const MemoizedClientFormContent = memo(ClientFormContent)

export const ClientForm = ({ flatDto, onSuccess }) => {
  const createAndBindClient = async (formData) => {
    const requestClientDto = ClientDto.constructFromObject(formData)
    const createClientRequest = await handlePromise(
      createClient(requestClientDto),
    )

    if (createClientRequest.error) {
      throw createClientRequest.error
    }

    const bindClientRequest = await handlePromise(
      bindClientToAddress(
        BindClientDto.constructFromObject({
          addressId: flatDto.id,
          clientId: createClientRequest.result.id,
        }),
      ),
    )

    if (bindClientRequest.error) {
      throw bindClientRequest.error
    }

    onSuccess()
  }

  const {
    call: callCreateAndBindClient,
    status: createAndBindClientStatus,
    error: createAndBindClientError,
  } = useAsync(createAndBindClient, [], [flatDto.id])

  const onSubmit = useCallback(
    async (_, formData) => {
      if (createAndBindClientStatus === AsyncStatuses.pending) {
        return
      }
      const { error } = await callCreateAndBindClient(formData)
      if (error) {
        throw error
      }
    },
    [callCreateAndBindClient, createAndBindClientStatus],
  )

  return (
    <MemoizedClientFormContent
      status={createAndBindClientStatus}
      onSubmit={onSubmit}
      formError={createAndBindClientError}
    />
  )
}

ClientForm.propTypes = {
  flatDto: PropTypes.instanceOf(FlatDto).isRequired,
  onSuccess: PropTypes.func.isRequired,
}

ClientForm.defaultProps = {
  onSuccess() {
    console.log('Клиент успешно создан и добавлен в квартиру')
  },
}
