





import styled from "styled-components";

interface ContainerProps {
   isactive?: string;
 }

export const Container = styled.button<ContainerProps>`
   background: none;
   color: ${({theme, isactive}) => isactive === "true" ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

   border: none;
   font-size: 16px;
`
