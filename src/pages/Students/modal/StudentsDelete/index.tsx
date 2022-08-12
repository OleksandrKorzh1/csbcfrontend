import React, { useEffect, useState } from 'react';
import ModalWindow from '../../../../components/common/ModalWindow';
import Input from '../../../../components/common/Input';
import ModalControlButtons from '../../../../components/common/ModalControlButtons';
import { useStudentsContext } from '../../../../context/students';
import stylesStud from '../../../pagesStyle.module.scss';

interface IStudentsDeleteModal {
  modalActive: boolean;
  closeModal: () => void;
  studentId: number;
}

const formInitialData = {
  deletedOrderNumber: '',
};

export const StudentsDeleteModal = ({ modalActive, closeModal, studentId }: IStudentsDeleteModal): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(formInitialData);
  const { studentDelete, getStudentById } = useStudentsContext();

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData(formInitialData);
    closeModal();
  };

  const onSubmit = (e: React.FormEvent | undefined) => {
    e?.preventDefault?.();
    setIsSubmitted(true);

    if (`${formData.deletedOrderNumber}`.length >= 6
      && `${formData.deletedOrderNumber}`.length <= 20) {
      studentDelete?.studentDelete(studentId, `${getStudentById?.data?.user.lastName}
      ${getStudentById?.data?.user.firstName}
      ${getStudentById?.data?.user.patronymic}`);
    }
  };

  useEffect(() => {
    handleClose();
  }, [studentDelete?.data]);

  useEffect(() => {
    if (studentId) {
      getStudentById?.getStudentId({ id: `${studentId}` });
    }
  }, [studentId]);

  return (
    <ModalWindow modalTitle="Видалення студента" active={modalActive} closeModal={handleClose}>
      <form className={stylesStud.form} onSubmit={onSubmit}>
        <h3 className={stylesStud.subtitle}>Для підтвердження видалення введіть номер наказу.</h3>
        <Input
          onChange={(event) => {
            setFormData({ ...formData, deletedOrderNumber: event.target.value });
          }}
          value={formData.deletedOrderNumber.slice(0, 8)}
          error={isSubmitted && (`${formData.deletedOrderNumber}`.length < 6
          || `${formData.deletedOrderNumber}`.length > 20
            ? 'Номер наказу повинен містити не менше 6-ти символів.' : '')}
          placeholder="Номер наказу"
          label="Номер наказу"
          required
        />
      </form>
      <ModalControlButtons
        handleClose={handleClose}
        onSubmit={onSubmit}
        cancelButtonText="Відміна"
        mainButtonText="Видалити"
      />
    </ModalWindow>
  );
};

export default StudentsDeleteModal;
