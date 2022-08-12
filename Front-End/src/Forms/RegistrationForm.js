import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegistrationForm(){

    const registerNewUser =(event)=>{
      event.preventDefault();
      let username=document.getElementById('username').value;
      let password=document.getElementById('password').value;
      let newUser ={"username":username,"password":password};
      try{
        axios.post(`http://localhost:8000/register-user`,newUser)
             .then(()=>{
               alert(`New user ${username} registered successfully!!`);
               window.location.href='http://localhost:3000/';
             })

      }catch(err){
        console.log(err);
        alert('Some error occured while creating a new user..');
        window.location.href='http://localhost:3000/register-user';
      }     
    }

    return(
        <div style={{paddingTop:"300px",width:"400px",display:"flex",justifyContent:"center"}}>
        <Form onSubmit={registerNewUser} id='reg_form'>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter new username" id='username'/>
          <Form.Text className="text-muted">
            Your username should be unique.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='password'/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
        </div>

    );
}

export default RegistrationForm;