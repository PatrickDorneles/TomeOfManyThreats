import { Field, Form, Formik } from "formik";
import { FC } from "react";

export const SignUpModal: FC = () => <>
    <input type="checkbox" id="sign-up" className="modal-toggle" />
    <div className="
      sm:modal-middle
      modal 
      modal-bottom 
    ">
      <div className="
        sm:w-8/12 
        modal-box 
        relative 
        max-w-4xl
      ">
        <label htmlFor="sign-up" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-2xl font-bold mb-6">Sign Up</h3>
        <Formik
         initialValues={{
          username: '',
          email: ''
         }}
         
         onSubmit={() => {
         
         }}
        >
          <Form className="flex flex-col gap-2">
  
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="username">
                <span className="label-text">Username</span>
              </label>
              <Field className="input input-bordered w-full max-w-xs" id="username" name="username" placeholder="John" />
            </div>
            
            <div className="form-control w-full max-w-xs">
              <label className="label"htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <Field className="input input-bordered w-full max-w-xs" id="email" name="email" placeholder="john@acme.com" type="email" />
            </div>
  
            <button className="btn btn-primary mt-6" type="submit">Submit</button>
          </Form>
        
        </Formik>
      </div>
    </div>
</>