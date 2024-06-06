import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';  // Import the custom CSS file

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0 footer-container'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='footer-btn' href='https://www.facebook.com/profile.php?id=100008893960405' target='_blank' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='footer-btn' href='https://www.instagram.com/kara.negi22'  target='_blank' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='footer-btn' href='mailto:knegi4143@gmail.com' target='_blank' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='footer-btn' href='https://www.instagram.com/karan.negi22/' target='_blank' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='footer-btn' href='https://www.linkedin.com/in/knegi' role='button' target='_blank'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='footer-btn' href='https://github.com/KaranOO' role='button' target='_blank'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Creator :
        <a className='text-white' target='_bank' href='http://www.karannegi.in'>
          : Karan Negi
        </a>
      </div>
    </MDBFooter>
  );
}
