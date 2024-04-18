import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './Collapsible.module.css'

export const Collapsible = ({ open, children, title, onToggle }) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
    onToggle(isOpen)
  }

  return (
    <div className={styles.collapsible}>
      <div className={styles.collapsible__top}>
        <h4 className={styles.collapsible__top__title}>{title}</h4>
        <button
          type="button"
          className={styles.collapsible__top__btn}
          onClick={handleToggle}
        >
          {isOpen ? <span>-</span> : <span>+</span>}
        </button>
      </div>

      {isOpen && children}
    </div>
  )
}

Collapsible.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func,
}

Collapsible.defaultProps = {
  open: false,
  onToggle: () => {},
}
