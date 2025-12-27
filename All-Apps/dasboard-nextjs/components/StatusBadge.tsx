import React from 'react'

type StatusBadgePropType = {
  text: string
  containerStyle: string
  badgeSpecificStyle: string
}

export const StatusBadge = ({
  text,
  containerStyle,
  badgeSpecificStyle,
}: StatusBadgePropType) => {
  return <div className={`${containerStyle} ${badgeSpecificStyle}`}>{text}</div>
}
