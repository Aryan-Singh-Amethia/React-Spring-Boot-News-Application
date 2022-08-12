import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SubscriptionForm(){

   const subscribeNewUser = (event) => {
       event.preventDefault();

       let f_name=document.getElementById('f_name').value;
       let l_name=document.getElementById('l_name').value;
       let s_plan_op1=document.getElementById('subs_op_1').checked;
       let s_plan_op2=document.getElementById('subs_op_2').checked;

       let subscription = (s_plan_op1===true && s_plan_op2===false)?'3 Months':'6 Months';

       console.log(f_name,l_name,subscription);

       let subDetails ={
          "firstname":f_name,
          "lastname":l_name,
          "subString":subscription
       };

       const res =  axios.post(`http://localhost:8000/subscribe-new-user/`,subDetails);
       console.log('res -> ',res)

       window.alert('New Subscription added to user');
       
       window.location.href = 'http://localhost:3000/';
   }

    return(
        <div style={{paddingTop:"300px",width:"400px",display:"flex",justifyContent:"center"}}>
        <Form onSubmit={subscribeNewUser}>
        <Form.Group className="mb-3">
          <Form.Label>Firstname</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" id='f_name'/>
        </Form.Group>
  
        <Form.Group className="mb-3" >
          <Form.Label>Lastname</Form.Label>
          <Form.Control type="text" placeholder="Enter your last name" id='l_name'/>
        </Form.Group>

        <div className="mb-3" id="s_plans">
          <Form.Check type="radio" id={`check-api-checkbox`} >
            <Form.Check.Input type="radio" isValid name='subs' value="3 months" id='subs_op_1'/>
            <Form.Check.Label>3 Month Plan</Form.Check.Label>
            <Form.Control.Feedback type="valid">
              Choose subscription for 3 months.
            </Form.Control.Feedback>

            <Form.Check.Input type="radio" isValid name='subs' value="6 months" id='subs_op_2'/>
            <Form.Check.Label>6 Month Plan</Form.Check.Label>
            <Form.Control.Feedback type="valid" variant="warning">
              Choose subscription for 6 months.
            </Form.Control.Feedback>
          </Form.Check>
        </div>

        <Button variant="primary" type="submit">
          Suscribe
        </Button>
      </Form>
        </div>

    );
}

export default SubscriptionForm;