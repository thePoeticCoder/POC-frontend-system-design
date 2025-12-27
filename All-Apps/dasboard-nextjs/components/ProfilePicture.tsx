import Image from 'next/image'
import React from 'react'
const ProfilePicture = ({
  profilePictureUrl,
}: {
  profilePictureUrl: string
}) => {
  return <Image height={30} width={30} alt='man' src={profilePictureUrl} />
  //DONE: Why the props are not used?
}

export default ProfilePicture
