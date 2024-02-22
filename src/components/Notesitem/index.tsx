import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi"

interface NotesProps extends InputHTMLAttributes<HTMLInputElement>{
  isnew?: boolean;
  value: string;
  onClick: () => void;
}

export function NotesItem({ isnew = false, value, onClick, ...rest }: NotesProps) {


  return (
    <Container isnew={isnew.toString()}>
        <input 
            type="text" 
            value={value}
            readOnly={!isnew}
            {...rest}
        />

        <button 
          onClick={onClick} 
          type="button"
          className={isnew ? 'button-add' : 'button-delete'}
        > 
            { isnew ? <FiPlus /> : <FiX />}
        </button>
    </Container>
  )
}

