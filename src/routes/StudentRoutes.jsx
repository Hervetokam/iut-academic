import React from "react";

import StudentLayout from "../layouts/StudentLayout";

import StudentDashboard from "../student/Dashboard";
import Courses from "../student/Courses";
import Grades from "../student/Grades";
import Schedule from "../student/Schedule";
import Annoucements from "../student/Announcements";
import Profile from "../student/Profile";
import Support from "../student/Support";
import ProtectedRoute from "../components/ProtectedRoute";


export const StudentRoutes = {
    path: "/student",
    element: (
        <ProtectedRoute role="student">
            <StudentLayout />
        </ProtectedRoute>
    ),  
    children: [
        { path:'dashboard', element: <StudentDashboard /> },
        { path:'courses', element: <Courses /> },
        { path:'grades', element: <Grades /> },
        { path:'schedule', element: <Schedule /> },
        { path:'announcements', element: <Annoucements /> },
        { path:'profile', element: <Profile /> },
        { path:'support', element: <Support /> },
    ],
};

