import * as React from 'react'
import Head from 'next/head'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import Loader from 'react-ts-loaders'

import Twitter from '../images/twitter.svg'
import GitHub from '../images/github.svg'
import NPM from '../images/npm.svg'

interface Inputs {
   name: string
   email: string
   phone?: string
   message: string
}

const Contact = () => {
   const [loading, setLoading] = React.useState(false)
   const [status, setStatus] = React.useState('unsubmitted')
   const [response, setResponse] = React.useState('')
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<Inputs>()
   const onSubmit: SubmitHandler<Inputs> = async ({
      name,
      email,
      phone,
      message,
   }) => {
      setLoading(true)

      await axios
         .post(
            '/api/sendEmail',
            {},
            {
               params: {
                  name,
                  email,
                  phone,
                  message,
               },
            }
         )
         .then(function (response) {
            setResponse(
               'Thanks for sending me a message! I should get back to you within a few days.'
            )
            setStatus('success')
            setLoading(false)
         })
         .catch(function (error) {
            if (error.response) {
               setResponse(
                  "There was an error sending your message. I'm sorry about that. Please open a GitHub Issue so I can respond there."
               )
               setStatus('error')
               setLoading(false)
            }
         })

      //setLoading(false)
   }

   return (
      <div className="contents">
         <Head>
            <title>Contact - React Typescript Loaders</title>
            <meta
               name="description"
               content="Simple, easy to use loader components for your React App"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="main contactpage">
            <h1>Contact</h1>
            <p>
               Hi there! If you have issues or questions, there are a few ways
               to contact me about this package.
            </p>

            <p>
               <a target="_blank" href="https://twitter.com/royanger">
                  <Twitter
                     width="40px"
                     height="40px"
                     fill="var(--brand-secondary)"
                  />
               </a>
               Reach out to me on{' '}
               <a target="_blank" href="https://twitter.com/royanger">
                  Twitter
               </a>
            </p>
            <p>
               <a
                  target="_blank"
                  href="https://github.com/royanger/react-ts-loaders"
               >
                  <GitHub
                     width="40px"
                     height="40px"
                     fill="var(--brand-secondary)"
                  />
               </a>
               File a an Issue on the{' '}
               <a
                  target="_blank"
                  href="https://github.com/royanger/react-ts-loaders"
               >
                  GitHub repo
               </a>
            </p>
            <p>
               <a target="_blank" href="https://www.npmjs.com/~royanger">
                  <NPM
                     width="40px"
                     height="40px"
                     fill="var(--brand-secondary)"
                  />
               </a>
               Visit the{' '}
               <a target="_blank" href="https://www.npmjs.com/~royanger">
                  NPM page
               </a>
            </p>

            <h2>Shoot me an email!</h2>

            {loading && status !== 'error' ? (
               <Loader
                  type="dotspinner"
                  size={200}
                  color="var(--brand-primary"
                  altColor="var(--brand-secondary"
                  className="loader"
               />
            ) : (
               ''
            )}
            {!loading && status === 'error' ? (
               <div className="error">
                  <p>{response}</p>
               </div>
            ) : (
               ''
            )}
            {!loading && status === 'success' ? (
               <div className="success">
                  <p>{response}</p>
               </div>
            ) : (
               ''
            )}
            {!loading && status === 'unsubmitted' ? (
               <form onSubmit={handleSubmit(onSubmit)} className="contactform">
                  <label htmlFor="name">Name:</label>

                  <input
                     id="inputName"
                     {...register('name', { required: true })}
                  />

                  <label htmlFor="inputEmail">Email:</label>
                  <input
                     id="inputEmail"
                     {...register('email', { required: true })}
                  />
                  <label htmlFor="inputPhone">Phone:</label>
                  <input id="inputPhone" {...register('phone')} />
                  <label htmlFor="inputMessage">Message:</label>
                  <textarea
                     id="inputMessage"
                     {...register('message', { required: true })}
                  />

                  {errors?.name && (
                     <>
                        <div></div>
                        <div className={`validation ${status} `}>
                           <p className="errorMessage">
                              Name field is required
                           </p>
                        </div>
                     </>
                  )}
                  {errors?.email && (
                     <>
                        <div></div>
                        <div className={`validation ${status} `}>
                           <p className="errorMessage">Email is required</p>
                        </div>
                     </>
                  )}

                  <div className="submitcontainer">
                     <button className="submit" type="submit">
                        Send Message
                     </button>
                  </div>
               </form>
            ) : (
               ''
            )}
         </main>
      </div>
   )
}

export default Contact
