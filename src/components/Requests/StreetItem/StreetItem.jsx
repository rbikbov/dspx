import { useCallback } from 'react'
import PropTypes from 'prop-types'

import { fetchStreetHouses } from '@/api'
import { StreetDto } from '@/api/codegen/src'
import { useAsync, AsyncStatuses } from '@/hooks/useAsync'

import { Collapsible } from '@/components/UI/Collapsible/Collapsible'
import { ListStatuses } from '@/components/UI/ListStatuses/ListStatuses'
import { HouseItem } from '@/components/Requests/HouseItem/HouseItem'

export const StreetItem = ({ streetDto }) => {
  const {
    call: fetchHouses,
    status: housesStatus,
    error: housesError,
    result: housesList,
  } = useAsync(() => fetchStreetHouses(streetDto.id), [], [])

  const onToggle = useCallback(
    (isOpen) => {
      if (!isOpen) {
        fetchHouses()
      }
    },
    [fetchHouses],
  )

  return (
    <Collapsible
      title={streetDto.nameWithPrefix}
      onToggle={onToggle}
    >
      <ListStatuses
        status={housesStatus}
        error={housesError}
        list={housesList}
      />
      {housesStatus === AsyncStatuses.success &&
        Array.isArray(housesList) &&
        housesList.map((houseDto) => {
          return (
            <HouseItem
              key={houseDto.id}
              houseDto={houseDto}
            />
          )
        })}
    </Collapsible>
  )
}

StreetItem.propTypes = {
  streetDto: PropTypes.instanceOf(StreetDto).isRequired,
}

StreetItem.defaultProps = {}
