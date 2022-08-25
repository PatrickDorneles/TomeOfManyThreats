import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next"
import { PostSearchBar } from "components/core/ContentSearchBar"
import { useAuthRequired } from "hooks/UseAuthRequired"
import { useServerQuery } from "utils/trpc"
import { useState } from "react"

const DashboardPage: NextPage = () => {
    const session = useAuthRequired()
    const [page, setPage] = useState(1)
    const { data: posts } = useServerQuery(['posts:mine', {
        userEmail: session?.user?.email!,
        page
    }])
    

    return <div className="grid flex-1 place-items-center">
        { !posts?.length && <div className="hero w-fit bg-base-200 p-8">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there, fellow adventurer! 🧙‍♂️</h1>
              <p className="py-6">We noticed you do not have any page written or reacted on this immense tome, so you can start writing </p>
              <button className="btn btn-primary">Create a post</button>
            </div>
          </div>
        </div> }
    </div>
}

export default DashboardPage