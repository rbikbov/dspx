import { useEffect } from 'react'

import { fetchRequestStreets } from '@/api'
import { useAsync, AsyncStatuses } from '@/hooks/useAsync'

import { StreetItem } from '@/components/Requests/StreetItem/StreetItem'
import { ListStatuses } from '@/components/UI/ListStatuses/ListStatuses'

import styles from './MainNav.module.css'

export const MainNav = () => {
  const {
    call: fetchStreets,
    status: streetsStatus,
    error: streetsError,
    result: streetsList,
  } = useAsync(fetchRequestStreets, [], [])

  useEffect(() => {
    fetchStreets()
  }, [fetchStreets])

  return (
    <div className={styles.mainNav}>
      <ListStatuses
        status={streetsStatus}
        error={streetsError}
        list={streetsList}
      />
      {streetsStatus === AsyncStatuses.success &&
        Array.isArray(streetsList) &&
        streetsList.map((streetDto) => {
          return (
            <StreetItem
              key={streetDto.id}
              streetDto={streetDto}
            />
          )
        })}
    </div>
  )
}

MainNav.propTypes = {}

MainNav.defaultProps = {}
