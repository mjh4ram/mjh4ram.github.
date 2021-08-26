import React, { useState } from "react";
import axiosInstance from "../../classes/axiosApi";
import UserStore from '../../classes/userstore';
import SignIn from './SignIn';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';
import { observer } from 'mobx-react-lite';


const Login = observer(() => {

    function logOut() {
      UserStore.isLoggedIn = false;
      UserStore.username = null;
      sessionStorage.clear();
    }

    return (
      <div>
        {
          UserStore.isLoggedIn ? (
            <div>
              <div class="username_login">{UserStore.username}</div>
              <button class="loginbutton" onClick={() => logOut()} >
                Log Out
              </button>
            </div>
          ) : (
            <SignIn/>
          )
        }
      </div>
    );
});

export default Login;
