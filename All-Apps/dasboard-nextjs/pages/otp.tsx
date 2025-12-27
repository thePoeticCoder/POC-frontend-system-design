//TODO: Add a comment that this is page is not currently in use
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../components/Button'
import OtpInput from '../components/OtpInput'
import styles from '../styles/auth.module.css'

const Otp = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {}
  return (
    <div className={styles.body}>
      <Image alt='login-logo' src='/Login_Logo.png' className={styles.logo} />
      <div className={styles.conatiner}>
        <h2 className={styles.heading}>Verify your account</h2>
        <h3 className={styles.subHeading}>
          Enter verification code sent to your number
        </h3>
        <OtpInput />
        {/* <Button
          content={'Verify'}
          backgroundColor={'#F9CD63'}
          color={'#053233'}
          height={'37px'}
          width={'120px'}
        /> */}
      </div>
      <p className={styles.promptText}>Didn’t get the code?</p>
      <Link href={'/forgot-password'}>
        <a className={styles.link}>Resend OTP</a>
      </Link>
    </div>
  )
}

export default Otp
