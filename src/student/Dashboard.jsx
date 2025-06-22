import React, { useEffect, useState } from 'react';
import { getStudentInfo } from '../services/studentService';

const Dashboard = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStudentInfo();
        setStudent(data);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'étudiant", error);
      }
    };
    fetchData();
  }, []);

  if (!student) return <p>Chargement...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bienvenue {student.nom_complet}</h2>
      <p>Matricule : {student.matricule}</p>
      <p>Filière : {student.filiere}</p>
      <p>Niveau : {student.niveau}</p>
    </div>
  );
};

export default Dashboard;
