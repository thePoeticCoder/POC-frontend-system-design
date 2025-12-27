type genericOptionType = {
    option: string;
    value: string | number;
  };
  
  type genericDropdownType = {
    name?:string
    setChangeHandler:React.Dispatch<React.SetStateAction<any>>;
    onChange?:React.Dispatch<React.SetStateAction<any>>;
    initialOption: string;
    initialValue: string | number;
    options: genericOptionType[];
    fontSize?: string;
    width?: string;
    color?: string;
    backgroundColor?: string;
    maxWidth?: string;
  };
  
  export type { genericDropdownType, genericOptionType };