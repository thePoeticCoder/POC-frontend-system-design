import Image from 'next/image'
import Link from 'next/link'
import versionInfo from '../package.json'
import { useRouter } from 'next/router'
import styles from '../styles/sidebar.module.css'
import AdmissionIcon from './icons/AdmissionIcon'
import ContactIcon from './icons/ContactIcon'
import HelpIcon from './icons/HelpIcon'
import HomeIcon from './icons/HomeIcon'
import NotificationIcon from './icons/NotificationIcon'
import PaymentIcon from './icons/PaymentIcon'
import TermsIcon from './icons/TermsIcon'
import UpdateDetailsIcon from './icons/UpdateDetailsIcon'
import UserIcon from './icons/UserIcon'
import SidebarLogo from '../public/SideBar_Logo.png'
import KenkoLogo from '../public/kenkoLogo.png'
import NotificationBadge from './NotificationBadge'
import { SideBarLink } from './SideBarLink'

const SideBar = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  var roleOfLoggedInPerson = localStorage.getItem('role') || ' '

  return (
    <div className={styles.container}>
      <div className={styles.kenkoLogo}>
        <Image
          src={KenkoLogo}
          layout='fill'
          objectFit='contain'
          placeholder='blur'
          alt='kenko-logo'
        />
      </div>
      <div className={styles.logo}>
        <Link href='/'>
          <Image
            layout='fill'
            objectFit='contain'
            placeholder='blur'
            alt='sidebar-logo'
            src={SidebarLogo}
          />
        </Link>
      </div>
      <ul className={styles.linksContainer}>
        <li>
          <Link href={'/'}>
            <a
              className={
                styles.links +
                ' ' +
                (currentRoute === '/' || currentRoute === '/tickets/[orderId]'
                  ? styles.activeLink
                  : '')
              }
            >
              <HomeIcon
                color={
                  currentRoute === '/' || currentRoute === '/tickets/[orderId]'
                    ? '#1D4846'
                    : '#9D9D9D'
                }
                height={15}
                width={17}
                className={styles.sideBarIcon}
              />
              <p>Homepage</p>
            </a>
          </Link>
        </li>
        <li>
          <SideBarLink
            route='/new-admission'
            extraRoute='/new-admission/[userId]'
            currentRoute={currentRoute}
            inActiveLinkStyle={styles.links}
            activeLinkStyle={styles.activeLink}
            IconComponent={() => (
              <AdmissionIcon
                color={
                  currentRoute === '/new-admission' ||
                  currentRoute === '/new-admission/[userId]'
                    ? '#1D4846'
                    : '#9D9D9D'
                }
                height={15}
                width={17}
                className={styles.sideBarIcon}
              />
            )}
            linkText='New Admission'
          />
        </li>
        <li>
          <SideBarLink
            route='/track-payment'
            currentRoute={currentRoute}
            inActiveLinkStyle={styles.links}
            activeLinkStyle={styles.activeLink}
            IconComponent={() => (
              <PaymentIcon
                color={
                  currentRoute === '/track-payment' ? '#1D4846' : '#9D9D9D'
                }
                height={15}
                width={17}
                className={styles.sideBarIcon}
              />
            )}
            linkText='Track Payment'
          />
        </li>
        {roleOfLoggedInPerson === 'ADMIN' && (
          <li>
            <SideBarLink
              route='/user-access'
              currentRoute={currentRoute}
              extraRoute='/edit-existing-user'
              inActiveLinkStyle={styles.links}
              activeLinkStyle={styles.activeLink}
              IconComponent={() => (
                <UserIcon
                  color={
                    currentRoute === '/user-access' ||
                    currentRoute === '/edit-existing-user'
                      ? '#1D4846'
                      : '#9D9D9D'
                  }
                  height={15}
                  width={17}
                  className={styles.sideBarIcon}
                />
              )}
              linkText='User Access'
            />
          </li>
        )}
        <li>
          <SideBarLink
            route='/update-details'
            currentRoute={currentRoute}
            inActiveLinkStyle={styles.links}
            activeLinkStyle={styles.activeLink}
            IconComponent={() => (
              <UpdateDetailsIcon
                color={
                  currentRoute === '/update-details' ? '#1D4846' : '#9D9D9D'
                }
                height={15}
                width={17}
                className={styles.sideBarIcon}
              />
            )}
            linkText='Update Details'
          />
        </li>
        <li>
          <SideBarLink
            route='/contact-us'
            currentRoute={currentRoute}
            inActiveLinkStyle={styles.links}
            activeLinkStyle={styles.activeLink}
            IconComponent={() => (
              <ContactIcon
                color={currentRoute === '/contact-us' ? '#1D4846' : '#9D9D9D'}
                height={15}
                width={17}
                className={styles.sideBarIcon}
              />
            )}
            linkText='Contact Us'
          />
        </li>
        <li>
          <SideBarLink
            route='/platform-help'
            extraRoute='/faq'
            currentRoute={currentRoute}
            inActiveLinkStyle={styles.links}
            activeLinkStyle={styles.activeLink}
            IconComponent={() => (
              <HelpIcon
                color={
                  currentRoute === '/platform-help' || currentRoute === '/faq'
                    ? '#1D4846'
                    : '#9D9D9D'
                }
                height={15}
                width={17}
                className={styles.sideBarIcon}
              />
            )}
            linkText='Platform Help'
          />
        </li>
        <li>
          <SideBarLink
            route='/terms-and-conditions'
            currentRoute={currentRoute}
            inActiveLinkStyle={styles.links}
            activeLinkStyle={styles.activeLink}
            IconComponent={() => (
              <TermsIcon
                color={
                  currentRoute === '/terms-and-conditions'
                    ? '#1D4846'
                    : '#9D9D9D'
                }
                height={15}
                width={17}
                className={styles.sideBarIcon}
              />
            )}
            linkText='T&C'
          />
        </li>
        <li>
          <Link href={'/notifications'}>
            <a
              className={
                styles.links +
                ' ' +
                (currentRoute === '/notifications' ? styles.activeLink : '')
              }
            >
              <NotificationIcon
                color={
                  currentRoute === '/notifications' ? '#1D4846' : '#9D9D9D'
                }
                height={15}
                width={17}
                className={styles.sideBarIcon}
              />
              Notifications
              <NotificationBadge className={styles.notificationBadge} />
            </a>
          </Link>
        </li>
      </ul>
      <p className={styles.version}>{`v ${versionInfo.version}`}</p>
    </div>
  )
}

export default SideBar
