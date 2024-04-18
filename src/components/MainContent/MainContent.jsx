import { useActiveFlatContext } from '@/hooks/useActiveFlatContext'

import { Clients } from '@/components/HousingStock/Clients/Clients'

import styles from './MainContent.module.css'

export const MainContent = () => {
  const { activeFlat } = useActiveFlatContext()

  return (
    <div className={styles.mainContent}>
      {!activeFlat && <div>Выберите квартиру</div>}
      {activeFlat?.id && <Clients flatDto={activeFlat} />}
    </div>
  )
}

MainContent.propTypes = {}

MainContent.defaultProps = {}
