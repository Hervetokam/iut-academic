import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import TeacherLayout from "../layouts/TeacherLayout";


import TeacherDashboard from "../teacher/Dashboard";
import UploadCourse from "../teacher/UploadCourse";
import ManageCourses from "../teacher/ManageCourses";
import TeacherAnnoucements from "../teacher/Announcements";
import StudentList from "../teacher/StudentList";
import TeacherProfile from "../teacher/Profile";


export const TeacherRoutes = {
    path: "/teacher",
    element: (
        <ProtectedTeacherRoute>
            <TeacherLayout />
        </ProtectedTeacherRoute>
    ),    
    children: [
        { path:'', element: <TeacherDashboard /> },
        { path:'upload-course', element: <UploadCourse /> },
        { path:'manage-course', element: <ManageCourses /> },
        { path:'announcement', element: <TeacherAnnoucements /> },
        { path:'student-list', element: <StudentList /> },
        { path:'profile', element: <TeacherProfile /> },  
    ],
};

function ProtectedTeacherRoute({ children }) {
    const { user } = useAuth();
    if (!user || user.role !=="teacher") return <Navigate to="/" />;
}

