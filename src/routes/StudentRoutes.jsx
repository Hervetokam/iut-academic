import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { StudentLayout } from "../layouts/StudentLayout";


import StudentDashboard from "../student/Dashboard";
import Courses from "../student/Courses";
import Grades from "../student/Grades";
import Schedule from "../student/Schedule";
import Annoucements from "../student/Announcements";
import Profile from "../student/Profile";
import Support from "../student/Profile";


export const StudentRoutes = {
    path: "/student",
    element: (
        <ProtectedAdminRoute>
            <StudentLayout />
        </ProtectedAdminRoute>
    ),  
    children: [
        { path:'', element: <StudentDashboard /> },
        { path:'courses', element: <Courses /> },
        { path:'grades', element: <Grades /> },
        { path:'schedule', element: <Schedule /> },
        { path:'announcements', element: <Annoucements /> },
        { path:'profile', element: <Profile /> },
        { path:'support', element: <Support /> },
    ],
};

function ProtectedTeacherRoute({ children }) {
    const { user } = useAuth();
    if (!user || user.role !=="student") return <Navigate to="/" />;
}
