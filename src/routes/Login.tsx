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

function Login() {
  const { register } = useForm();
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
          <Input {...register("email")} placeholder="email" />
          <Input
            type="password"
            {...register("pssword")}
            placeholder="password"
          />
          <Button>Login</Button>
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
      </div>
    </Wrapper>
  );
}
export default Login;
