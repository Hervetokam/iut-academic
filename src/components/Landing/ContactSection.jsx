import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'


const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5, ease: 'easeInOut' } },
}

const ContactSection = () => {
  const contactRef = useRef(null)
  const formRef = useRef(null)

  const contactInView = useInView(contactRef, { once: false, amount: 0.5 })
  const formInView = useInView(formRef, { once: false, amount: 0.4 })

  const [contactVisible, setContactVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    setContactVisible(contactInView)
    setFormVisible(formInView)
  }, [contactInView, formInView])

  return (
    <motion.div
      ref={contactRef}
      initial='hidden'
      animate={contactVisible ? 'visible' : 'exit'}
      variants={sectionVariants}
      className='max-w-5xl mx-auto mt-20 bg-neutral-100 backdrop-blur-lg shadow-xl border border-white/30 p-10 rounded-md'
    >
      <motion.h2
        initial='hidden'
        animate={contactVisible ? 'visible' : 'exit'}
        variants={sectionVariants}
        className='text-3xl font-extrabold text-center text-violet-800 mb-8 tracking-tight'
      >
        Contactez-nous
      </motion.h2>

      <motion.div
        className='grid md:grid-cols-2 gap-10'
        initial='hidden'
        animate={contactVisible ? 'visible' : 'exit'}
        variants={sectionVariants}
      >
        <div className='space-y-5 '>
          {[
            { icon: <Mail />, text: 'iutacademic@gmail.com' },
            { icon: <Phone />, text: '+237 6 XX XX XX XX' },
            { icon: <MapPin />, text: 'Campus IUT de Douala, Cameroun' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial='hidden'
              animate={contactVisible ? 'visible' : 'exit'}
              variants={sectionVariants}
              className='flex items-center gap-4'
            >
              <div className='text-violet-700 shadow-md rounded-full w-10 h-10 p-2'>
                {item.icon}
              </div>
              <p className='text-gray-700'>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.form
          ref={formRef}
          initial='hidden'
          animate={formVisible ? 'visible' : 'exit'}
          variants={sectionVariants}
          className='space-y-4'
        >
          <motion.input
            type='text'
            placeholder='Nom complet'
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500'
            variants={sectionVariants}
          />
          <motion.input
            type='email'
            placeholder='Adresse email'
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500'
            variants={sectionVariants}
          />
          <motion.textarea
            placeholder='Votre message...'
            rows={4}
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500'
            variants={sectionVariants}
          />
          <motion.button
            type='submit'
            className='bg-gradient-to-tl from-[#18012a] to-[#410169] text-white px-6 py-3 rounded-sm border-2 border-zinc-100 cursor-pointer hover:bg-gradient-to-br transition-all duration-100'
            variants={sectionVariants}
            whileHover={{ scale: 1.05 }}
          >
            Envoyer le message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

export default ContactSection
