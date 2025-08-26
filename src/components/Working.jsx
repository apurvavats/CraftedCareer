import React from 'react'
import './working.css'
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function Working() {
  const navigate = useNavigate();
  
  const {
      isLoading,
      isAuthenticated,
      error,
      loginWithRedirect,
      logout,
      user,
    } = useAuth0();
  
    if (isLoading) {
      return <div className="loading">Loading...</div>;
    }
  
    if (error) {
      return <div className="error">Oops... {error.message}</div>;
    }
  return (<div>
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <div className="icon">🌸</div>
          <h3>Upload Your Resume</h3>
          <p>Share your current resume (PDF). We’ll keep only what's relevant.</p>
        </div>
        <div className="connector">→</div>
        <div className="step">
          <div className="icon">✒️</div>
          <h3>Tell Us Your Dream Role</h3>
          <p>Share the job title or paste the description—we’ll tailor accordingly.</p>
        </div>
        <div className="connector">→</div>
        <div className="step">
          <div className="icon">✨</div>
          <h3>Receive Your Resume</h3>
          <p>In moments, you get back a refined, job-focused resume that tells your best story.</p>
        </div>
      </div>
     
      </section>
      {!isAuthenticated ?(
       <button className='btn1' onClick={() => loginWithRedirect()}>Get Started</button>)
       :(
        <button className='btn1' onClick={() => navigate("/upload")}>Get Started</button>
       )}
      </div>
      
  )
}

export default Working
