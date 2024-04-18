import { useCallback } from 'react'
import PropTypes from 'prop-types'

import { fetchHouseFlats } from '@/api'
import { WebHouseDto } from '@/api/codegen/src'
import { useAsync, AsyncStatuses } from '@/hooks/useAsync'

import { Collapsible } from '@/components/UI/Collapsible/Collapsible'
import { ListStatuses } from '@/components/UI/ListStatuses/ListStatuses'
import { FlatItem } from '@/components/Requests/FlatItem/FlatItem'

import styles from './HouseItem.module.css'

export const HouseItem = ({ houseDto }) => {
  const {
    call: fetchFlats,
    status: flatsStatus,
    error: flatsError,
    result: flatsList,
  } = useAsync(() => fetchHouseFlats(houseDto.id), [], [])

  const onToggle = useCallback(
    (isOpen) => {
      if (!isOpen) {
        fetchFlats()
      }
    },
    [fetchFlats],
  )

  return (
    <Collapsible
      title={houseDto.name}
      onToggle={onToggle}
    >
      <ListStatuses
        status={flatsStatus}
        error={flatsError}
        list={flatsList}
      />
      {flatsStatus === AsyncStatuses.success && Array.isArray(flatsList) && (
        <div className={styles.houseItem__flats}>
          {flatsList.map((flatDto) => (
            <FlatItem
              key={flatDto.id}
              flatDto={flatDto}
            />
          ))}
        </div>
      )}
    </Collapsible>
  )
}

HouseItem.propTypes = {
  houseDto: PropTypes.instanceOf(WebHouseDto).isRequired,
}

HouseItem.defaultProps = {}
