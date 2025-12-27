import styles from '../styles/pagination.module.css'
import { createPaginationRange } from '../utils/utils'
import { SET_NEXT_PAGE, SET_PAGE, SET_PREV_PAGE } from '../constants/constants'
import { PaginationPropType } from '../types/paginationProps.types'

const Pagination = ({
  pageNo,
  paginationData,
  ticketsDispatch,
  totalPages,
}: PaginationPropType) => {
  const pages = createPaginationRange(totalPages)

  return (
    <>
      {paginationData ? (
        <div className={styles.container}>
          {pages.length > 1 ? (
            <span
              className={styles.active}
            >{`Page ${paginationData?.pageNo} of ${pages.length}`}</span>
          ) : null}
          <button
            className={styles.prevNextBtn}
            onClick={() => {
              paginationData?.pageNo !== 1 &&
                ticketsDispatch({
                  type: SET_PREV_PAGE,
                  payload: { pageNo: 1 },
                })
            }}
            disabled={paginationData?.pageNo === 1}
          >
            &lt;
          </button>
          {pages.map((pageOption) => (
            <button
              className={`${styles.pageBtn} ${
                pageOption === paginationData?.pageNo && styles.active
              }`}
              onClick={() =>
                ticketsDispatch({
                  type: SET_PAGE,
                  payload: { pageNo: pageOption },
                })
              }
              key={crypto.randomUUID()}
            >
              {pageOption}
            </button>
          ))}
          <button
            className={styles.prevNextBtn}
            onClick={() => {
              if (pageNo !== totalPages) {
                ticketsDispatch({
                  type: SET_NEXT_PAGE,
                  payload: { pageNo: 1 },
                })
              }
            }}
            disabled={paginationData?.pageNo === totalPages}
          >
            &gt;
          </button>
        </div>
      ) : null}
    </>
  )
}

export default Pagination
