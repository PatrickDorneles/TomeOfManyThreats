import type { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DiscordLogo } from 'phosphor-react'
import { getBaseUrl } from './_app'

const IndexPage: NextPage = () => {
  const { status } = useSession()
  const { push } = useRouter()
  
  return (
    <>
      <Head>
        <title>ToMT from Jotun 🐲📖</title>
      </Head>
      <div
        className='
        flex
        flex-1
        flex-col-reverse
        items-center
        justify-end
        pt-16
        lg:flex-row
        lg:justify-around
        '
      >
        <aside className='flex flex-col gap-3 p-8'>
          <h1 className='
            text-3xl 
            font-bold 
            text-primary 
            lg:text-5xl
          '>Tome of Many Threats <span className='text-base'>from Jotun</span></h1>
          <h2 className='
            max-w-xl 
            break-words 
            text-xl 
            lg:text-2xl
          '>Your place to keep your monsters. Your place to store traps. Your place for evil DM stuff 😈</h2>
          
          { status === 'authenticated' &&
            <section onClick={() => push('/dashboard')} className='flex items-center justify-start'> 
              <label className='btn btn-primary w-fit'> Go to Dashboard </label>
            </section>
          }
          
          { status === 'unauthenticated' && 
            <section className='flex items-center justify-center text-lg sm:text-xl lg:justify-start'> 
              Want to join? Login with <button onClick={() => signIn('discord', { callbackUrl: getBaseUrl() })} className="btn ml-2 flex items-center justify-center gap-2 border-none bg-discord-base text-sm text-white hover:bg-discord-darker"> 
                <DiscordLogo weight='fill' className="text-center text-[2em] antialiased"/>
                <span className="text-[1.2em]"> Discord </span>
              </button>
            </section>
          }
          
          {
            status === 'loading' &&
            <section className='flex items-center justify-center lg:justify-start'> 
              <progress className="progress w-56"></progress>
            </section>
          }
          
          
        </aside>
        <aside className='mb-10 lg:mb-24'>
          <p className=' 
            select-none 
            text-center 
            text-[6em] 
            lg:text-[16em]
            '
            >🐲</p>
        </aside>
      </div>
    </>
  )
}

export default IndexPage
