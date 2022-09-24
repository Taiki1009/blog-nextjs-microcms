import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef } from 'react'
import styles from './accordion.module.css'

type AccordionProps = {
  heading: string
  children: React.ReactNode
}

export default function Accordion({ heading, children }: AccordionProps) {
  const [textIsOpen, setTextIsOpen] = useState(false)
  const refText = useRef(null as null | HTMLDivElement)

  const toggleText = () => {
    setTextIsOpen((prev) => !prev)
  }

  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} />
        </button>
      </h3>

      {/* [FIXME] テキストの高さを取得して動的にstyleを変更するが、型が合わないためエラー */}
      <div
        className={styles.text}
        ref={refText}
        // style={{
        //   '--text-height': refText.current
        //     ? `${refText.current.scrollHeight}px`
        //     : '0px',
        // }}
      >
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  )
}
