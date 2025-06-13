import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { hover, motion, scale } from 'framer-motion'

const SelectRole = () => {
  const bounceTransition1 = {
    type: 'spring',
    stiffness: 300,
    damping: 20,
    duration: 1,
    delay: 3.2,
  }

  const bounceTransition2 = {
    type: 'spring',
    stiffness: 300,
    damping: 20,
    duration: 1,
    delay: 3.2,
  }

  const navigate = useNavigate()

  const [mousePositionStudent, setMousePositionStudent] = useState({
    x: 0,
    y: 0,
  })
  const [mousePositionTeacher, setMousePositionTeacher] = useState({
    x: 0,
    y: 0,
  })
  const [hoveredStudent, setHoveredStudent] = useState(false)
  const [hoveredTeacher, setHoveredTeacher] = useState(false)

  return (
    <div className='mt-2'>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: '2', ease: 'easeIn' }}
        className='text-center text-xl font-bold  
      bg-gradient-to-tr
      from-slate-800
      via-violet-500
      to-zinc-200
        bg-clip-text
        text-transparent'
      >
        Qui êtes vous ?
      </motion.h2>

      <div className='flex gap-6 mt-3'>
        <motion.button
          initial={{ opacity: 0, x: -102, scaleY: 0.2 }}
          animate={{ opacity: 1, x: 0, scaleY: 1 }}
          transition={bounceTransition2}
          className=' relative text-[13px] border-2 border-neutral-200 bg-gradient-to-tl from-[#18012a] to-[#410169] text-white px-3.5 py-2 rounded-full font-medium -tracking-tighter flex items-center gap-1 overflow-hidden cursor-pointer'
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            setMousePositionStudent({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            })
          }}
          onMouseEnter={() => setHoveredStudent(true)}
          onMouseLeave={() => setHoveredStudent(false)}
          onClick={() => navigate('/login-etudiant')}
        >
          <span>Étudiant ?</span>

          {hoveredStudent && (
            <motion.div
              className='absolute inset-0 bg-gradient-to-br from-white/10 via-white to/80 to-transparent blur-xl opacity-0.2'
              style={{
                left: `${mousePositionStudent.x}px`,
                top: `${mousePositionStudent.y}px`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          )}

          <motion.span
            className='text-white'
            initial={{ x: 2, opacity: 0, rotate: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ x: -1, rotate: 360 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <MdKeyboardArrowRight />
          </motion.span>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 102, scaleY: 0.2 }}
          animate={{ opacity: 1, x: 0, scaleY: 1 }}
          transition={bounceTransition1}
          className=' relative text-[13px] border-1 border-neutral-200 bg-gradient-to-tl from-[#410169] to-[#18012a] text-white px-3 py-2 rounded-full font-medium -tracking-tighter flex items-center gap-1 overflow-hidden cursor-pointer'
          whileTap={{ scale: 0.9, rotate: -1 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            setMousePositionTeacher({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            })
          }}
          onMouseEnter={() => setHoveredTeacher(true)}
          onMouseLeave={() => setHoveredTeacher(false)}
          onClick={() => navigate('/login-enseignant')}
        >
          <span>Enseignant ?</span>

          {hoveredTeacher && (
            <motion.div
              className='absolute inset-0 bg-gradient-to-t from-white/10 via-white to/30 to-transparent blur-xl opacity-10'
              style={{
                left: `${mousePositionTeacher.x}px`,
                top: `${mousePositionTeacher.y}px`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          )}

          <motion.span
            className='text-white'
            initial={{ x: 2, opacity: 0, rotate: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ x: -1, rotate: 360 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <MdKeyboardArrowRight />
          </motion.span>
        </motion.button>
      </div>
    </div>
  )
}

export default SelectRole
