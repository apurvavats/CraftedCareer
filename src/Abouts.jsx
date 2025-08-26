import React from 'react'
import './abouts.css'
function Abouts() {
  return (
    <div className='main-about'>
     <section className="about-page">
      <h2>Our Mission</h2>
      <p>
        We help you submit a resume tailored precisely for the role you're after—highlighting what matters most—with ease and calm.
      </p>
      <div className="features">
        <div className="feature">
          <div className="icon">⏱</div>
          <p>Save time & effort</p>
        </div>
        <div className="feature">
          <div className="icon">🌿</div>
          <p>Elegant, focused results</p>
        </div>
        <div className="feature">
          <div className="icon">📝</div>
          <p>Professional & personal touch</p>
        </div>
      </div>
      <div className="creator">
        <img src="/me.jpg" alt="Creator" />
        <p>
          <strong>Hello, I'm Apurva.</strong> I built this platform to help busy professionals stand out—thoughtfully and beautifully.
        </p>
      </div>
      <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#6b3f4f' }}>
        "Tailoring resumes with as much care as writing a handwritten letter."
      </p>
      
    </section>
    </div>
  )
}

export default Abouts
