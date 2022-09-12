import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import GroupProvider from '../context/group';
import Group from '../pages/Group';
import StudentsProvider from '../context/students';
import Students from '../pages/Students';
import CuratorsProvider from '../context/curators';
import Curators from '../pages/Сurators';
import TeachersProvider from '../context/teachers';
import Teachers from '../pages/Teachers';
import CourseProvider from '../context/course';
import Courses from '../pages/Courses';
import EstimatesProvider from '../context/estimates';
import Estimates from '../pages/Estimates';
import VotingAdmin from '../pages/VotingAdmin';
import AdministratorsProvider from '../context/administators';
import Administrators from '../pages/Administrators';
import IndPlan from '../pages/IndividualPlan';
import VotingStudents from '../pages/VotingStudents';
import TeacherPage from '../pages/Teacher';
import Curator from '../pages/Сurator';
import ChangePassword from '../pages/ChangePassword';
import Login from '../pages/Login';
import PasRec from '../pages/PasswordRecovery';
import styles from '../pages/PasswordRecovery/index.module.scss';
import leftArrow from '../images/login/leftArrow.svg';
import { useAuthContext } from '../context/useAuthContext';
import VotingAdminProvider from '../context/voting';
import StudentProvider from '../context/student';
import TeacherPageProvider from '../context/pageTeacher';

const AppRoutes = () => {
  const { user } = useAuthContext();

  return (
    <Routes>
      {user?.role === 'admin' && (
        <>
          <Route
            index
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
            element={<CourseProvider><Courses /></CourseProvider>}
          />
          <Route
            path="/estimates"
            element={(<EstimatesProvider><Estimates /></EstimatesProvider>)}
          />
          <Route
            path="/voting-admin"
            element={<VotingAdminProvider><VotingAdmin /></VotingAdminProvider>}
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
        <Route index element={<TeacherPageProvider><TeacherPage /></TeacherPageProvider>} />
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
