import * as React from 'react'
import axios from 'axios'

const Contact = () => {
   const handleSubmit = () => {
      axios.post(
         '/api/sendEmail',
         {},
         {
            params: {
               name: 'Jane Doe',
               email: 'jane@gmail.com',
               phone: '416-967-1111',
               message: 'Help me Obi Wan, help me',
            },
         }
      )
   }

   return (
      <div>
         <h1>Contact</h1>
         <p>Testing...</p>
         <button onClick={handleSubmit}>Test</button>
      </div>
   )
}

export default Contact
