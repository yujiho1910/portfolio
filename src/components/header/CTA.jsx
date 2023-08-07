import React from 'react'
import Resume from '../../assets/resume_V4.pdf'
import Transcript from '../../assets/transcript_Y2.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={Resume} download className='btn'>Resume</a>
        <a href={Transcript} download className='btn'>Transcript</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA