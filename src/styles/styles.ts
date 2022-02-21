import styled from "styled-components";

export const ContentHome = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

  @media (max-width: 1280px) {
    flex-direction: column-reverse;
    height: 100%;

    figure {
      width: 559px;
      height: 489px;
    }
  }

  @media (max-width: 620px) {
    .hero-section {
      max-width: 400px;
    }

    figure {
      width: 459px;
      height: 389px;
    }
  }

  @media (max-width: 470px) {
    .hero-section {
      width: 320px;

      h1 {
        font-size: 2.25rem;
      }
    }

    figure {
      width: 359px;
      height: 389px;
    }
  }

  @media (max-width: 380px) {
    figure {
      width: 310px;
      height: 230px;
    }
  }
`;

export const ContentProject = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90vh;

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

  @media (max-width: 1280px) {
    flex-direction: column;
    margin-top: 5rem;

    figure {
      width: 559px;
      height: 489px;
    }
  }

  @media (max-width: 620px) {
    .description-project {
      max-width: 400px;
    }

    figure {
      width: 459px;
      height: 389px;
    }
  }

  @media (max-width: 470px) {
    .description-project {
      max-width: 300px;
    }

    figure {
      width: 359px;
      height: 289px;
    }
  }

  @media (max-width: 380px) {
    .description-project h1 {
      font-size: 2.65rem;
    }

    figure {
      width: 310px;
      height: 289px;
    }
  }
`;

export const ContentFunctionalities = styled.section`
  height: 90vh;

  .box-cards {
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin: 0 auto;
  }

  h1 {
    font-size: 3.438rem;
    color: ${({ theme }) => theme.colors.text_pure}
    font-weight: medium;
    
    text-align: center;
  }

  @media (max-width: 1280px) {
    height: 100%;
    margin-top: 12rem;
  }

  @media (max-width: 930px) {
    .box-cards {
      flex-wrap: wrap;
      margin-top: 20px;
    }
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 2.65rem;
    }
  }
`;

export const ContentTestimony = styled.section`
  height: 90vh;

  .box-testimony {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;

    margin-top: 50px;
  }

  h1 {
    font-size: 3.438rem;
    color: ${({ theme }) => theme.colors.text_pure}
    font-weight: medium;
    
    text-align: center;
  }

  @media (max-width: 1120px) {
    height: 100%;
  }

  @media (max-width: 930px) {
    margin-top: 100px;
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 2.65rem;
    }
  }
`;

export const ContentPlans = styled.section`
  height: 100vh;
  margin-top: 130px;

  .box-plans {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    margin: 50px 0;
  }

  h1 {
    font-size: 3.438rem;
    color: ${({ theme }) => theme.colors.text_pure}
    font-weight: medium;
    
    text-align: center;
  }

  @media (max-width: 930px) {
    height: 100%;

    .box-plans {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 2.65rem;
    }
  }
`;
