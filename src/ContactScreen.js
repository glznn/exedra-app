import React from 'react'

import "./ContactScreen.css"

function ContactScreen() {
  return (
    <div className="ContactScreen">
      <div className="contact__content">
        <h1 className="app__pink">
        Contact Us
        </h1>
        <h3>If you have any questions, concerns, or suggestions(!!) feel free to contact us:</h3>

        <h4>By email: 
          <a className="app__pink"
          href="mailto:info@exedra.app?subject=Exedra App Inquiry&body=Hello, "
          > info@exedra.app 
          </a>
        </h4>
      </div>
  </div>
  )
}

export default ContactScreen