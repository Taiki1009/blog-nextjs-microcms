import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from './pagination.module.css'

type PaginationProps = {
  prevText?: string
  prevUrl?: string
  nextText?: string
  nextUrl?: string
}

const Pagination = ({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = '',
}: PaginationProps) => {
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl}>
            <a className={styles.iconText}>
              <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
              <span>{prevText}</span>
            </a>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.prev}>
          <Link href={nextUrl}>
            <a className={styles.iconText}>
              <FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
              <span>{nextText}</span>
            </a>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default Pagination
