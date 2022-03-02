import styled from "styled-components";

export const ContainerFooter = styled.footer`
  min-height: 462px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text_light};
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;

  margin-top: 60px;

  @media (max-width: 1040px) {
    border: 0;
  }
`;

export const ContentFooter = styled.main`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text_light};
  border-top: 1px solid ${({ theme }) => theme.colors.text_light};
`;

export const GridFooterContainer = styled.div`
  width: 100%;
  max-width: 1440px;

  display: grid;
  justify-content: space-between;
  grid-template-columns: 500px 837px;

  height: 316px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    display: flex;
    padding: 0 5%;
  }

  @media (max-width: 1040px) {
    min-height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 520px) {
    min-height: 200px;
  }
`;

export const RightFooter = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.text_light};
  margin: auto 0;

  span {
    color: ${({ theme }) => theme.colors.text_pure};
    display: block;
    line-height: 2rem;
  }

  @media (max-width: 1440px) {
    border: 0;
  }
`;

export const LeftFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 71px;
  margin-left: 200px;

  ul {
    li {
      margin: 0 2rem;
      line-height: 2rem;
      color: ${({ theme }) => theme.colors.text_light};
      cursor: pointer;

      &:first-child {
        color: ${({ theme }) => theme.colors.text_pure};
        font-weight: 500;
        cursor: default;
      }
    }

    a {
      color: ${({ theme }) => theme.colors.text_light};
    }
  }
  @media (max-width: 1250px) {
    margin-top: 71px;
    margin-left: 0;
  }

  @media (max-width: 1040px) {
    margin: 2rem 0;
  }

  @media (max-width: 680px) {
    ul {
      margin: 0 1rem;
      li {
        margin: 0;
      }
    }
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

export const FooterFooter = styled.footer`
  max-width: 1440px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 880px) {
    gap: 10rem;
  }

  @media (max-width: 880px) {
    gap: 0;
  }
`;

export const SocialMedias = styled.div`
  button {
    margin-right: 20px;
    height: 48px;
    width: 48px;
    background: ${({ theme }) => theme.colors.white};
    border: none;
    outline: none;
    border-radius: 0.5rem;
    transition: 0.8s;

    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.primary_pure};

      svg {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    a {
      svg {
        font-size: 1.75rem;
        color: ${({ theme }) => theme.colors.primary_pure};
      }
    }
  }

  @media (max-width: 1040px) {
    margin: 2rem 0;
  }

  @media (max-width: 680px) {
    margin: 1rem;

    button {
      margin: 5px 8px;
      width: 38px;
      height: 38px;

      a {
        svg {
          font-size: 1.25rem;
        }
      }
    }
  }
`;

export const TopButton = styled.div`
  button {
    height: 48px;
    width: 48px;
    background: ${({ theme }) => theme.colors.primary_pure};
    border: none;
    outline: none;
    border-radius: 0.5rem;
    transition: all 0.2s;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.colors.white};
    }

    @media (max-width: 480px) {
      width: 38px;
      height: 38px;
    }
  }
`;
