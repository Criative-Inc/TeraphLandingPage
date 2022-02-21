import styled from 'styled-components';

export const TestimonyBox = styled.section`
  max-width: 552px;
  height: 272px;
  margin: 31px 0;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;

  transition: all 0.2s;

  border: 2px solid transparent;

  :hover {
    border: 2px solid ${({ theme }) => theme.colors.primary_pure};
    transform: translateY(-5px);
  }

  p {
    padding: 32px 45px 24px 32px;

    font-size: 1.125rem;
    line-height: 150%;
  }

  .psychologist-information {
    display: flex;
    margin-left: 32px;

    img {
      border-radius: 50%;
    }

    .name-and-profession {
      display: flex;
      flex-direction: column;
      margin-left: 16px;

      span:first-child {
        color: ${({ theme }) => theme.colors.text_pure};
        line-height: 150%;
        font-size: 1rem;
        font-weight: bold;
      }

      span:last-child {
        line-height: 150%;
        color: ${({ theme }) => theme.colors.text_medium};
        font-size: 0.875rem;
      }
    }
  }

  @media (max-width: 620px) {
    max-width: 400px;
    height: 100%;
    padding-bottom: 20px;
  }

  @media (max-width: 470px) {
    max-width: 300px;
    height: 100%;
    padding-bottom: 20px;
  }
`;
