import { Field, Form, Formik } from "formik";
import { DiscordLogo, GithubLogo } from "phosphor-react";
import { FC } from "react";
import { signIn } from 'next-auth/react'


export const SignUpModal: FC = () => <>
    <input type="checkbox" id="sign-up" className="modal-toggle" />
    <label htmlFor="sign-up" className="
      sm:modal-middle
      modal 
      modal-bottom 
      cursor-pointer
    ">
      <label className="
        sm:w-8/12 
        modal-box 
        relative 
        max-w-4xl
        max-h-[95%]
      ">
        <label htmlFor="sign-up" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
        
        <Formik
         initialValues={{
          username: '',
          email: '',
          password: '',
          repeatPassword: ''
         }}
         
         onSubmit={(value) => {}}
        >
          <Form className="flex flex-col gap-1">
  
            <div className="form-control w-full max-w-lg">
              <label className="label" htmlFor="username">
                <span className="label-text">Username</span>
              </label>
              <Field className="input input-bordered w-full max-w-lg" id="username" name="username" placeholder="John" />
            </div>
            
            <div className="form-control w-full max-w-lg">
              <label className="label"htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <Field className="input input-bordered w-full max-w-lg" id="email" name="email" placeholder="john@acme.com" type="email" />
            </div>
            
            <div className="form-control w-full max-w-lg">
              <label className="label"htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <Field className="input input-bordered w-full max-w-lg" id="password" name="password" placeholder="********" type="password" />
            </div>
            
            
            <div className="form-control w-full max-w-lg">
              <label className="label"htmlFor="repeatPassword">
                <span className="label-text">Repeat Password</span>
              </label>
              <Field className="input input-bordered w-full max-w-lg" id="repeatPassword" name="repeatPassword" placeholder="********" type="password" />
            </div>
  
            <button className="btn btn-primary mt-6" type="submit">Submit</button>
          </Form>
        
        </Formik>
        
        <div className="divider">OR LOGIN WITH</div>
        
        <section className="flex gap-2 justify-center">
          <button 
            className="flex items-center justify-center btn gap-2"
            onClick={() => signIn('discord')}
            > 
            <DiscordLogo onClick={() => signIn('discord', { callbackUrl: 'https://localhost:3000' })} className="text-[2em] text-center"/>
            <span className="text-[1.2em]"> Discord </span>
          </button>
          <button 
            className="flex items-center justify-center btn gap-2"
            onClick={() => signIn('github', { callbackUrl: 'https://localhost:3000' })}
            > 
            <GithubLogo className="text-[2em] text-center"/>
            <span className="text-[1.2em]"> GitHub </span>
          </button>
        </section>
        
      </label>
    </label>
</>