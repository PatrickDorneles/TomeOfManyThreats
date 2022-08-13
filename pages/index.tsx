import type { NextPage } from 'next'
import Head from 'next/head'
import { WithTheme } from '../components/core/WithTheme'
import { LoginModal } from '../components/layouts/LoginModal'
import { SignUpModal } from '../components/layouts/SignUpModal'

const Home: NextPage = () => {
  
  return (
    <WithTheme>
      <Head>
        <title>ToMT 🐲📖</title>
      </Head>
      <div
        className='
        lg:flex-row
        lg:justify-around
        flex
        flex-col-reverse
        pt-16
        justify-end
        items-center
        min-h-screen
        '
      >
        <aside className='flex flex-col gap-3 p-8'>
          <h1 className='
            lg:text-5xl 
            text-3xl 
            text-primary 
            font-bold
          '>Tome of Many Threats <span className='text-base'>from The LoreKeeper</span></h1>
          <h2 className='
            lg:text-2xl 
            text-lg 
            break-words 
            max-w-xl
          '>Your place to keep your monsters. Your place to store traps. Your place for evil DM stuff 😈</h2>
          
          <section className='flex items-center justify-center lg:justify-start'> 
            <label htmlFor='login' className='btn btn-primary w-fit'> Login </label>
            <span className='mx-2'>Or</span>
            <label htmlFor='sign-up' className='btn btn-secondary w-fit'> Sign Up </label>
          </section>
          
          <LoginModal />
          <SignUpModal />
          
        </aside>
        <aside className='lg:mb-24 mb-10'>
          <p className='
            lg:text-[16em] 
            text-[6em] 
            -rotate-[25deg] 
            transform 
            select-none 
            text-center'
            >🐲</p>
        </aside>
      </div>
    </WithTheme>
  )
}

export default Home
