import styles from '../styles/reusablePagination.module.css'
import { ReusablePaginationProps } from '../types/reusablePagination.type'

export const ReusablePagination = ({
  page,
  setPage,
  pageSize,
  totalRecords,
  hasMore,
  isPreviousData,
}: ReusablePaginationProps) => {
  const totalPages = Math.ceil(totalRecords / pageSize)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  if (totalRecords === 0) {
    return null
  }

  return (
    <div className={styles.container}>
      <span className={styles.pageDetails}>
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === 1}
        onClick={() => setPage((old: number) => Math.max(old - 1, 0))}
        className={styles.button}
      >
        &lt;
      </button>
      {pageNumbers.map((pageNumber) => (
        <span
          key={crypto.randomUUID()}
          className={`${styles.pageNumber} ${
            pageNumber === page ? styles.active : ''
          }`}
          onClick={() => setPage(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
      <button
        disabled={isPreviousData || !hasMore}
        onClick={() => {
          if (!isPreviousData && hasMore) {
            setPage((old) => old + 1)
          }
        }}
        className={styles.button}
      >
        &gt;
      </button>
    </div>
  )
}

ReusablePagination.defaultProps = {
  page: 1,
  pageSize: 5,
  totalRecords: 0,
  hasMore: false, // totalRecords > (page - 1) * pageSize + pageSize,
  isPreviousData: false,
}
