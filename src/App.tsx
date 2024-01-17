import React from 'react';
import './App.css';
import Head from "./components/header/Head";
import Footer from "./components/footer/Footer";
import MainPage from "./pages/main/MainPage";
import './components/css/bootstrap.min.css';
import './components/css/flex-slider.css';
import './components/css/font-awesome.css';
import './components/css/lightbox.css';
import Header from "./components/header/Header";
// import './components/css/owl-carousel.css';


function App() {
  return (
    <div className="App">
      <Head/>
        <Header/>
        <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
