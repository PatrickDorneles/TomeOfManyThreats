import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { LoginModal } from '../components/layouts/LoginModal'
import { SignUpModal } from '../components/layouts/SignUpModal'

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
            text-lg 
            lg:text-2xl
          '>Your place to keep your monsters. Your place to store traps. Your place for evil DM stuff 😈</h2>
          
          { status === 'authenticated' &&
            <section onClick={() => push('/dashboard')} className='flex items-center justify-center lg:justify-start'> 
              <label className='btn btn-primary w-fit'> Go to Dashboard </label>
            </section>
          }
          
          { status === 'unauthenticated' && 
            <section className='flex items-center justify-center lg:justify-start'> 
              <label htmlFor='login' className='btn btn-primary w-fit'> Login </label>
              <span className='mx-2'>Or</span>
              <label htmlFor='sign-up' className='btn btn-secondary w-fit'> Sign Up </label>
            </section>
          }
          
          {
            status === 'loading' &&
            <section className='flex items-center justify-center lg:justify-start'> 
              <progress className="progress w-56"></progress>
            </section>
          }
          
          <LoginModal />
          <SignUpModal />
          
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
