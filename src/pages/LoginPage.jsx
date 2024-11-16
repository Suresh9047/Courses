import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdb-react-ui-kit';



function LoginPage() {
  return (
    <MDBContainer fluid className="login-page">
      <MDBRow className="justify-content-center align-items-center">
        <MDBCol md="6" className="container">
          <h3 className="fw-bold text-center">Login</h3>
          <form>
            <MDBInput label="Email address" id="formControlLg" type="email" size="lg" />
            <MDBInput label="Password" id="formControlLg" type="password" size="lg" />
            <MDBBtn className="mb-0 px-5" size="lg">Login</MDBBtn>
          </form>
          <p className="small fw-bold mt-2">
            Don’t have an account? <a href="/signup" className="link-light">Register</a>
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginPage;
