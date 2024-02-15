import { Container } from "./styled";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

interface PopUpProps {
  message: string;
  status: number;
}

export function PopUp({ message, status }: PopUpProps) {
  return (
    <Container>
      <p>{message}</p>
      {status === 400 || status === 401 ? <FcCancel /> : <FcCheckmark />}
    </Container>
  );
}
