//import './LoginPage.css';

import { Button } from "react-bootstrap";
import axios from "axios";

function LoginPage(){
   
   const useremail ='Aryan';
   const password='123';
   
   const eventHandler = (event)=>{
     event.preventDefault(); 
     console.log('Input Field triggered');
     let entered_username=document.getElementById("email").value;
     let entered_password=document.getElementById("password").value;
     console.log(entered_username ,entered_password);

    //  if(entered_password===password && entered_username===useremail){   
    //     // console.log('username and password matched.');
    //     // sessionStorage.setItem('u_name',entered_username)
    //     // window.location.href = 'http://localhost:3000?u_name='+entered_username;


    //  }else{
    //    alert('Wrong Credentials..');
    //    window.location.href = 'http://localhost:3000/';
    //  }
    
    const baseURL =`http://localhost:8000/get-this-user`;

    const payload ={
      "username":entered_username,
      "password":entered_password
    }

    try{
      const callResult = axios.post(baseURL,payload)
      .then(()=>{
       console.log('API call successful ..',callResult);
       sessionStorage.setItem('uname',entered_username);
       alert('User Login successful!!');
       window.location.href = 'http://localhost:3000/';
      });
    }catch(err){
      console.log('An error occured..Please try again!!' , err);
      alert('An error occured..Please try again!!');
      window.location.href = 'http://localhost:3000/login/';
    }

   }
   return (
              <div id="card-1" style={{display:'flex',justifyContent:'center',paddingTop:"300px",alignItems:"center",border:"10px solid black"}}>   
               <form onSubmit={eventHandler}>
                 <label ><h3>Username :</h3></label><br/>
                 <input type="text" id="email" name="email" placeholder='email'/><br/>
                 <label ><h3>Password :</h3></label><br/>
                 <input type="text" id="password" name="password" placeholder='password'/><br/>
                 <br/>
                 <label ><h6>remember me</h6></label>
                 <input type="checkbox"/>
                 
                 <br/>
                 <Button variant="primary" type="submit" value="Submit" style={{padding:"3px"}}> Login</Button>
                 <>    </>
                 <Button variant="dark" onClick={()=>{window.location.href = 'http://localhost:3000/';}} style={{padding:"3px"}}>Go Back</Button>
                </form>
               </div> 
   );
}

export default LoginPage;