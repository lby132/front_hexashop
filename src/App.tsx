import React from 'react';
import './App.css';
import Head from "./components/header/Head";
import Footer from "./components/footer/Footer";
import MainPage from "./pages/MainPage";
import './components/css/bootstrap.min.css';
import './components/css/flex-slider.css';
import './components/css/font-awesome.css';
import './components/css/lightbox.css';
import Header from "./components/header/Header";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import About from "./pages/about/About";

// import './components/css/owl-carousel.css';


function App() {
    return (
        <div className="App">
                    <Head/>
                    <Header/>
            <Routes>
                <Route path="about" element={<About/>}/>
            </Routes>
                    <MainPage/>
                    <Footer/>
        </div>
    );
}

export default App;
