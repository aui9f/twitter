import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Logo,
  Form,
  Title,
  Input,
  Button,
  Err,
  Divider,
  SocialSignIn,
  TextBtn,
} from "@/assets/styled/UserStyle";
import { useState } from "react";

function Login() {
  const {
    register,
    formState: { isValid },
    watch,
  } = useForm();
  const navi = useNavigate();

  const onPageMove = () => {
    navi("/signup");
  };

  return (
    <Wrapper>
      <div>
        <Logo src="" />

        <Form>
          <Title>LOGIN..</Title>
          <Input
            {...register("email", { required: "필수입력사항입니다." })}
            placeholder="email"
          />
          <Input
            type="password"
            {...register("password", { required: "필수입력사항입니다." })}
            placeholder="password"
          />
          <Button disabled={!isValid}>Login</Button>
          <Err>
            <p></p>
          </Err>
          <Divider>
            <div></div>
            <p>또는</p>
            <div></div>
          </Divider>
          <SocialSignIn>
            <li>
              <img src="" />
              <p>GOOGLE</p>
            </li>
            <li>
              <img src="" />
              <p>NAVER</p>
            </li>
            <li>
              <img src="" />
              <p>KAKAO</p>
            </li>
            <li>
              <img src="" />
              <p>GITHUB</p>
            </li>
          </SocialSignIn>
        </Form>
        <TextBtn>
          <button type="button" onClick={onPageMove}>
            회원가입
          </button>
        </TextBtn>
        <p></p>
      </div>
    </Wrapper>
  );
}
export default Login;
