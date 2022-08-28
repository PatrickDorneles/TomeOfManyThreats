import { useRouter } from "next/router";
import { FC } from "react";

 const NotFoundPage: FC = () => {
    const { back } = useRouter()
    
    return <section className="grid flex-1 place-items-center">
      <div className="hero w-fit bg-base-200">
        <div className="hero-content text-center">
          <div className="flex max-w-md flex-col items-center gap-4">
            <span className="text-6xl">🤔</span>
            <h1 className="text-4xl font-bold">404</h1>
            <p className="">This resource was lost in the pages of the Tome.</p>
            <button className="btn w-fit" onClick={() => back()}>Back</button>
          </div>
        </div>
      </div>
    </section>
}

export default NotFoundPage
