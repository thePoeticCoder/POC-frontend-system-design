import styles from '../styles/documentsUpload.module.css'
import EditIcon from './icons/EditIcon'

type DocumentsUploadPropsType = {
  toggleEditUploadedDocsModal: () => void
  children: React.ReactNode | React.ReactNode[] // TODO: Move this common types file
  orderStatus: string | undefined
}

const DocumentsUpload = ({
  toggleEditUploadedDocsModal,
  children,
  orderStatus,
}: DocumentsUploadPropsType) => {
  // DONE: DocumentUpload modal can be used for discharge as well as admission, hence use a generic name

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Documents</h3>
      {children}
      {orderStatus === 'WAITING_FOR_INTIMATION_DOCUMENTS' ? (
        <div className={styles.editIcon} onClick={toggleEditUploadedDocsModal}>
          <EditIcon height={23} width={23} />
        </div>
      ) : null}
    </div>
  )
}

export default DocumentsUpload
