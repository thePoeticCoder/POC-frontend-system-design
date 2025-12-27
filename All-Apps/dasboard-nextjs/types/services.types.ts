export type SearchFilterType = { [index: string]: string };

export type PaymentServiceType = {
  hospitalId: string;
  page: number;
  searchFilter: SearchFilterType;
};

export type OpenTicketsServiceType = {
  hospitalId: string;
  page: number;
  orderStatus: "OPEN";
  searchFilterOpenTickets: SearchFilterType;
};

export type CloseTicketsServiceType = {
  hospitalId: string;
  page: number;
  orderStatus: "CLOSED";
  searchFilterCloseTickets: SearchFilterType;
  dateRangeFilterCloseTickets: { startDate: Date; endDate: Date } | {};
};
