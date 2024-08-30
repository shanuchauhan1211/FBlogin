import React from "react";
//import FacebookLoginButton from './components/FacebookLoginButton';
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
function Login() {
  return (
    <>
    <div>Login</div>
      {/* <LoginSocialFacebook
        appId={"1028269232324163"}
        onResolve={(response) => {
          console.log(response);
        }}
        onReject={(error) => {
          console.log(error);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook> */}

      {/* <FacebookLoginButton/> */}
    </>
  );
}

export default Login;
