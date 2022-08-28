import { useRouter } from "next/router"

const UnauthorizedPage = () => {
    const { push } = useRouter()

    return <section className="grid flex-1 place-items-center">
    <div className="hero w-fit bg-base-200">
      <div className="hero-content text-center">
        <div className="flex max-w-md flex-col items-center gap-4">
          <span className="text-6xl">👮</span>
          <h1 className="text-4xl font-bold">401</h1>
          <p className="">You must show yourself to see this page, please authenticate on the initial page.</p>
          <button className="btn w-fit" onClick={() => push('/')}>Initial Page</button>
        </div>
      </div>
    </div>
  </section>
}

export default UnauthorizedPage