





import styled from "styled-components";

interface ContainerProps {
   isActive?: boolean;
 }

export const Container = styled.button<ContainerProps>`
   background: none;
   color: ${({theme, isActive}) => (isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100)};

   border: none;
   font-size: 16px;
`
