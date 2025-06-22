import React, { useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const CreatePasswordAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  useEffect(() => {
    const allow = sessionStorage.getItem('allowCreatePassword')
    const token = localStorage.getItem('adminToken')

    if (!allow && !token) {
      navigate('/admin/login', { replace: true })
    }

    // if (token && !allow) {
    //   navigate('/iut-academic/conn-admin-2025', { replace: true })
    // }

    if (token) {
      sessionStorage.removeItem('allowCreatePassword')
      navigate('/iut-academic/conn-admin-2025', { replace: true })
    }

    if (!token && !allow) {
      navigate('/admin/login', { replace: true })
    }
  }, [navigate])

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/admin/create-account',
        {
          nom: data.nom,
          motDePasse: data.password,
          ConfirmerMotDePasse: data.confirmPassword,
        },
      )

      if (res.status === 201) {
        localStorage.setItem('adminToken', res.data.token)
        sessionStorage.removeItem('allowCreatePassword')
        navigate('/iut-academic/conn-admin-2025')
      }
    } catch (err) {
      const msg =
        err.response?.data?.message || 'Erreur lors de la création du compte'
      alert(` ${msg} `)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4 bg-gradient-to-tr from-gray-100 to-violet-100'>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='bg-white w-full max-w-xs sm:max-w-sm p-6 sm:p-8 rounded-xl shadow-lg'
      >
        <h2 className='text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6'>
          Création du compte Admin
        </h2>

        <input
          type='text'
          placeholder='Nom complet'
          {...register('nom', { required: 'Nom requis' })}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-violet-500'
        />
        {errors.nom && (
          <p className='text-red-500 text-sm'>{errors.nom.message}</p>
        )}

        <input
          type='password'
          placeholder='Mot de passe'
          {...register('password', {
            required: 'Mot de passe requis',
            minLength: { value: 6, message: 'Minimum 6 caractères' },
          })}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-violet-500'
        />
        {errors.password && (
          <p className='text-red-500 text-sm'>{errors.password.message}</p>
        )}

        <input
          type='password'
          placeholder='Confirmer mot de passe'
          {...register('confirmPassword', {
            required: 'Confirmation requise',
          })}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-violet-500'
        />
        {errors.confirmPassword && (
          <p className='text-red-500 text-sm'>
            {errors.confirmPassword.message}
          </p>
        )}

        <button
          type='submit'
          className='w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300'
        >
          Créer le compte
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

export default CreatePasswordAdmin
