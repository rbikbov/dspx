import { useMemo } from 'react'
import PropTypes from 'prop-types'

import { FlatDto } from '@/api/codegen/src'
import { useActiveFlatContext } from '@/hooks/useActiveFlatContext'

import styles from './FlatItem.module.css'

export const FlatItem = ({ flatDto }) => {
  const { activeFlat, setActiveFlat } = useActiveFlatContext()

  const isCurrentFlatActive = useMemo(
    () => flatDto.id === activeFlat?.id,
    [flatDto, activeFlat],
  )

  const selectFlat = () => {
    if (isCurrentFlatActive) {
      return
    }
    setActiveFlat(flatDto)
  }

  return (
    <div
      className={[
        styles.flatItem,
        flatDto.typeId === 1 ? styles.flatItem_house : '',
        flatDto.typeId === 2 ? styles.flatItem_entrance : '',
        isCurrentFlatActive ? styles.flatItem_active : '',
      ]
        .join(' ')
        .trim()}
    >
      <button
        type="button"
        className={styles.flatItem__btn}
        onClick={selectFlat}
        disabled={isCurrentFlatActive}
      >
        {flatDto.name}
      </button>
    </div>
  )
}

FlatItem.propTypes = {
  flatDto: PropTypes.instanceOf(FlatDto).isRequired,
}

FlatItem.defaultProps = {}
