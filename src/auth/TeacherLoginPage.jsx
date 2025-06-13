import React from 'react';

import LandingNavbar from '../components/Landing/LandingNavbar';
import LandingFooter from '../components/Landing/LandingFooter';
import TeacherLogin from './TeacherLogin';

const TeacherLoginPage = () => {
  return (
    <div className='min-h-screen flex flex-col bg-white'>
      <LandingNavbar/>
      <main className='flex-1 px-6 md:px-20 py-10'>
        <h2 className='text-3xl font-bold mb-6 text-blue-600'>Connexion Enseignant</h2>
        <TeacherLogin/>
      </main>
      <LandingFooter/>
    </div>
  );
};

export default TeacherLoginPage;
