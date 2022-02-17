import styled from "styled-components";

export const TestimonyBox = styled.section`
  max-width: 550px;
  height: 270px;

  background-color: ${({ theme }) => theme.colors.text_white};
  border-radius: 0.5rem;

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
`;
