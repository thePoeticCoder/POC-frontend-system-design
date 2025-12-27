export type OpenTicketsColumn = {
  hubspotTicketId: number;
  userName: string;
  admissionDate: Date;
  dischargeDate: Date;
  orderStatus: string;
  link: string;
};

export type CloseTicketsColumn = {
  hubspotTicketId: string;
  userName: string;
  admissionDate: Date;
  dischargeDate: Date;
  link: string;
};
