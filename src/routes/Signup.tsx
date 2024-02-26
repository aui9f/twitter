import { useForm } from "react-hook-form";
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
import { useNavigate } from "react-router-dom";

interface IForm {
  email: string;
  nickname?: string;
  pw: string;
  pwCheck: string;
  extraError?: string;
}
function Signup() {
  const navi = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<IForm>();

  const onSubmit = ({ pw, pwCheck }: IForm) => {
    if (pw !== pwCheck) {
      setError("pw", { message: "비밀번호가 다릅니다." });
    }
  };

  const onPageMove = () => {
    navi("/login");
  };

  return (
    <Wrapper>
      <div>
        <Logo />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            {...register("email", { required: "필수입력사항입니다." })}
            placeholder="Email"
          />
          <Input type="text" {...register("nickname")} placeholder="nickname" />
          <Input
            type="text"
            {...register("pw", { required: "필수입력사항입니다." })}
            placeholder="pw"
          />
          <Input
            type="text"
            {...register("pwCheck", { required: "필수입력사항입니다." })}
            placeholder="pwCheck"
          />
          <Err>
            <p data-testid="error-message">{errors?.pw?.message}</p>
          </Err>
          <Button
            type="submit"
            name="submit"
            data-testid="submit-button"
            disabled={!isValid}
          >
            {/* disabled={!isValid} */}
            OK
          </Button>
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
            로그인
          </button>
        </TextBtn>
      </div>
    </Wrapper>
  );
}
export default Signup;
