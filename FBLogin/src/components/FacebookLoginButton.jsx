// import React, { useEffect } from 'react';

// const FacebookLoginButton = () => {
//   useEffect(() => {
//     // Load the Facebook SDK script dynamically
//     const loadFbSdk = () => {
//       window.fbAsyncInit = function () {
//         window.FB.init({
//           appId: '479546804987549', // Replace with your Facebook App ID
//           cookie: true,
//           xfbml: true,
//           version: 'v16.0', // Use the latest Graph API version
//         });
//       };

//       // Create a new script element for the SDK
//       (function (d, s, id) {
//         const fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         const js = d.createElement(s);
//         js.id = id;
//         js.src = 'https://connect.facebook.net/en_US/sdk.js';
//         fjs.parentNode.insertBefore(js, fjs);
//       })(document, 'script', 'facebook-jssdk');
//     };

//     loadFbSdk();
//   }, []);

//   const handleLogin = () => {
//     if (window.FB) {
//       // Ensure that the SDK is loaded and then perform the login
//       window.FB.login(
//         function (response) {
//           if (response.status === 'connected') {
//             console.log('Logged in:', response);
//             getUserData(response.authResponse.accessToken);
//           } else {
//             console.error('Login failed:', response);
//           }
//         },
//         { scope: 'public_profile,email' } // Request the necessary permissions
//       );
//     } else {
//       console.error('Facebook SDK not loaded yet.');
//     }
//   };

//   const getUserData = (accessToken) => {
//     if (window.FB) {
//       window.FB.api('/me', { fields: 'name,email', access_token: accessToken }, function (response) {
//         console.log('User data:', response);
//       });
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLogin}>Login with Facebook</button>
//     </div>
//   );
// };

// export default FacebookLoginButton;

import React from "react";
import FacebookLoginButton from "./components/FacebookLoginButton";
// import {LoginSocialFacebook} from 'reactjs-social-login';
// import { FacebookLoginButton } from 'react-social-login-buttons';
function FacebookLoginButton() {
  return (
    <>
      <LoginSocialFacebook
        appId={"479546804987549"}
        onResolve={(response) => {
          console.log(response);
        }}
        onReject={(error) => {
          console.log(error);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>

      {/* <FacebookLoginButton/> */}
    </>
  );
}

export default FacebookLoginButton;
