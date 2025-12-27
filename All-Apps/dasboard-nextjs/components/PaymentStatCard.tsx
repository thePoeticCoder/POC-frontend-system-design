import styles from '../styles/paymentStatCard.module.css'

const PaymentStatCard = ({
  title,
  value,
}: {
  title: string
  value: number //DONE: Add type
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.value}>{value}</p>
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default PaymentStatCard
