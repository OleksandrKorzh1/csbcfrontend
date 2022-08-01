import React, { useEffect, useState } from 'react';
import { ITableHeader } from '../../components/common/table/TableHeader';
import { ITableRowItem } from '../../components/common/table/TableBody';
import { initialPagination, Pagination } from '../../types';
import { useTeachersContext } from '../../context/teachers';
import { IGetTeacherData, IGetTeacherParams } from '../../hooks/useTeachers';
import Layout from '../../loyout/Layout';
import Button from '../../components/common/Button';
import SelectGroup from '../../components/common/Select/SelectGroup';
import SelectCourse from '../../components/common/Select/SelectCourse';
import TitlePage from '../../components/TitlePage';
import Table from '../../components/common/table';
import TeachersDelete from './modal/TeachersDelete';
import TeachersCreate from './modal/TeachersCreate';
import SelectTeacher from '../../components/common/Select/SelectTeacher';
import styles from './index.module.scss';
import edit from '../../images/table/edit.svg';
import del from '../../images/table/delete.svg';
import TeachersEdit from './modal/TeachersEdit';

const dataHeader: ITableHeader[] = [
  { id: 1, label: 'ПІП' },
  { id: 2, label: 'Предмет' },
  { id: 3, label: 'Група' },
  { id: 4, label: 'E-Mail' },
  { id: 5, label: 'Дії' },
];

interface IIsActiveTeacherModalState {
  create: boolean;
  edit: number;
  delete: number;
}

const allCloseModalWindow: IIsActiveTeacherModalState = {
  create: false,
  edit: 0,
  delete: 0,
};

interface Filter {
  teacherId: number | null;
  group: number | null;
  course: number | null;
}

interface Params {
  filter: Filter;
  pagination: Pagination;
}

const Teachers = (): JSX.Element => {
  const { getTeacher } = useTeachersContext();
  const [isActiveModal, setIsActiveModal] = useState<IIsActiveTeacherModalState>(allCloseModalWindow);
  const [dataRow, setDataRow] = useState<ITableRowItem[]>([]);
  const [params, setParams] = useState<Params>({
    filter: { teacherId: 0, group: null, course: null },
    pagination: initialPagination,
  });

  const closeModal = () => {
    setIsActiveModal(allCloseModalWindow);
  };

  const tableRows = (arrTableRows: IGetTeacherData[]) => (
    arrTableRows.length ? arrTableRows.map((item) => {
      const arr: { subject: string[]; group: string[]; } = { subject: [], group: [] };

      item.courses.forEach((subject) => {
        arr.subject.push(subject.name);
        let srt = '';

        subject.groups.forEach((group) => {
          srt += ` ${group.name}`;
        });
        arr.group.push(srt);
      });

      return {
        list: [
          { id: 1, label: `${item.lastName} ${item.firstName} ${item.patronymic}` },
          { id: 2, label: arr.subject },
          { id: 3, label: arr.group },
          { id: 4, label: item.email },
          {
            id: 5,
            label: (
              <div className={styles.actions}>
                <Button
                  isImg
                  type="button"
                  className={styles.actions__button_edit}
                  onClick={() => {
                    setIsActiveModal({ ...allCloseModalWindow, edit: item.id });
                  }}
                >
                  <img src={edit} alt="edit" />
                </Button>
                <Button
                  isImg
                  type="button"
                  className={styles.actions__button_delete}
                  onClick={() => {
                    setIsActiveModal({ ...allCloseModalWindow, delete: item.id });
                  }}
                >
                  <img src={del} alt="delete" />
                </Button>
              </div>
            ),
          },
        ],
        key: item.id,
      };
    }) : []);

  useEffect(() => {
    getTeacher?.getTeacher({ groups: [], courses: [] });
  }, []);

  useEffect(() => {
    const query: IGetTeacherParams = { groups: [], courses: [] };

    if (params.filter.teacherId) query.teacherId = params.filter.teacherId;
    if (params.filter.group) query.groups.push(params.filter.group);
    if (params.filter.course) query.courses.push(params.filter.course);
    if (params.pagination.currentPage) query.page = params.pagination.currentPage;
    if (params.pagination.itemsPerPage) query.limit = params.pagination.itemsPerPage;

    getTeacher?.getTeacher(query);
  }, [
    params.filter.teacherId,
    params.filter.group,
    params.filter.course,
    params.pagination.currentPage,
    params.pagination.itemsPerPage,
  ]);

  useEffect(() => {
    if (getTeacher?.data) {
      setParams({ ...params, pagination: getTeacher.data.meta });
      setDataRow(tableRows(getTeacher?.data ? getTeacher?.data.items : []));
    }
  }, [getTeacher?.data]);

  return (
    <Layout>
      <div className={styles.students}>
        <TitlePage
          title="Викладачі"
          action={(
            <Button
              nameClass="primary"
              size="large"
              className={styles.actions}
              onClick={() => {
                setIsActiveModal({ ...allCloseModalWindow, create: true });
              }}
            >
              Створити
            </Button>
          )}
        />
        <Table
          filter={(
            <>
              <SelectTeacher
                type="filter"
                placeholder="ПІБ"
                required
                isClearable
                isSearchable
                value={params.filter.teacherId}
                onChange={(value) => setParams({ ...params, filter: { ...params.filter, teacherId: +value } })}
              />
              <SelectGroup
                type="filter"
                placeholder="Група"
                required
                isClearable
                isSearchable
                value={params.filter.group}
                onChange={(value) => setParams({
                  ...params,
                  filter: {
                    ...params.filter,
                    group: +value,
                    teacherId: null,
                  },
                })}
              />
              <SelectCourse
                type="filter"
                placeholder="Предмет"
                required
                isClearable
                isSearchable
                value={params.filter.course}
                onChange={(value) => setParams({
                  ...params,
                  filter: {
                    ...params.filter,
                    course: +value,
                    teacherId: null,
                  },
                })}
              />
            </>
          )}
          dataHeader={dataHeader}
          gridColumns={styles.columns}
          dataRow={dataRow}
          pagination={initialPagination}
          onPaginationChange={(newPagination) => setParams({ ...params, pagination: newPagination })}
        />
        <TeachersCreate modalActive={isActiveModal.create} closeModal={closeModal} />
        <TeachersEdit modalActive={!!isActiveModal.edit} closeModal={closeModal} id={isActiveModal.edit} />
        <TeachersDelete modalActive={!!isActiveModal.delete} closeModal={closeModal} id={isActiveModal.delete} />
      </div>
    </Layout>
  );
};

export default Teachers;
