import Link from 'next/link'
import styles from '../styles/newAdmissionSuccessModal.module.css'
import TickMark from '../public/TickMark.png'
import Image from 'next/image'

const NewAdmissionSuccessModal = ({ orderId }: { orderId: string }) => {
  return (
    <div className='modal-bg'>
      <div className={styles.container}>
        <Image src={TickMark} alt='Tick mark symbol' width={62} height={62} />
        <h2 className={styles.heading}>New Admission Initiated!</h2>
        <p className={styles.subHeading}>
          Visit homepage to find the new admission details...
        </p>
        <div className={styles.linkContainer}>
          <Link href='/'>
            <p>Go Back to Homepage</p>
          </Link>
          <Link href={`/tickets/${orderId}`}>
            <p>Go To Ticket</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewAdmissionSuccessModal
