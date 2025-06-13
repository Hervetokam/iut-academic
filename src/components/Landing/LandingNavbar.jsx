import { delay, easeInOut, motion } from 'framer-motion'
import React from 'react'

const LandingNavbar = () => {
  const bounceTransition1 = {
    type: 'spring',
    stiffness: 300,
    damping: 20,
    duration: 2,
    delay: 0.15,
  }

  const bounceTransition2 = {
    type: 'spring',
    stiffness: 300,
    damping: 20,
    duration: 0.1,
    delay: 0.25,
  }

  const bounceTransition3 = {
    type: 'spring',
    stiffness: 300,
    damping: 20,
    duration: 0.1,
    delay: 0.2,
  }

  return (
    <header className='w-full px-20 py-6 flex justify-between items-center'>
      <motion.a
        href='/'
        initial={{ opacity: 0, x: -50, scaleY: 0 }}
        animate={{ opacity: 1, x: 0, scaleY: 1 }}
        transition={bounceTransition3}
        whileHover={{
          scale: 1.02,
          x: 5,
          y: 0.2,
          transition: { duration: 0.3, ease: 'easeInOut' },
        }}
        whileTap={{
          scale: 0.9,
          transition: { duration: 0.8, ease: 'circOut' },
        }}
        className='text-xl font-bold tracking-wide
      bg-gradient-to-tr
    from-slate-800
    via-violet-500
    to-zinc-300
      bg-clip-text
      text-transparent '
      >
        {' '}
        IUT ACADEMIC{' '}
      </motion.a>

      <nav className='flex gap-6 items-center justify-center text-[12.5px]'>
        <motion.div
          initial={{ opacity: 0, x: 50, scaleY: 0 }}
          whileHover={{
            scale: 1.02,
            border: '1px solid #DCDCDC',
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
          whileTap={{
            scale: 0.95,
            y: 0.5,
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
          animate={{ opacity: 1, x: 0, scaleY: 1 }}
          transition={bounceTransition1}
          className='bg-clip-padding
        backdrop-filter
        backdrop-blur-xl
        bg-opacity-10
        backdrop-saturate-100
        backdrop-contrast-95
        w-21 h-7  flex items-center justify-center rounded-md border-1 border-zinc-500 cursor-pointer'
        >
          <a
            href='#apropos'
            className=' text-neutral-100 hover:text-violet-200 transition duration-400'
          >
            À propos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scaleY: 0 }}
          whileHover={{
            scale: 1.02,
            border: '1px solid #DCDCDC',
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
          whileTap={{
            scale: 0.95,
            y: 0.5,
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
          animate={{ opacity: 1, x: 0, scaleY: 1 }}
          transition={bounceTransition2}
          className='bg-clip-padding
        backdrop-filter
        backdrop-blur-sm
        bg-opacity-1
        backdrop-saturate-100
        backdrop-contrast-95
        w-21 h-7  flex items-center justify-center rounded-md border-1 border-zinc-500 cursor-pointer'
        >
          <a
            href='#contact'
            className=' text-neutral-100 hover:text-violet-200 transition duration-400'
          >
            Contact
          </a>
        </motion.div>
      </nav>
    </header>
  )
}

export default LandingNavbar
