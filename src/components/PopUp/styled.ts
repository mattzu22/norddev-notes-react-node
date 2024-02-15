import styled, { keyframes } from "styled-components";

const slideInOut = keyframes`
  0% {
    opacity: 0;
    right: 0;
  }
  25% {
    opacity: 1;
    right: 50px;
  }
  50% {
    opacity: 1;
    right: 50px;
  }
  75% {
    opacity: 0;
    right: 0;
  }
  100% {
    opacity: 0;
    right: 0;
  }
`;


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    max-width: 100%;
    color: black;
    padding: 15px;
    border-radius: 10px;
    gap: 25px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    position: absolute;
    right: 50px;
    top: 40px;
    animation: ${slideInOut} 4s ease-in-out;

    > svg{
        font-size: 25px;
    }
`