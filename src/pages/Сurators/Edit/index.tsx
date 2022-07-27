import React, { useEffect, useState } from 'react';
import styles from '../index.module.scss';
import ModalWindow from '../../../components/common/ModalWindow';
import ModalControlButtons from '../../../components/common/ModalControlButtons';
import { ICuratorEditParams } from '../../../hooks/useCurators';
import { IEditModal } from '../../../types';
import { useCuratorContext } from '../../../context/curators';
import Input from '../../../components/common/Input';
import { LettersAndNumbersEnUa } from '../../../types/regExp';

const formInitialData: ICuratorEditParams = {
  firstName: '',
  lastName: '',
  patronymic: '',
  email: '',
  role: 'curator',
};

export const CuratorEditModal = ({ modalActive, closeModal, Id }: IEditModal): JSX.Element => {
  const [isSubmitted, setIsSubmited] = useState(false);
  const [formData, setFormData] = useState<ICuratorEditParams>(formInitialData);
  const { curatorEdit, getCuratorId } = useCuratorContext();

  const handleClose = () => {
    setIsSubmited(false);
    setFormData(formInitialData);
    closeModal();
  };

  const onSubmit = (e: React.FormEvent | undefined) => {
    e?.preventDefault?.();
    setIsSubmited(true);

    if (formData.firstName && formData.lastName && formData.patronymic && formData.lastName && formData.email) {
      curatorEdit?.curatorEdit({ ...formData }, Id);
      closeModal();
    }
  };

  useEffect(() => {
    if (Id) {
      getCuratorId?.getCuratorId({ id: `${Id}` });
    }
  }, [Id]);

  useEffect(() => {
    if (getCuratorId?.data) {
      setFormData({
        firstName: getCuratorId?.data.firstName,
        lastName: getCuratorId?.data.lastName,
        patronymic: getCuratorId?.data.patronymic,
        email: getCuratorId?.data.email,
        role: getCuratorId?.data.role,
      });
    }
  }, [getCuratorId?.data]);

  return (
    <ModalWindow modalTitle="Редагування куратора" active={modalActive} closeModal={handleClose}>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          onChange={(event) => {
            setFormData({ ...formData, lastName: event.target.value });
          }}
          value={formData.lastName}
          placeholder="Прізвище"
          label="Прізвище"
          required
          error={isSubmitted && !formData.lastName ? 'Прізвище не введено' : ''}
          pattern={LettersAndNumbersEnUa}
        />
        <Input
          onChange={(event) => {
            setFormData({ ...formData, firstName: event.target.value });
          }}
          value={formData.firstName}
          placeholder="Ім'я"
          label="Ім'я"
          required
          error={isSubmitted && !formData.firstName ? "\"Ім'я\" не введено" : ''}
          pattern={LettersAndNumbersEnUa}
        />
        <Input
          onChange={(event) => {
            setFormData({ ...formData, patronymic: event.target.value });
          }}
          value={formData.patronymic}
          placeholder="По-Батькові"
          label="По-Батькові"
          required
          error={isSubmitted && !formData.patronymic ? 'В поле "По-Батькові" нічого не введено' : ''}
          pattern={LettersAndNumbersEnUa}
        />
        <Input
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
          value={formData.email}
          placeholder="E-Mail"
          label="E-Mail"
          required
          error={isSubmitted && !formData.email ? 'E-Mail не введено' : ''}
          /* pattern={LettersAndNumbersEnUa} */
        />
      </form>
      <ModalControlButtons
        handleClose={closeModal}
        onSubmit={onSubmit}
        cancelButtonText="Відміна"
        mainButtonText="Зберегти"
      />
    </ModalWindow>
  );
};

export default CuratorEditModal;
