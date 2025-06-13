import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BookOpen,
  BarChart3,
  MessageSquare,
  LockKeyhole,
  X,
} from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  exit: { opacity: 0, y: 60, transition: { duration: 0.5, ease: 'easeInOut' } },
}

const h2Variant = {
  hidden: { opacity: 0, x: 45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  exit: { opacity: 0, x: 45, transition: { duration: 0.5, ease: 'easeInOut' } },
}

const pVariant1 = {
  hidden: { opacity: 0, x: 45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  exit: { opacity: 0, x: 45, transition: { duration: 0.5, ease: 'easeInOut' } },
}

const pVariant2 = {
  hidden: { opacity: 0, x: -45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  exit: { opacity: 0, x: 45, transition: { duration: 0.5, ease: 'easeInOut' } },
}

const AboutSection = () => {
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const cardsRef = useRef(null)

  const titleInView = useInView(titleRef, { once: false, amount: 0.7 })
  const textInView = useInView(textRef, { once: false, amount: 0.4 })
  const cardsInView = useInView(cardsRef, { once: false, amount: 0.5 })

  const [titleVisible, setTitleVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTitleVisible(titleInView)
    setTextVisible(textInView)
    setCardsVisible(cardsInView)
  }, [titleInView, textInView, cardsInView])

  const cards = [
    {
      icon: <BookOpen className='size-6' />,
      title: 'Accès simplifié aux cours',
      text: 'Les étudiants peuvent consulter tous leurs supports pédagogiques en un seul clic.',
    },
    {
      icon: <BarChart3 className='size-6' />,
      title: 'Suivi académique intelligent',
      text: 'Visualisation des notes, relevés, emplois du temps, et annonces officielles.',
    },
    {
      icon: <MessageSquare className='size-6' />,
      title: 'Communication fluide',
      text: 'Un espace intégré pour interagir avec les enseignants et recevoir des informations importantes.',
    },
    {
      icon: <LockKeyhole className='size-6' />,
      title: 'Connexion sécurisée',
      text: 'Authentification rigoureuse et accès personnalisé selon le rôle (étudiant, enseignant).',
    },
  ]

  return (
    <div ref={titleRef} className='flex flex-col justify-center items-center'>
      <motion.h2
        initial='hidden'
        animate={titleVisible ? 'visible' : 'exit'}
        variants={h2Variant}
        className='text-white text-center font-[Inter] text-7xl mb-12 font-bold'
      >
        Pourquoi{' '}
        <span className='bg-gradient-to-t from-slate-800 via-violet-500 to-zinc-100 bg-clip-text text-transparent ml-3'>
          IUT ACADEMIC ?
        </span>
      </motion.h2>

      <motion.h2
        ref={titleRef}
        initial='hidden'
        animate={titleVisible ? 'visible' : 'exit'}
        variants={pVariant1}
        className='text-[20px] font-semibold text-center mb-3 tracking-tight bg-gradient-to-tr from-neutral-200 via-zinc-50 to-zinc-400 bg-clip-text text-transparent'
      >
        Améliore l'expérience académique pour tous.
      </motion.h2>

      <motion.p
        ref={titleRef}
        initial='hidden'
        animate={titleVisible ? 'visible' : 'exit'}
        variants={pVariant2}
        className='text-center text-[17px] text-neutral-100 mb-10'
      >
        <span className='font-bold bg-gradient-to-tr from-slate-800 via-violet-500 to-zinc-100 bg-clip-text text-transparent'>
          IUT ACADEMIC
        </span>{' '}
        est une plateforme numérique sécurisée et intuitive, conçue pour
        moderniser la gestion académique de l’IUT de Douala en centralisant les
        informations essentielles.
      </motion.p>

      <div
        ref={cardsRef}
        className='flex flex-wrap justify-center items-center text-center gap-8'
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial='hidden'
            animate={cardsVisible ? 'visible' : 'exit'}
            variants={cardVariants}
            className='bg-white w-64 min-h-[250px] flex flex-col p-6 rounded-md shadow-lg border border-transparent cursor-pointer transition-all duration-50 '
            whileHover={{
              scale: 1.02,
              rotateZ: 0.2,
              backgroundColor: 'rgba(255,255,255,0.05)',
              boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
              borderColor: '#d4d4d8',
            }}
          >
            <div className='text-purple-600 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md mx-auto mb-4'>
              {card.icon}
            </div>
            <h3 className='font-bold text-purple-800 text-[15px] mb-2'>
              {card.title}
            </h3>
            <p className='text-[13px] text-neutral-700 leading-relaxed'>
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AboutSection
