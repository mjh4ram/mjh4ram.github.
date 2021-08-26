import React, { useState, useEffect } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import UserStore from './classes/userstore';
import Landingpage from './components/Landing/LandingPage';
import ChartSec from './components/Charts/ChartSec';
import FooterSec from './components/Footer';
import Login from './components/LogIn/LogIn';



function App() {

  useEffect(() =>{
    // app마운트시 실행
    if (sessionStorage.getItem('token') && sessionStorage.getItem('username')) {
      UserStore.username = sessionStorage.getItem('username');
      UserStore.token = sessionStorage.getItem('token');
      UserStore.isLoggedIn = true;
    }

    return () => {
    }
  },[]);

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
