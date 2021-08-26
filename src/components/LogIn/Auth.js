import React,  { useEffect, useState } from "react";
import axiosInstance from "../../classes/axiosApi";
import UserStore from '../../classes/userstore';
import { Redirect } from "react-router-dom";

function Auth() {
  const [rediectTo, setRedirectTo] = useState(false);

  useEffect(() => {
    var search = window.location.href;
    var access_token = parse_token(search);
    getAuthenticated(access_token);
  });


  function parse_token(s) {
    var a_index = s.search("access_token");
    var b_index = s.search("&token_type");
    return s.substring(a_index + 13, b_index);
  }

  const getAuthenticated = async(token) => {
      try {
        var params = new URLSearchParams();
        params.append('access_token', token);
        const data = await axiosInstance.post('authenticate/google-oauth2/', params);
        var newtoken = data.data.token;
        var email = data.data.email;
        sessionStorage.setItem('token', newtoken);
        sessionStorage.setItem('username', email);
        UserStore.isLoggedIn = true;
        UserStore.username = email;
        UserStore.token = newtoken;
        setRedirectTo(true);
      } catch (error) {
          throw error;
      }
  }

  if (rediectTo) {
    return <Redirect to="/" />
  }
  else {
    return (
      <div>
        loading
      </div>
    );
  }
}

export default Auth;
