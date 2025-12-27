type inputType = {
  type: string;
  placeholder?: string;
  width: string;
  backgroundColor?: string;
  color?: string;
  value?: string;
  isDisabled?: boolean;
  isError: React.Dispatch<React.SetStateAction<boolean>>;
  contentType?:string;
  setChangeHandler: React.Dispatch<React.SetStateAction<string>>;
  required: boolean;
  autoComplete?: string;
};

export type { inputType };
