import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Login from "../routes/Login";
import { render } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "react-query";

import "@testing-library/jest-dom";

const queryClient = new QueryClient({
  defaultOptions: {},
});

describe('로그인테스트', ()=>{
  beforeEach(() => {
    const routes = [
      {
        path: "/login",
        element: <Login />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/login"],
      initialIndex: 0,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );
  });
  test('로그인 실패하면 에러메시지', ()=>{

  })
})