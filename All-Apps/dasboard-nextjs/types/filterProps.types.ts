import { Dispatch, SetStateAction } from "react";

export type FilterPropType = {
  isDateRangePickerShow: boolean;
  setIsDateRangePickerShow: Dispatch<SetStateAction<boolean>>;
};
