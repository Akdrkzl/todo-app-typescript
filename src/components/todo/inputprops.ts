import { RefObject } from "react";

export type InputProps ={
    value:string | object;
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    handleKeyDown:(e:React.KeyboardEvent<HTMLInputElement>)=>void;
    handleClick:()=>void;
    inputRef: RefObject<HTMLInputElement>;
}