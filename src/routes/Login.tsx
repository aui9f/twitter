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
// import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithEmailAndPassword } from "@/fbase";

interface ILoginForm {
  email: string
  password: string
  extraError?: string
}

function Login() {
  const navigator = useNavigate();
  const {
    register,
    formState: {errors, isValid },
    handleSubmit,
    setError,
    
  } = useForm<ILoginForm>();
  const navi = useNavigate();

  const onPageMove = () => {
    navi("/signup");
  };

  const onVaild = ({email, password}: ILoginForm) => {
    signInWithEmailAndPassword(auth, email, password).then(userCredential=>{
      const user = userCredential.user;
      console.log(user)
      navigator('/')
    }).catch(error=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setError("extraError", { message: "아이디/비밀번호를 확인해주십시오." });
    })
  }

  return (
    <Wrapper>
      <div>
        <Logo src="" />

        <Form onSubmit={handleSubmit(onVaild)}>
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
            <p>{errors?.extraError?.message}</p>
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
