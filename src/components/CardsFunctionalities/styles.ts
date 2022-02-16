import styled from "styled-components";

export const ContentCards = styled.section`
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.colors.primary_light};
    width: 90px;
    height: 90px;

    border-radius: 0.5rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 380px;

  h3 {
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.text_pure};
    font-weight: medium;
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    max-width: 310px;
    font-size: 1.3rem;
    text-align: center;
    margin-top: 23px;
    color: ${({ theme }) => theme.colors.text_medium};
  }
`;
