import { adminRoutes } from "./AdminRoutes";
import { teacherRoutes } from "./TeacherRoutes";
import { studentRoutes } from "./StudentRoutes";
import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { NotFound } from "../pages/NotFound";

const AppRouter = createBrowserRouter ([
    { path: '/', element: <LandingPage />},
    adminRoutes,
    teacherRoutes,
    studentRoutes,
    { path: '*', element: <NotFound /> }
])