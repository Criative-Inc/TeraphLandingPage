import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body { 
    background-color: ${({ theme }) => theme.colors.background};
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  a, u {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.primary_light};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary_pure};
    border-radius: 5px;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }
`;

export const Container = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;
