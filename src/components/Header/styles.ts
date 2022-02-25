import styled, { css } from 'styled-components';

interface HamburgerMenuHeaderProps {
  showMenu: boolean;
}

export const ContentHeader = styled.section<HamburgerMenuHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 170px;

  .hamburger-react {
    z-index: 15;
    color: ${({ theme }) => theme.colors.primary_medium};

    display: none;

    //Here I'm using !important to override the CSS from the library
    ${({ showMenu }) =>
      showMenu &&
      css`
        position: fixed !important;
        right: 28px;
      `}
  }

  .responsive-navbar {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: ${({ theme }) => theme.colors.secondary_background};

    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      transition-duration: 0.5s;

      li {
        padding: 1rem 0;

        a {
          font-size: 1.615rem;
          font-weight: medium;
          color: ${({ theme }) => theme.colors.text_pure};
        }
      }

      li:last-child {
        margin-left: 60px;
      }
    }
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 100px;
      height: 40px;

      font-size: 1rem;
      color: ${({ theme }) => theme.colors.text_white};
      font-weight: bold;

      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.primary_pure};

      transition: filter 0.2s;
    }

    button:hover {
      filter: brightness(0.9);
    }

    ul {
      display: flex;

      li {
        margin: 0 25px;
        cursor: pointer;

        line-height: 1.5rem;
        font-size: 1.125rem;
        color: ${({ theme }) => theme.colors.text_pure};

        transition: filter 0.2s;

        a {
          color: ${({ theme }) => theme.colors.text_pure};
        }
      }

      li:hover {
        filter: brightness(0.2);
      }

      li:last-child {
        margin-right: 60px;
      }
    }
  }

  @media (max-width: 1280px) {
    margin: 0 5rem;
  }

  @media (max-width: 970px) {
    margin: 0 2rem;

    nav {
      display: none;
    }

    .hamburger-react {
      display: block;
    }
  }
`;
