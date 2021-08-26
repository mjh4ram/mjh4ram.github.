import React, { useEffect } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import UserStore from './classes/userstore';
import axiosInstance from "./classes/axiosApi";
import Landingpage from './components/Landing/LandingPage';
import ChartSec from './components/Charts/ChartSec';
import FooterSec from './components/Footer';
import Login from './components/LogIn/LogIn';
import { Redirect } from "react-router-dom";


function App() {

  useEffect(() =>{
    // app마운트시 실행
    if (sessionStorage.getItem('token') && sessionStorage.getItem('username')) {
      UserStore.username = sessionStorage.getItem('username');
      UserStore.token = sessionStorage.getItem('token');
      UserStore.isLoggedIn = true;
    }

    var search = window.location.href;
    var access_token = parse_token(search);
    if (access_token != -1) {
      getAuthenticated(access_token);
    }

    return () => {
    }
  },[]);



  function parse_token(s) {
    var a_index = s.search("access_token");
    var b_index = s.search("&token_type");
    if (a_index != -1 && b_index != -1) {
      return s.substring(a_index + 13, b_index)
    }
    return -1;
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
        window.location.href = "https://nami.guru";
      } catch (error) {
          throw error;
      }
  }

  return (
    <div>
        <Layout>
            <Header title={<div class="logo-name">nami</div>}>
                <Navigation>
                    <a href="#">Home</a>
                    <a href="#">Chart</a>
                    <a href="#">Contact</a>
                    <p>
                      <Login/>
                    </p>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Drawer>
            <Content>
              <Landingpage/>
              <ChartSec/>
              <FooterSec/>
            </Content>
        </Layout>
    </div>
  );

}

export default App;
