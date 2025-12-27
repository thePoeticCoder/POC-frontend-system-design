export type Notification = {
  id: number
  createdAt: Date
  orderId: string
  notificationType: NotificationType
  hubspotTicketId: string
  cashlessHospitalId: string
  content: string
  isRead: boolean
}

export enum NotificationType {
  ORDER_NOTIFICATION,
  PAYMENT_NOTIFICATION,
}

export enum NotificationKind {
  UNREAD,
  READ,
}
