import React, { useRef } from 'react' 
import Header from '../components/Header';

export default function register() {
    return(
<div >
  <Header/>
    <form className="px-4 py-3">
  
  <div className="mb-3">
  <label htmlfor="name" className="form-label">Name</label>
<input type="text" className="form-control" placeholder="Enter Your Name"/>
  </div>  
  
  <div className="mb-3">
    <label htmlfor="email" className="form-label">Email address</label>
    <input type="email" className="form-control"  placeholder="email@example.com"/>
  </div>
  <div className="mb-3">
    <label htmlfor="pass" className="form-label">Password</label>
    <input type="password" className="form-control"  placeholder="Password"/>
  </div>
  <div className="mb-3">
    <label htmlfor="pass" className="form-label">Confirm Password</label>
    <input type="password" className="form-control"  placeholder="Confirm Password"/>
  </div>
  <button type="submit" className="btn btn-dark">Sign up</button>
</form>
    

</div>

    );

}
