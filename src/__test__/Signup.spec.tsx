import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Signup from "../routes/Signup"
import {render} from '@testing-library/react';

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {}
})
describe('회원가입테스트', ()=>{
  test('환경설정 테스트: ', ()=>{
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

    // render(<RouterProvider router={router} />)

    
    render(<QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>)
    

  })
})