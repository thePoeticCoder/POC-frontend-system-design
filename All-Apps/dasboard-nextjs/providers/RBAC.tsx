import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { UserFriendlyMessage } from '../components/UserFriendlyMessage'
import PageNotFoundImage from '../public/pageNotFound.png'
import { tryLocalLogin } from '../services/localLogin'

const RoleBasedAccess = ({
  children,
  roles,
}: {
  children: React.ReactNode
  roles: String[]
}) => {
  const router = useRouter()
  const [hasAccessOnRole, setHasAccessOnRole] = useState<boolean>(false)
  const [roleOfUser, setRolesOfUser] = useState<String>('') 

  useEffect(() => {
    setHasAccessOnRole(false)
  setRolesOfUser(localStorage.getItem('role') || ' ')

    ;async () => {
      if (roleOfUser.length === 0) {
        const isLocalLogin = await tryLocalLogin()
        if (!isLocalLogin) {
          router.replace({
            pathname: '/',
            query: { redirectTo: router.pathname },
          })
        }
      }
    }

    if (!roles) {
      setHasAccessOnRole(true)
      return
    } else if (roles && roleOfUser && roles.includes(roleOfUser)) {
      setHasAccessOnRole(true)
      return
    }
  }, [roles, router, roleOfUser])
  if (!hasAccessOnRole) {
    return (
      <div>
        <UserFriendlyMessage
          imageUrl={PageNotFoundImage}
          title='Page not found!'
          subTitle="Are you sure this page exists? We can't locate it. Check the link again and take deep breaths, you'll figure it out."
        />
      </div>
    )
  }

  return <section>{children}</section>
}

export default RoleBasedAccess
