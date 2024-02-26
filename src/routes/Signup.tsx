import { useForm } from "react-hook-form";

interface IForm{
  email: string;
  nickname?: string;
  pw: string;
  pwCheck: string;
  extraError?: string;
}
function Signup(){
  const {register, handleSubmit, formState: {errors}, setError} = useForm<IForm>()
  const onSubmit = ({pw, pwCheck}: IForm) => {
    if(pw!==pwCheck){
      setError('pw', {message: '비밀번호가 다릅니다.'});
    }

  }
  return <div>

    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" {...register('email', {required: '필수입력사항입니다.'})} placeholder="Email"/>
    <input type="text" {...register('nickname')} placeholder="nickname" />
    <input type="text" {...register('pw', {required: '필수입력사항입니다.'})} placeholder="pw"/>
    <input type="text" {...register('pwCheck', {required: '필수입력사항입니다.'})} placeholder="pwCheck" />
    <p data-testid="error-message">{errors?.pw?.message}</p>
    <button type="submit">OK</button>
    </form>
  </div>
}
export default Signup;