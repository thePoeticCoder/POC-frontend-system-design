import Link from 'next/link'
import { VideoFrame } from '../components/VideoFrame'
import styles from '../styles/platformHelp.module.css'

const platformHelp = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Tutorial Videos</h2>
      <div className={styles.videosContainer}>
        <div>
          {/* //TODO: Store in an array and loop through it */}
          <VideoFrame
            src='https://www.youtube.com/embed/kAkvfRmg2wY'
            title='Sample video 1'
          />
          <p>How to inform us about hospital admissions</p>
        </div>
        <div>
          <VideoFrame
            src='https://www.youtube.com/embed/kAkvfRmg2wY'
            title='Sample video 2'
          />
          <p>How to inform us about hospital admissions</p>
        </div>
        <div>
          <VideoFrame
            src='https://www.youtube.com/embed/kAkvfRmg2wY'
            title='Sample video 3'
          />
          <p>How to inform us about hospital admissions</p>
        </div>
      </div>
      <Link href='/faq'>
        <a className={styles.link}>Click here for FAQs</a>
      </Link>
    </div>
  )
}

platformHelp.auth = true
platformHelp.roles = ['ADMIN', 'USER']
platformHelp.title = 'Platform Help'
export default platformHelp
