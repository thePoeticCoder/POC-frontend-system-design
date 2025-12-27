import styles from '../styles/successInActionModal.module.css'
import { useState } from 'react'
import Lottie from 'lottie-react'
import animationData from '../lotties/green-tick.json'
import CrossIcon from './icons/CrossIcon'
import { useRouter } from 'next/router'
import { useClickOutside } from '../hooks/useClickOutside'
type ModalProps = {
  dataToDisplay: string
  reRoute?: string
}

const SuccessInActionsModal = ({ dataToDisplay, reRoute }: ModalProps) => {
  const [isModalVisible, setIsModalVisible] = useState(true)
  var redirect = reRoute || ''
  const router = useRouter()
  const modalRef = useClickOutside(() => setIsModalVisible(false))
  const handleClose = () => {
    setIsModalVisible(false)
    router.push(`${redirect}`)
  }

  return (
    <>
      {isModalVisible && (
        <div className='modal-bg'>
          <div ref={modalRef} className={styles.container}>
            <div className={styles.closeIcon} onClick={handleClose}>
              <CrossIcon height={16} width={16} color='#F36F59' />
            </div>

            <div className={styles.Tick}>
              <Lottie
                loop={true}
                animationData={animationData}
                autoPlay={true}
                height={50}
                width={50}
              />
            </div>
            <p className={styles.successfullyText}>{dataToDisplay}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default SuccessInActionsModal
