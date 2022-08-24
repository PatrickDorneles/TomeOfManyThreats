import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next"
import { ContentSearchBar } from "components/core/ContentSearchBar"
import { Creature } from "@prisma/client"
import { prisma } from "prisma/client"
import { useAuthRequired } from "hooks/UseAuthRequired"
import { getSession, useSession } from "next-auth/react"
import { useRouter } from "next/router"

type Props = {
    contents: Creature[]
}

const DashboardPage: NextPage<Props> = ({ contents }) => {
    const { push } = useRouter()
    useSession({ required: true, onUnauthenticated: () => {
        push('/')
    } })
    
    return <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6"></p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
    </div>
}

DashboardPage.displayName = ''

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }): Promise<GetServerSidePropsResult<Props>> => {
    const session = await getSession()
    if(!session || !session.user) return { redirect: { destination: '/404', statusCode: 302 }}
    
    const { user } = session
    
    const creatures = await prisma.creature.findMany({
        where: {
            author: {
                email: user.email
            }
        }
    })
    
    const contents: Creature[] = []
    
    contents.concat(creatures)
    
    return { props: { contents } }
}

export default DashboardPage