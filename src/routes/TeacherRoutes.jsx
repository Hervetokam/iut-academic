import React from "react";

import TeacherLayout from "../layouts/TeacherLayout";

import TeacherDashboard from "../teacher/Dashboard";
import UploadCourse from "../teacher/UploadCourse";
import ManageCourses from "../teacher/ManageCourses";
import TeacherAnnoucements from "../teacher/Announcements";
import StudentList from "../teacher/StudentList";
import TeacherProfile from "../teacher/Profile";
import ProtectedRoute from "../components/ProtectedRoute";


export const TeacherRoutes = {
    path: "/teacher",
    element: (
        <ProtectedRoute role="teacher">
            <TeacherLayout />
        </ProtectedRoute>
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




