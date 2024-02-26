import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Signup from "../routes/Signup";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "react-query";

import "@testing-library/jest-dom";

const queryClient = new QueryClient({
  defaultOptions: {},
});
describe("회원가입테스트", () => {
  beforeEach(() => {
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

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );
  });

  test("환경설정 테스트: ", async () => {
    /**비밀번호 확인값이 일치하지 않은 경우
     * 이벤트를 발생시켜 비밀번호, 비밀번호확인 인풋에 값을 넣어 확인
     * fireEvent
     */
    const pw = screen.getByPlaceholderText("pw");
    const pwCheck = screen.getByPlaceholderText("pwCheck");
    //체인지이벤트발생
    fireEvent.change(pw, { target: { value: "password" } });
    fireEvent.change(pwCheck, { target: { value: "12345" } });
    //에러메시지

    //then
    const errMsg = await screen.findByTestId("error-message");

    //에러메시지가 존재하는지 확인
    expect(errMsg).toBeInTheDocument();
  });

  test("처음 버튼은 비활성화 ", async () => {
    //처음 렌더되었을 겨웅 버튼은 비활성화
    const button = screen.getByText("OK");
    expect(button).toBeDisabled();
  });
  
  test("모든 정보를 입력할 경우, 버튼 활성화", async () => {
    const email = screen.getByPlaceholderText("Email");
    const pw = screen.getByPlaceholderText("pw");
    const pwCheck = screen.getByPlaceholderText("pwCheck");

    fireEvent.change(email, { target: { value: "aaa@naver.com" } });
    fireEvent.change(screen.getByPlaceholderText("nickname"), {
      target: { value: "test" },
    });
    fireEvent.change(pw, { target: { value: "123456" } });
    fireEvent.change(pwCheck, { target: { value: "123456" } });

    await waitFor(() => {});
    const button = screen.getByTestId("submit-button");
    expect(button).toBeEnabled();
  });
});
