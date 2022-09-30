import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import GroupProvider from '../context/PagesInAdmin/Groups';
import Group from '../pages/Admin/Groups';
import StudentsProvider from '../context/PagesInAdmin/Students';
import Students from '../pages/Admin/Students';
import CuratorsProvider from '../context/PagesInAdmin/Curators';
import Curators from '../pages/Admin/Сurators';
import TeachersProvider from '../context/PagesInAdmin/Teachers';
import Teachers from '../pages/Admin/Teachers';
import CoursesProvider from '../context/PagesInAdmin/Courses';
import Courses from '../pages/Admin/Courses';
import EstimatesProvider from '../context/PagesInAdmin/Estimates';
import Estimates from '../pages/Admin/Estimates';
import VotingAdmin from '../pages/Admin/Votings';
import AdministratorsProvider from '../context/PagesInAdmin/Administators';
import Administrators from '../pages/Admin/Admins';
import IndPlan from '../pages/Student/IndividualPlan/index';
import VotingStudents from '../pages/Student/Voting';
import TeacherPage from '../pages/Teacher';
import Curator from '../pages/Сurator';
import ChangePassword from '../pages/All/ChangePassword';
import Login from '../pages/All/Login';
import PasRec from '../pages/All/PasswordRecovery';
import styles from '../pages/All/PasswordRecovery/index.module.scss';
import leftArrow from '../images/login/leftArrow.svg';
import { AuthContext } from '../context/All/AuthContext';
import AdminVotingsProvider from '../context/PagesInAdmin/Votings';
import StudentProvider from '../context/PagesInStudent/Student';
import TeacherProvider from '../context/PageInTeacher/Teacher';

const AppRoutes = () => {
  const { user } = AuthContext();

  return (
    <Routes>
      {user?.role === 'admin' && (
        <>
          <Route
            path="/"
            element={<GroupProvider><Group /></GroupProvider>}
          />
          <Route
            path="/students"
            element={<StudentsProvider><Students /></StudentsProvider>}
          />
          <Route
            path="/curators"
            element={<CuratorsProvider><Curators /></CuratorsProvider>}
          />
          <Route
            path="/teachers"
            element={<TeachersProvider><Teachers /></TeachersProvider>}
          />
          <Route
            path="/courses"
            element={<CoursesProvider><Courses /></CoursesProvider>}
          />
          <Route
            path="/estimates"
            element={(<EstimatesProvider><Estimates /></EstimatesProvider>)}
          />
          <Route
            path="/voting-admin"
            element={<AdminVotingsProvider><VotingAdmin /></AdminVotingsProvider>}
          />
          <Route
            path="/administrators"
            element={<AdministratorsProvider><Administrators /></AdministratorsProvider>}
          />
        </>
      )}
      {user?.role === 'student' && (
      <>
        <Route index element={<IndPlan />} />
        <Route path="/voting-students" element={<StudentProvider><VotingStudents /></StudentProvider>} />
      </>
      )}
      {user?.role === 'teacher' && (
      <Route index element={<TeacherProvider><TeacherPage /></TeacherProvider>} />
      )}
      {user?.role === 'curator' && (
        <Route index element={<Curator />} />
      )}
      {user && (
        <Route path="/change-password" element={<ChangePassword />} />
      )}
      {!user && (
        <>
          <Route
            path="/password-recovery"
            element={(
              <PasRec>
                <Link to="/" className={styles.passwordRecovery__link}>
                  <img src={leftArrow} alt="left arrow" />
                  Повернутись до входу
                </Link>
              </PasRec>
            )}
          />
          <Route index element={(<Login />)} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      )}

    </Routes>
  );
};

export default AppRoutes;
