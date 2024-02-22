import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi"

interface NotesProps extends InputHTMLAttributes<HTMLInputElement>{
  isNew?: boolean;
  value: string;
  onClick: () => void;
}

export function NotesItem({ isNew = false, value, onClick, ...rest }: NotesProps) {
  return (
    <Container isNew={isNew}>
        <input 
            type="text" 
            value={value}
            readOnly={!isNew}
            {...rest}
        />

        <button 
          onClick={onClick} 
          type="button"
          className={isNew ? 'button-add' : 'button-delete'}
        > 
            { isNew ? <FiPlus /> : <FiX />}
        </button>
    </Container>
  )
}

