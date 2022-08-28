import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next"
import { PostSearchBar } from "components/core/PostSearchBar"
import { useAuthRequired } from "hooks/UseAuthRequired"
import { useEffect, useState } from "react"
import { useTrpcQuery } from "utils/trpc"
import { withAuthOnly } from "hocs/WithAuthOnly"
import { getSession } from "next-auth/react"
import Link from "next/link"

const DashboardPage: NextPage = () => {
    const { session } = useAuthRequired()
    const [page, setPage] = useState(1)
    const { data: myPosts } = useTrpcQuery(['posts:mine', {
      page
    }], { enabled: !!session?.user })
    
    return <div className="grid flex-1 place-items-center">
        { !myPosts?.length ? (
          <div className="hero w-fit bg-base-200 p-8">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello there, fellow adventurer! 🧙‍♂️</h1>
                <p className="py-6">We noticed you do not have any page written or reacted on this immense tome, so you can start writing </p>
                <Link href="/post/choose">
                  <a className="btn btn-primary">
                    Create a post
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ) : ''}
    </div>
}

export default withAuthOnly(DashboardPage)