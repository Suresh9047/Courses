import React, { useState } from 'react';
import { MDBInput, MDBBtn, MDBCheckbox } from 'mdb-react-ui-kit';




function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = { name, email, password, confirmPassword };

    try {
      const response = await fetch('http://localhost:8000/api/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        // Handle successful signup, e.g., redirect to login
      } else {
        // Handle signup error
        console.log(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h3>Create an Account</h3>
      <form onSubmit={handleSignup}>
        <MDBInput label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <MDBInput label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <MDBInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <MDBInput label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <MDBCheckbox label="I agree to the Terms and Conditions" />
        <MDBBtn type="submit">Sign Up</MDBBtn>
        <p className="small">Already have an account? <a href="#!" className="link-light">Login</a></p>
      </form>
    </div>
  );
}

export default SignupPage;
