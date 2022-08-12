import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import * as fa from 'react-icons/fa';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          hindustantimes2022.com
        </a>
      </div>
      <section className="mb-4" style={{backgroundColor:"black"}}>

      <a className="btn btn-floating m-1" href="#!" role="button"
        ><fa.FaInstagramSquare/></a>

      <a className="btn btn-floating m-1" href="#!" role="button"
        ><fa.FaTwitterSquare/></a>

      <a className="btn btn-lg btn-floating m-1" href="#!" role="button"
        ><fa.FaGooglePlusG/></a>

      <a className="btn btn-floating m-1" href="#!" role="button"
        ><fa.FaLinkedin/></a>

      <a className="btn btn-floating m-1" href="#!" role="button"
        ><fa.FaGithub/></a>
    </section>
    </MDBFooter>
  );
}