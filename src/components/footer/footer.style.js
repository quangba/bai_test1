import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  margin-top: 75px;
  width: 80%;
  flex-direction: column;
  & .content-footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #E6E6E6;
    
    & img {
    margin: 0 15px 14px 0;
    }

    & p {
      &.text-address {
        font-family: PingFang SC;
        font-size: 11.63px;
        font-weight: 400;
        line-height: 16px;
        text-align: left;
        color: #999999;
        margin: 0;
        max-width: 180px;
      }
    }
    
    & .icon {
      margin-top: 40px;
    }
  }

  & .footer-copyright {
    margin: 40px 0 100px 0;

    & p {
      font-family: PingFang SC;
      font-size: 11.06px;
      font-weight: 400;
      line-height: 14px;
      text-align: left;
      margin: 0;
      color: #B3B3B3;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 10px;
    & .logo-footer {
      display: none;
    }

    // & .footer-copyright {
    //   & p {
    //     display: none;
    //   }
    // }

    & .content-footer {
      flex-direction: column-reverse;
      & .icon {
        padding-top: 10px;
        margin: 0;
      }

      & p {
        &.text-address {
          margin: 20px 0;
          max-width: 100%;
        }
      }
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;

  & div {
    margin-left: 100px;

    & h5 {
      font-family: PingFang SC;
      font-size: 13.23px;
      font-weight: 600;
      line-height: 14px;
      text-align: left;
      margin: 0 0 20px 0;
      color: #333333;
    }

    & p {
      font-family: PingFang SC;
      font-size: 11.81px;
      font-weight: 400;
      line-height: 12px;
      text-align: left;
      margin: 10px 0;
      color: #A6A6A6;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 3.125rem;
    flex-direction: column;
    & div {
      margin-left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      border-bottom: 1px solid #CCCCCC;
      & h5 {
        margin: 0;
      }

      & i {
        color: #464646;
        cursor: pointer;
      }

      & p {
        display: none;
      }
    }
  }

  @media (min-width: 769px) {
    & i {
      display: none;
    }
  }
`;