import React from 'react'
import moment from 'moment'

const Footer = () => {
  return (
    <footer>
      <h6 className="text-sm-center"><i className="fa fa-code"></i> by Janusz Szubert {moment().format('YYYY')}</h6>
      <p className="text-sm-center">
        <a className="social-link" href="https://github.com/TheInvalidNonce" target="_blank" rel="noopener noreferrer"><i className="fa fa-2x fa-github"></i></a>
        <a className="social-link" href="https://www.linkedin.com/in/januszszubert/" target="_blank" rel="noopener noreferrer"><i className="fa fa-2x fa-linkedin"></i></a>
      </p>
    </footer>
  )
}

export default Footer