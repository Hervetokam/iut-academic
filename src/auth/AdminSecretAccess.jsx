import React, { useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const AdminSecretAccess = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    // const allow = sessionStorage.getItem('allowCreatePassword')

    // if (token && !allow) {
    //   navigate('/iut-academic/conn-admin-2025', { replace: true })
    // }

    const check = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/admin/exists')
            const exists = res.data.exists

              if (token || exists) {
        sessionStorage.removeItem('allowCreatePassword')
        navigate('/admin/login', { replace: true })
    }
        } catch (err) {
            console.error('Erreur de vérification du compte :', err)
        }
    }

    check()
  }, [navigate])

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/admin/verify-code',
        {
          code: data.code,
        },
      )

      if (res.status === 200) {
        sessionStorage.setItem('allowCreatePassword', 'true')
        navigate('/admin/create-password')
      }
    } catch (err) {
      alert(' Code invalide.')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4 bg-gradient-to-tr from-gray-100 to-violet-100'>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className='bg-white w-full max-w-xs sm:max-w-sm p-6 sm:p-8 rounded-xl shadow-lg'
      >
        <h2 className='text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6'>
          Accès Administrateur
        </h2>

        <input
          type='text'
          placeholder='Code secret'
          {...register('code', { required: 'Code requis' })}
          className='w-full py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-violet-500'
        />
        {errors.code && (
          <p className='text-red-500 text-sm mb-2'>{errors.code.message}</p>
        )}

        <button
          type='submit'
          className='w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300'
        >
          Valider le code
        </button>

        <button
        type='button'
        onClick={() => navigate('/')}
        className='mt-4 text-sm text-600 hover:underline block mx-auto'
        >
            Retour à l'accueil
        </button>
      </motion.form>
    </div>
  )
}

export default AdminSecretAccess
