import styled from "styled-components";

export const ContentHome = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 40px;

  height: calc(100vh - 170px);

  .hero-section {
    max-width: 600px;

    h1 {
      font-size: 3.25rem;
      font-weight: medium;
      color: ${({ theme }) => theme.colors.text_pure};

      span {
        color: ${({ theme }) => theme.colors.primary_pure};
      }
    }

    p {
      margin-top: 23px;
      font-size: 1.25rem;
      max-width: 350px;
      color: ${({ theme }) => theme.colors.text_pure};
    }
  }

  section {
    margin-left: -15px;
    margin-top: 23px;

    img {
      cursor: pointer;
    }
  }
`;

export const ContentProject = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  .description-project {
    max-width: 570px;
    margin-bottom: 190px;

    h1 {
      text-align: center;

      font-size: 3.4rem;
      color: ${({ theme }) => theme.colors.primary_pure};
      font-weight: medium;
    }

    p {
      margin-top: 49px;
      color: ${({ theme }) => theme.colors.text_pure};
      font-size: 1.25rem;
      text-align: justify;
    }
  }
`;

export const ContentFunctionalities = styled.section`
  height: 80vh;

  .box-cards {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    margin: 0 auto;
  }

  h1 {
    font-size: 3.438rem;
    color: ${({ theme }) => theme.colors.text_pure}
    font-weight: medium;
    
    text-align: center;
  }
`;
