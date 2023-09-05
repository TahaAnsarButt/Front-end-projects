import React, { useRef } from 'react'
import Header from '../components/Header';

export default function login()
{
    return(
        <div>
          <Header/>
  <form className="px-4 py-3">
    <div className="mb-3">
      <label htmlfor="email" className="form-label">Email address</label>
      <input type="email" className="form-control"  placeholder="email@example.com"/>
    </div>
    <div class="mb-3">
      <label htmlfor="pass" className="form-label">Password</label>
      <input type="password" className="form-control"  placeholder="Password"/>
    </div>
    <button type="submit" className="btn btn-dark">Sign in</button>
  </form>
  
</div>
    );
}