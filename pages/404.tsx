import { useRouter } from "next/router";
import { FC } from "react";

 const NotFoundPage: FC = () => {
    const { push } = useRouter()
    
    return  <div className="hero flex-1 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">This resource was lost in the pages of the Tome, please go back to the beginning.</p>
          <button className="btn" onClick={() => push('/')}>Back to Start</button>
        </div>
      </div>
    </div>
}

export default NotFoundPage