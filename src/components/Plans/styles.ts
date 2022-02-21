import styled from "styled-components";

export const Plan = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  text-align: center;

  margin: 0 50px;

  .plan-box {
    width: 370px;
    min-height: 500px;

    .header-plans {
      border-bottom: 1.8px solid #ebeced;
      text-align: left;
      margin: 32px 75px 28px 40px;
      padding: 30px 0;

      u {
        color: ${({ theme }) => theme.colors.text_details};
        font-size: 1rem;

        strong {
          color: ${({ theme }) => theme.colors.text_price};
          font-size: 3.125rem;
        }
      }

      h2 {
        color: ${({ theme }) => theme.colors.secondary_pure};
        font-size: 1.75rem;
        font-weight: 400;
        line-height: 1.563rem;

        margin-top: 16px;
      }
    }

    ul {
      text-align: left;

      li {
        list-style: url("/check.svg");
        margin: 22px 65px;
        padding: 0 12px;

        color: ${({ theme }) => theme.colors.text_plans};
        font-size: 1rem;
      }
    }

    button {
      background-color: ${({ theme }) => theme.colors.primary_medium};
      width: 270px;
      height: 50px;
      border-radius: 0.5rem;

      color: ${({ theme }) => theme.colors.text_white};
      font-weight: 500;
      font-size: 0.9rem;
      margin-top: 20px;
      margin-bottom: 18px;
    }
  }

  @media (max-width: 930px) {
    margin: 3rem 0;
  }

  @media (max-width: 470px) {
    .plan-box {
      width: 310px;
    }
  }
`;
