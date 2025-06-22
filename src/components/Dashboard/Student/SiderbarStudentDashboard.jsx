import React from 'react'
import { NavLink } from "react-router-dom";
import { cloneElement } from "react";
import { HiMiniHome, HiAcademicCap } from "react-icons/hi2";
import { FaBookOpen, FaBook, FaCalendar } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const SiderbarStudentDashboard = () => {
    const menuItems = [
    { name: 'Accueil', icon: <HiMiniHome />, path: '/' },
    { name: 'Mes cours', icon: <FaBook />, path: '/Courses' },
    { name: 'Mes devoirs', icon: <FaBookOpen />, path: '/Assignments' },
    { name: 'Mes notes', icon: <HiAcademicCap />, path: '/Grades' },
    { name: 'Planing', icon: <FaCalendar />, path: '/TimeTable' },
    { name: 'Aide', icon: <IoMdHelpCircle />, path: '/Support' },
  ];

  return (
     <div className="flex flex-col h-full">
      <div className="items-center justify-center flex-col">
        <header>
          <h1 className="text-center text-[22px] text-shadow-2xs font-semibold">IUT ACADEMIC</h1>
        </header>

        <nav>
          <ul className=" relative top-5 items-center flex flex-col gap-3.5">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    rounded-xl
                    h-10
                    w-36
                    flex
                    items-center
                    gap-3
                    transition-all 
                    duration-200 
                    hover:bg-gray-50
                    no-underline
                    ${
                      isActive
                        ? 'bg-neutral-50 text-black font-medium shadow-sm shadow-gray-200'
                        : 'text-gray-600 hover:text-gray-800'
                    }
                  `}>

                  {({ isActive }) => (
                    <>
                       <span className="ml-4.5">
                        {cloneElement(item.icon, {
                           style: { 
                            color: isActive ? 'white' : '#23d2b2',
                            backgroundColor: isActive ? '#23d2b2' : 'white',
                            borderRadius: '40%', 
                            padding: '6px',
                            fontSize: '21px', 
                            width: '28px',
                            height: '28px',
                            display: 'flex', 
                            justifyContent: 'center',
                            alignItems: 'center', 
                            zIndex: 2,
                            border: isActive ? '1.5px solid ghostwhite ': 'none',
                            transition: 'all 0.5s cubic-bezier(.68, -0.55, .27, 1.55)',
                            boxShadow: isActive ? '0px 0px 15p rgba(35, 210, 178, 0.7)':'0px 5px 20px -7px rgba(135,135,135,.75)',
                            transform: isActive ? 'scale(1.15)' : 'scale(1.05)', 
                          }
                        })}
                      </span>
                      <span className="text-[11.5px]">{item.name}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SiderbarStudentDashboard
