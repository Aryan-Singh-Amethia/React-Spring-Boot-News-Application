import err_pic from './error.jpg';
import './Error.css';

function ErrorMessage(){
    return (
     <div id="err_img">
       <img src={err_pic} />
     </div>   
     
    );
 }


function Error(){
    return (
        <div>
            <ErrorMessage/>
            <h2 >Oops!! Sorry , It looks like an error occured.</h2>
        </div>
    );
}

export default Error;