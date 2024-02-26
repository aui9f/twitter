import { signOut } from "firebase/auth";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "./fbase";

function Layout(){
  const navigator = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      console.log('---Logout---');
      navigator('/login');
    }).catch((error) => {
      // An error happened.
      console.log('---error---');

    });
  }
  return <>
    <p>layout</p>
    <button onClick={logout}>임시로그아웃</button>
    <Outlet/>
  </>
}
export default Layout;