import { ChangeEvent} from "react";

  interface boxProps {
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
  }
  export default function Input({placeholder, onChange, value}: boxProps) {
    return (
        <div>
            <input type='text' value={value} placeholder={placeholder} className="outline-none decoration-none border-b-2 shadow-lg h-[100%] p-2 text-lg " onChange={onChange}/>
        </div>
    )
  }