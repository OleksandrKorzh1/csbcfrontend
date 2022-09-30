import React, { useEffect, useState } from 'react';
import ModalWindow from '../../../../../components/common/ModalWindow';
import { CuratorContext } from '../../../../../context/PagesInAdmin/Curators';
import { ICreateModal } from '../../../../../types';

import { Email } from '../../../../../types/regExp';
import { MessagesContext } from '../../../../../context/All/Messages';
import { IUserCreateParams } from '../../../../../hooks/All/useUser';
import { DeviceContext } from '../../../../../context/All/DeviceType';
import CuratorsForm from '../form/create&edit';

const formInitialData: IUserCreateParams = {
  firstName: '',
  lastName: '',
  patronymic: '',
  email: '',
  role: 'curator',
};

export const CuratorCreateModal = ({ modalActive, closeModal }: ICreateModal): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<IUserCreateParams>(formInitialData);

  const { curatorCreate } = CuratorContext();
  const { addInfo } = MessagesContext();
  const { isPhone, isDesktop, isTablet } = DeviceContext();

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
    if (formData.firstName && formData.lastName && formData.patronymic && Email.test(formData.email)) {
      curatorCreate?.createUser(formData);
    }
  };

  useEffect(() => {
    if (curatorCreate?.data) {
      handleClose();
      addInfo(`${formData.lastName} ${formData.firstName} ${formData.patronymic} доданий у список`);
    }
  }, [curatorCreate?.data]);

  return (
    <ModalWindow modalTitle="Створення куратора" active={modalActive} closeModal={handleClose}>
      <CuratorsForm
        handleClose={handleClose}
        isSubmitted={isSubmitted}
        setFormData={setFormData}
        formData={formData}
        onSubmit={onSubmit}
      />
    </ModalWindow>
  );
};

export default CuratorCreateModal;
