import { FC } from "react";

export const LoginModal: FC = () => <>
    <input type="checkbox" id="login" className="modal-toggle" />
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
        <label htmlFor="login" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-2xl font-bold">Login</h3>
        <p className="py-4">You have been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
      </div>
    </div>
</>