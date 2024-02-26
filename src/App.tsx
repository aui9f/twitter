import { RouterProvider } from "react-router-dom";
import GlobalStyles from "@/assets/styled/GlobalStyles";
import router from "./Router";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./fbase";

function App() {
  const [isLoading, setIsLoding] = useState(true);
  const init= ()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        console.log('로그인정보 있음')
        
      }else{
        console.log('로그인정보 없음')
        
      }
      setIsLoding(false)  
    })
  }
  useEffect(()=>{
    init();
  },[])
  return (
    <div>
      <GlobalStyles />
      {isLoading?<></>:<RouterProvider router={router} />}
    </div>
  );
}

export default App;
