import { Field, Form, Formik } from "formik";
import { DiscordLogo, GithubLogo } from "phosphor-react";
import { FC } from "react";
import { signIn } from 'next-auth/react'
import { getBaseUrl } from "pages/_app";


export const SignUpModal: FC = () => <>
    <input type="checkbox" id="sign-up" className="modal-toggle" />
    <label htmlFor="sign-up" className="
      modal
      modal-bottom 
      cursor-pointer 
      sm:modal-middle
    ">
      <label className="
        modal-box 
        relative 
        max-h-[95%] 
        max-w-4xl
        sm:w-8/12
      ">
        <label htmlFor="sign-up" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="mb-6 text-center text-2xl font-bold">Sign Up</h3>
        
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
              <Field className="input-bordered input w-full max-w-lg" id="username" name="username" placeholder="John" />
            </div>
            
            <div className="form-control w-full max-w-lg">
              <label className="label"htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <Field className="input-bordered input w-full max-w-lg" id="email" name="email" placeholder="john@acme.com" type="email" />
            </div>
            
            <div className="form-control w-full max-w-lg">
              <label className="label"htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <Field className="input-bordered input w-full max-w-lg" id="password" name="password" placeholder="********" type="password" />
            </div>
            
            
            <div className="form-control w-full max-w-lg">
              <label className="label"htmlFor="repeatPassword">
                <span className="label-text">Repeat Password</span>
              </label>
              <Field className="input-bordered input w-full max-w-lg" id="repeatPassword" name="repeatPassword" placeholder="********" type="password" />
            </div>
  
            <button className="btn btn-primary mt-6" type="submit">Submit</button>
          </Form>
        
        </Formik>
        
        <div className="divider">OR LOGIN WITH</div>
        
        <section className="flex justify-center gap-2">
          <button 
            className="btn flex items-center justify-center gap-2"
            onClick={() => signIn('discord')}
            > 
            <DiscordLogo onClick={() => signIn('discord', { callbackUrl: getBaseUrl() })} className="text-center text-[2em]"/>
            <span className="text-[1.2em]"> Discord </span>
          </button>
          <button 
            className="btn flex items-center justify-center gap-2"
            onClick={() => signIn('github', { callbackUrl: getBaseUrl() })}
            > 
            <GithubLogo className="text-center text-[2em]"/>
            <span className="text-[1.2em]"> GitHub </span>
          </button>
        </section>
        
      </label>
    </label>
</>