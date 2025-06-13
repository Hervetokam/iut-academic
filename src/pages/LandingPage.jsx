import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import SelectRole from '../auth/SelectRole'
import LandingNavbar from '../components/Landing/LandingNavbar'
import LandingFooter from '../components/Landing/LandingFooter'
import AboutSection from '../components/Landing/AboutSection'
import ContactSection from '../components/Landing/ContactSection'

const LandingPage = () => {
  const numbers = ['1', '2', '3']
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % numbers.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-col min-h-screen bg-black'>
      <div
        className='absolute left-[550px] z-10 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 blur-[150px]'
        style={{ width: '800px', top: '-180px' }}
      ></div>
      <div
        className='absolute left-[-700px] z-10 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-purple-800 via-violet-500 to-purple-800 blur-[150px]'
        style={{ width: '800px', top: '-180px' }}
      ></div>

      <LandingNavbar />

      <main className='h-140 flex items-center justify-center  '>
        <div className='flex flex-col items-center justify-center gap-3'>
          <h1
            className='text-[75px] font-[Inter] text-center'
            style={{ lineHeight: '63px', wordSpacing: '1px' }}
          >
            <motion.span
              className='font-extrabold'
              initial={{ backgroundPosition: '0% 50%', opacity: 0.8 }}
              animate={{ backgroundPosition: '100% 50%', opacity: 1 }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                background:
                  'linear-gradient(90deg, #F8F8FF, #FFFAF0, #FFFFF0 )',
                backgroundSize: '300% 500%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Bienvenue sur
            </motion.span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: '.2', ease: 'easeInOut' }}
              className='text-center text-[75px]  tracking-wide  
          bg-gradient-to-tl
        from-slate-800
        via-violet-500
        to-zinc-400
          bg-clip-text
          text-transparent 
          font-extrabold'
              style={{ letterSpacing: '-2px', wordSpacing: '-8px' }}
            >
              IUT ACADEMIC
            </motion.div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: '.5', ease: 'easeInOut' }}
            className=' text-xm  text-center text-neutral-50 mt-2 '
          >
            Cette plateforme a pour but de simplifier la gestion académique des
            étudiants ainsi que des enseignants <br /> du niveau{' '}
            <motion.span
              className='font-black text-violet-200 text-xl'
              key={numbers[index]}
              initial={{ x: 100, opacity: 0, color: '#9370DB' }}
              animate={{ y: 20, opacity: 1, color: '#9370DB' }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {numbers[index]}
            </motion.span>
            <span style={{ marginLeft: '2px' }}> en </span>centralisant leurs
            notes, emplois du temps, cours et informations sur un espace dédié.
          </motion.p>

          <SelectRole />
        </div>

        <div
          className='absolute right-[750px] z-10 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-slate-800 via-violet-800 to-zinc-400 blur-[150px]'
          style={{ width: '600px', top: '700px' }}
        ></div>
        <div
          className='absolute left-[750px] z-10 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tr from-slate-800 via-violet-800 to-zinc-400 blur-[150px]'
          style={{ width: '600px', top: '700px' }}
        ></div>
      </main>

      <section
        id='apropos'
        className='px-12 mt-5  flex flex-col  justify-center h-150 m-auto '
      >
        <AboutSection />
      </section>

      <div
        className='absolute right-[900px]  h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-slate-800 via-violet-800 to-zinc-400 blur-[150px]'
        style={{ width: '600px', top: '1900px' }}
      ></div>
      <div
        className='absolute right-[0px] h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tr from-slate-800 via-violet-800 to-zinc-400 blur-[150px]'
        style={{ width: '600px', top: '1400px' }}
      ></div>
      <div
        className='absolute right-[1050px] h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tr from-purple-800 via-purple-800 to-zinc-400 blur-[150px]'
        style={{ width: '600px', top: '1300px' }}
      ></div>

      <section id='contact' className='px-20 py-16'>
        <ContactSection />
      </section>

      <LandingFooter />
    </div>
  )
}

export default LandingPage
