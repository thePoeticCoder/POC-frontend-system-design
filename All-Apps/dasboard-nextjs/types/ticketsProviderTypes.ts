import { Column } from "@tanstack/react-table";
import { AxiosError } from "axios";
import { PaginationType } from "./paginationProps.types";
import { ColumnType } from "./tableProps.types";

export type TicketsDataContextTypes = {
  memoizedOpenTicketsData: ColumnType[];
  memoizedCloseTicketsData: ColumnType[];
  isErrorInOpenTicketsService: boolean;
  isLoadingInCloseTicketsService: boolean;
  errorInOpenTicketsService: AxiosError | unknown;
  isErrorInCloseTicketsService: boolean;
  isLoadingInOpenTicketsService: boolean;
  errorInCloseTicketsService: AxiosError | unknown;
  openTicketsColumns: Column<ColumnType>[];
  closeTicketsColumns: Column<ColumnType>[];
  openTicketsPaginationData: PaginationType;
  closeTicketsPaginationData: PaginationType;
};
