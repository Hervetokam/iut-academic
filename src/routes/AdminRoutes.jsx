import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AdminLayout from "../layouts/AdminLayout";


import AdminDashboard from "../admin/Dashboard";

import ManageFiliereNiveau from "../admin/ManageFiliereNiveau";
import GlobalCourses from "../admin/GlobalCourses";
import GlobalAnnoucements from "../admin/GlobalAnnouncements";
import Requetes from "../admin/Requetes";
import Notes from "../admin/Notes";
import Planning from "../admin/Planning";
import Stats from "../admin/Stats";
import ManageAdmis from "../admin/ManageAdmis";


export const AdminRoutes = {
    path: "/iut-academic/conn-admin",
    element: (
        <ProtectedAdminRoute>
            <AdminLayout />
        </ProtectedAdminRoute>
    ),
    children: [
        { path: '', element: <AdminDashboard /> },
        { path: 'admis', element: <ManageAdmis /> },
        { path: 'filieres-niveaux', element: <ManageFiliereNiveau /> },
        { path: 'courses', element: <GlobalCourses /> },
        { path: 'announcements', element: <GlobalAnnoucements /> },
        { path: 'requetes', element: <Requetes/> },
        { path: 'notes', element: <Notes /> },
        { path: 'planning', element: <Planning /> },
        { path: 'stats', element: <Stats /> },
    ]
};

function ProtectedAdminRoute({ children }) {
    const { user } = useAuth();
    if (!user || user.role !=="admin") return <Navigate to="/" />;
}

