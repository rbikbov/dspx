import { useCallback } from 'react'
import PropTypes from 'prop-types'

import { createClient, bindClientToAddress } from '@/api'
import { BindClientDto, ClientDto, FlatDto } from '@/api/codegen/src'
import { useAsync } from '@/hooks/useAsync'
import { handlePromise } from '@/utils/promises/handlePromise'

import { ClientFormContent } from '@/components/HousingStock/ClientFormContent/ClientFormContent'

const createAndBindClient = async (formData, flatDto) => {
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
}

export const ClientForm = ({ flatDto, onSuccess }) => {
  const {
    call: callCreateAndBindClient,
    status: createAndBindClientStatus,
    error: createAndBindClientError,
  } = useAsync(createAndBindClient, [], [flatDto.id])

  const onSubmit = useCallback(
    async (_, formData, resetForm) => {
      const { error } = await callCreateAndBindClient(formData, flatDto)
      if (error) {
        return
      }
      resetForm()
      onSuccess()
    },
    [callCreateAndBindClient, flatDto, onSuccess],
  )

  return (
    <ClientFormContent
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
