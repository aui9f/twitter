import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 100%;
    max-width: 460px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 80px;
  margin-bottom: 16px;
`;
export const Title = styled.h2`
  color: #3db588;
  font-size: 1.6rem;
  margin-bottom: 12px;
`;
export const Form = styled.form`
  width: 100%;
  padding: 40px 24px;
  border: 1px solid #3db588;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 12px;
`;

export const Button = styled.button`
  background-color: #3db588;
  border: 1px solid #3db588;
  color: #ffffff;
`;

export const Err = styled.div`
  margin-top: 12px;
`;

export const SocialSignIn = styled.ul`
  display: flex;
  li {
    display: flex;
    padding: 8px;
    border: 1px solid gray;
    flex: 1;
    margin-right: 8px;
    align-items: center;
    justify-content: center;
    &:last-child {
      margin-right: 0;
    }
    img {
      width: 24px;
      height: 24px;
    }
    p {
      font-size: 75%;
      margin-left: 4px;
    }
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  p {
    color: gray;
    margin: 0 12px;
  }
  > div {
    flex: 1;
    border-bottom: 1px solid lightgray;
  }
`;

export const TextBtn = styled.div`
  text-align: right;
  padding: 4px;
  > button {
    height: auto;
    padding: 0;
    background-color: transparent;
    border: 0;
    font-size: 80%;
    color: gray;
  }
`;
