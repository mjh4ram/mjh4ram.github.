import React, { useState } from 'react';
import axiosInstance from "../../classes/axiosApi";
import UserStore from '../../classes/userstore';


function SignIn() {
  return (
    <div>
      <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&response_type=token&redirect_uri=http://nami.guru&client_id=669215034815-unjgfieghj8jct4ihel38olojkn3jm30.apps.googleusercontent.com"><button class="loginbutton">Log In</button></a>
    </div>
  );
};


export default SignIn;
