import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Signup from "../routes/Signup"
import {fireEvent, render, screen} from '@testing-library/react';

import { QueryClient, QueryClientProvider } from "react-query";

import '@testing-library/jest-dom'

const queryClient = new QueryClient({
  defaultOptions: {}
})
describe('회원가입테스트', ()=>{
  test('환경설정 테스트: ', async()=>{
    const routes = [
      {
        path: "/signup",
        element: <Signup />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/signup"],
      initialIndex: 0,
    });

    render(<QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>)

    /**비밀번호 확인값이 일치하지 않은 경우
     * 이벤트를 발생시켜 비밀번호, 비밀번호확인 인풋에 값을 넣어 확인
     * fireEvent
     */
    const pw = screen.getByPlaceholderText('pw');
    const pwCheck = screen.getByPlaceholderText('pwCheck');
    //체인지이벤트발생
    fireEvent.change(pw,{target:{value:'password'}});
    fireEvent.change(pwCheck,{target:{value:'12345'}});
    //에러메시지

    //then
    const errMsg = await screen.findByTestId('error-message')
    
    //에러메시지가 존재하는지 확인
    expect(errMsg).toBeInTheDocument();
      
    

    

  })
})