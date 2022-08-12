import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Politics from './Landing-Page/Technology';
import Error from './Landing-Page/Error';
import RouterComponent from './Landing-Page/RouterComponent';
import WebImg from './images/WebImg';
import Home from './Landing-Page/Home';
import LoginPage from './Login-Page/LoginPage';
import Sports from './Landing-Page/Sports';
import Entertainment from './Landing-Page/Entertainment';
import World from './Landing-Page/World';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import RegistrationForm from './Forms/RegistrationForm';
import SubscriptionForm from './Forms/Subscription';
import Footer from './Landing-Page/Footer';

function App() {

  // let [username,setUsername] = React.useState(null);

  // let [isLoggedIn,setLoggedIn]=React.useState('No');

  let user = sessionStorage.getItem('uname');
  return(
       <div style={{width:"100%",height:"100%",backgroundColor:"#E7F6F2"}}>
       <BrowserRouter>
       <div style={{position:"fixed",top:"0px",zIndex:"5",backgroundColor:"black"}}>
       <WebImg/>
        <div style={{color:"white",paddingBottom:"5px"}}>{user && `Logged In as : ${user}`}</div> 
       <RouterComponent/>
       </div>
      <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/u_name:" element={<Home state={sessionStorage.getItem('u_name')===null?'':sessionStorage.getItem('u_name')}/>}/>
             <Route path="/technology" element={<Politics/>}/>
             <Route path="/sports" element={<Sports/>}/>
             <Route path="/login" element={<LoginPage/>}/>
             <Route path="/world" element={<World/>}/>
             <Route path="/entertainment" element={<Entertainment/>}/>
             <Route path="/register-user" element={<RegistrationForm/>}/>
             <Route path="/subscribe" element={<SubscriptionForm/>}/>
             <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
