import styled from "styled-components";

export const ContentHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 170px;

  .menu-btn {
    position: absolute;
    top: 55px;
    right: 20px;
    z-index: 1000;

    display: none;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  .fixed {
    position: fixed;
  }

  .menu-btn__burger {
    width: 50px;
    height: 6px;

    background: #000;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);

    transition: all 0.5s ease-in-out;
  }

  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: '';
    position: absolute;

    width: 50px;
    height: 6px;

    background: #000;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);

    transition: all 0.5s ease-in-out;
  }

  .menu-btn__burger::before {
    transform: translateY(-16px);
  }

  .menu-btn__burger::after {
    transform: translateY(16px);
  }

  .menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }

  .menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }

  .menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }
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
        font-size: 1.315rem;
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
    nav {
      display: none;
    }

    .menu-btn {
      display: flex !important;
    }
  }
`;
