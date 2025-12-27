import Link from 'next/link'
import React from 'react'
import { UserFriendlyMessage } from '../components/UserFriendlyMessage'
import PageNotFoundImage from '../public/pageNotFound.png'
import styles from '../styles/pageNotFound.module.css'

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <UserFriendlyMessage
        imageUrl={PageNotFoundImage}
        title='Page not found!'
        subTitle="Are you sure this page exists? We can't locate it. Check the link again and take deep breaths, you'll figure it out."
      />
      <div className={styles.homeLink}>
        <Link href='/'>Go Home</Link>
      </div>
    </div>
  )
}
PageNotFound.auth = false
PageNotFound.title = '404 Page'
export default PageNotFound
