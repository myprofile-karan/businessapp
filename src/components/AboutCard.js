import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='col-12 col-sm-6 col-ms-6 col-lg-6 px-0'>
        <div className="card">
            <h4>{props.heading1}{props.heading2}{props.heading3}{props.heading4}</h4>
            <p className='text-secondary w-75'>Mollitia placeat modi explicabo voluptatum Vel unde sint error placeat. Alias modi molestias blanditiis aspernatur? Ex iusto nam ipsum aliquam.</p>
        </div>
    </div>
  )
}

export default AboutCard;
