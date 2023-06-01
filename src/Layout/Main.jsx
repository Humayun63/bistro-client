import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';
import bgImg from '../assets/others/authentication.png'


const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    const bistroBody = document.body;
    if(noHeaderFooter){
        bistroBody.style.height = '100vh'
        bistroBody.style.backgroundImage = `url(${bgImg})`
        bistroBody.style.backgroundSize = 'cover'
    }else{
        bistroBody.style.backgroundImage = 'none'
    }
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;