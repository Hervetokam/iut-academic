import React from 'react'
import { FaUserEdit, FaBell  } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const UsercardStudentDashboard = () => {
    const [openModal, setOpenModal] = useState(null);

    const user = {
      name:'SIWE TOKAM DOMINIQUE HERVE',
      filière: 'G I F I 1 A',
      matricule: '22I01685',
    };

    const icons = [ 
       { icon: <FaUserEdit/>, action: () => setOpenModal('edit') },
       { icon: <IoIosSearch/>,  action: () => setOpenModal('search') },
       { icon: <FaBell/>, action: () => setOpenModal('notifications') },
      ];

    const closeModal = () => setOpenModal(null);

  return (
    <>
    {openModal && (
    <div 
      className="fixed inset-0 bg-zinc-600 opacity-50 z-40"
      onClick={closeModal} />
    )}
      
    {openModal === 'edit' &&(
      <div className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-md bg-white rounded-lg p-6 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Modifier le profil</h2>
        <form className="flex flex-col gap-3">
          <input type="text" defaultValue={user.name} className="p-2 border rounded"/>
          <input type="text" defaultValue={user.filière} className="p-2 border rounded"/>
          <input type="text" defaultValue={user.matricule} className="p-2 border rounded"/>
          <button type="submit" className="bg-blue-500 text-white py-2 rounded mt-2">Enregistrer</button>
        </form>
      </div>
    )}
      
    <AnimatePresence>  
    {openModal === 'search' && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{duration: 0.3, ease: "easeInOut"}}
          className="fixed z-50 top-12 left-1/2 w-[90%] max-w-md transform -translate-x-1/2 shadow-md ">

        <input type="text" placeholder='' className="align-middle text-left text-sm font-semibold text-gray-700 bg-white w-full h-10 p-2 rounded-bl-xl rounded-tr-xl rounded-tl-[2px] rounded-br-[2px] outline-0" style={{paddingLeft:'20px'}}/> 

        <button
          onClick={closeModal}
          className="absolute right-3  translate-y-1/5 text-gray-500 text-xl font-bold cursor-pointer">
          &times;
        </button>
        </motion.div>
    )}
    </AnimatePresence>

    <AnimatePresence>  
    {openModal === 'notifications' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          className="fixed z-50 top-1/2 left-1/2 w-160 h-100 bg-white rounded-2xl p-5 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
      
        <h3 className="text-lg font-bold mb-3 text-center">Notifications</h3>
        <ul className="text-sm text-center">
          <li>📢 Nouveau message de l'administration</li>
          <li>📌 Le planning du semestre est disponible</li>
          <li>✏️ Vos notes ont été mises à jour</li>
        </ul>

        <button
          onClick={closeModal}
          className="absolute right-4  top-2 text-gray-500 text-xl font-bold cursor-pointer">
          &times;
        </button>
      </motion.div>
    )}
    </AnimatePresence> 

    <div className='relative top-8 flex flex-col items-center'>
      <div className=' bg-blue-500 w-17 h-17 rounded-full'>
        <div className="bg-[url('/images/1.png')]"></div>
      </div>

      <div className='relative top-2 flex flex-col justify-center text-center'>
        <p className='font-black text-zinc-800 text-[10.5px]'>{user.name}</p>
        <p className='font-medium text-zinc-700 text-[11.5px]'>{user.filière}</p>
        <p className='font-medium text-zinc-700 text-[11.8px]'>{user.matricule}</p>
      </div>

        <div className="relative flex flex-col gap-5 top-6">
          {icons.map((item, index) =>(
            <button 
            key={index} 
            className="flex flex-col items-center justify-center cursor-pointer rounded-full bg-teal-400 w-8 h-8 text-white shadow-lg shadow-gray-300 "
            onClick={item.action}>{item.icon}</button>
          ))}
        </div>
    </div>
    </>
  )
}

export default UsercardStudentDashboard
