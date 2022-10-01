import React, { useEffect, useState } from 'react';
import ModalWindow from '../../../../../components/common/ModalWindow';
import { MessagesContext } from '../../../../../context/All/Messages';
import { IEditModal } from '../../../../../types';
import { ICourseEditParams } from '../../../../../hooks/PagesInAdmin/useCourses';
import { CoursesContext } from '../../../../../context/PagesInAdmin/Courses';
import CoursesInputForm from '../form/create&edit';

const formInitialData: ICourseEditParams = {
  name: '',
  groups: [],
  teacher: 0,
  credits: null,
  semester: 1,
  isExam: false,
  lectureHours: null,
  type: 'Загальна компетентність',
};

export const CourseEdit = ({ modalActive, closeModal, studentId }: IEditModal): JSX.Element => {
  const { addInfo } = MessagesContext();
  const [formData, setFormData] = useState<ICourseEditParams>(formInitialData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { courseEdit, getCourseId } = CoursesContext();

  const handleClose = () => {
    setIsSubmitted(false);
    closeModal();
    setTimeout(() => {
      setFormData(formInitialData);
    }, 200);
  };

  const onSubmit = (e: React.FormEvent | undefined) => {
    e?.preventDefault?.();
    setIsSubmitted(true);
    if (formData.name && formData.credits
      && formData.teacher && formData.semester
      && formData.lectureHours && formData.groups.toString().length >= 1
      && formData.type) {
      courseEdit?.courseEdit(formData, studentId);
    }
  };

  useEffect(() => {
    if (studentId) {
      getCourseId?.getCourseId({ id: `${studentId}` });
    }
  }, [studentId]);

  useEffect(() => {
    if (getCourseId?.data) {
      const data = {
        name: getCourseId?.data.name,
        groups: getCourseId.data.groups.map((item) => item.id),
        teacher: getCourseId?.data?.teacher?.id || null,
        credits: getCourseId.data.credits ? +getCourseId.data.credits : null,
        semester: getCourseId.data.semester,
        isActive: getCourseId.data.isActive,
        isExam: !!getCourseId.data.isExam,
        lectureHours: getCourseId.data.lectureHours ? +getCourseId.data.lectureHours : null,
        type: getCourseId.data.type,
      };

      setFormData(data);
    }
  }, [getCourseId?.data]);

  useEffect(() => {
    if (courseEdit?.data) {
      handleClose();
      addInfo(`Предмет "${formData.name}" успішно відредаговано`);
    }
  }, [courseEdit?.data]);

  return (
    <ModalWindow modalTitle="Редагування предмету" active={modalActive} closeModal={handleClose}>
      <CoursesInputForm
        handleClose={handleClose}
        isSubmitted={isSubmitted}
        setFormData={setFormData}
        formData={formData}
        onSubmit={onSubmit}
      />
    </ModalWindow>
  );
};

export default CourseEdit;
