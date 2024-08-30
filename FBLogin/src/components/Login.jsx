import React from 'react';
//import FacebookLoginButton from './components/FacebookLoginButton';
import {LoginSocialFacebook} from 'reactjs-social-login'; 
import { FacebookLoginButton } from 'react-social-login-buttons';
function App() {
  

  return (
    <>
   <LoginSocialFacebook
   appId={"479546804987549"}
   onResolve={(response)=>{
    console.log(response);
   }}
   onReject={(error)=>{
    console.log(error);
   }}>
    <FacebookLoginButton/>
   </LoginSocialFacebook>

{/* <FacebookLoginButton/> */}

    </>
  )
}

export default App
