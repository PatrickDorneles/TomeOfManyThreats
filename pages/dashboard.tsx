import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next"
import { PostSearchBar } from "components/core/ContentSearchBar"
import { useAuthRequired } from "hooks/UseAuthRequired"
import { useState } from "react"
import { useTrpcQuery } from "utils/trpc"

const DashboardPage: NextPage = () => {
    const { session } = useAuthRequired()
    const [page, setPage] = useState(1)
    console.log('component',session)
    const { data: myPosts } = useTrpcQuery(['posts:mine', {
      page
    }], { enabled: !!session?.user })
    
    

    return <div className="grid flex-1 place-items-center">
        <div className="hero w-fit bg-base-200 p-8">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there, fellow adventurer! 🧙‍♂️</h1>
              <p className="py-6">We noticed you do not have any page written or reacted on this immense tome, so you can start writing </p>
              <a className="btn btn-primary">Create a post</a>
            </div>
          </div>
        </div>
    </div>
}

export default DashboardPage