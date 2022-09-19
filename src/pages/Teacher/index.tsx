import React, { useEffect, useState } from 'react';
import TitlePage from '../../components/TitlePage';
import styles from './index.module.scss';
import Layout from '../../loyout/Layout';
import { ITableHeader } from '../../components/common/table/TableHeader';
import { ITableRowItem } from '../../components/common/table/TableBody';
import { initialPagination, Pagination } from '../../types';
import { TeacherRatingEdit } from './RatingEdit';
import TeacherRatingHistory from './RatingHistory';
import { useTeacherPageContext } from '../../context/pageTeacher';
import { IGetPageTeacherData, IGetPageTeacherParams } from '../../hooks/usePageTeacher';
import { useEstimatesContext } from '../../context/estimates';
import { useDeviceContext } from '../../context/TypeDevice';
import ItemButtons from './components/ItemButtons';
import DesktopTable from '../../components/common/table/DesktopTable';
import ListElementInTeacherPage from './components/ListElementInTeacherPage';
import PageFilter from './components/PageFilter';
import TableFilter from '../../components/common/table/TableFilter';
import PhoneFilter from './PhoneFilter';

const dataHeader: ITableHeader[] = [
  { id: 1, label: 'ПІБ' },
  { id: 2, label: 'Група' },
  { id: 3, label: 'Предмет' },
  { id: 4, label: 'Оцінка' },
  { id: 5, label: 'Дії' },
];

export interface IIsActiveModalState {
  edit: number;
  history: number;
  filter: boolean;
}

const allCloseModalWindow: IIsActiveModalState = {
  edit: 0,
  history: 0,
  filter: false,
};

interface Filter {
  student: string;
  group: string;
  course: string;
}

export interface IParams {
  filter: Filter;
  pagination: Pagination;
}

const TeacherPage = (): JSX.Element => {
  const { teacherDataGet, teacherEditRating } = useTeacherPageContext();
  const { gradesEdit } = useEstimatesContext();
  const { isDesktop, isTablet, isPhone } = useDeviceContext();

  const [params, setParams] = useState<IParams>({
    filter: { student: '', group: '', course: '' },
    pagination: initialPagination,
  });
  const [isActiveModal, setIsActiveModal] = useState(allCloseModalWindow);
  const [dataRow, setDataRow] = useState<ITableRowItem[]>([]);
  const [formData, setFormData] = useState<IGetPageTeacherData[]>();

  const closeModal = () => {
    setIsActiveModal(allCloseModalWindow);
  };

  useEffect(() => {
    const query: IGetPageTeacherParams = {};

    if (params.filter.student) query.studentId = +params.filter.student;
    if (params.filter.group) query.groupId = +params.filter.group;
    if (params.filter.course) query.courseId = +params.filter.course;

    if (params.pagination.currentPage) query.page = params.pagination.currentPage;
    if (params.pagination.itemsPerPage) query.limit = params.pagination.itemsPerPage;

    teacherDataGet?.pageTeacherGet(query);
  }, [params.filter.group,
    teacherEditRating?.data,
    gradesEdit?.data,
    params.filter.course,
    params.filter.student,
    params.pagination.currentPage,
    params.pagination.itemsPerPage]);

  useEffect(() => {
    if (teacherDataGet?.data) {
      setParams({ ...params, pagination: teacherDataGet.data.meta });
      setDataRow(teacherDataGet?.data?.items.map((item: IGetPageTeacherData) => ({
        list: [
          {
            id: 1,
            label:
              `${item.student.user.lastName}
              ${item.student.user.firstName}
              ${item.student.user.patronymic}`,
          },
          { id: 2, label: item.student.group.name },
          { id: 3, label: item.course.name },
          { id: 4, label: item.grade },
          {
            id: 5,
            label: (
              <ItemButtons isActiveModal={isActiveModal} setIsActiveModal={setIsActiveModal} itemId={item.id} />
            ),
          },
        ],
        key: item.id,
      })));
      setFormData(teacherDataGet.data.items);
    }
  }, [teacherDataGet?.data]);

  return (
    <Layout>
      <div>
        {isDesktop && (
          <>
            <TitlePage title="Студенти" />
            <DesktopTable
              params={params}
              setParams={setParams}
              dataHeader={dataHeader}
              dataRow={dataRow}
              className={styles.columns}
            />
          </>
        )}
        {isTablet && (
          <>
            <TitlePage title="Студенти" />
            <TableFilter filter={<PageFilter value={params} setParams={setParams} />} />
            <ListElementInTeacherPage
              formData={formData}
              isActiveModal={isActiveModal}
              setIsActiveModal={setIsActiveModal}
            />
          </>
        )}
        {isPhone && (
          <>
            <TitlePage title="Студенти" setIsActiveModal={setIsActiveModal} isActiveModal={isActiveModal.filter} />

            <ListElementInTeacherPage
              formData={formData}
              isActiveModal={isActiveModal}
              setIsActiveModal={setIsActiveModal}
            />
            <PhoneFilter
              isActive={isActiveModal.filter}
              params={params}
              title="Фільтр"
              setParams={setParams}
              closeModal={closeModal}
            />
          </>
        )}
      </div>
      {/* {isActiveModal.filter && ( */}
      {/* */}
      {/* )} */}

      {!!isActiveModal.edit && (
        <TeacherRatingEdit
          modalActive
          studentId={isActiveModal.edit}
          closeModal={closeModal}
        />
      )}
      {!!isActiveModal.history && (
        <TeacherRatingHistory
          modalActive
          Id={isActiveModal.history}
          closeModal={closeModal}
        />
      )}
    </Layout>
  );
};

TeacherPage.defaultProps = {
  filter: '',
};

export default TeacherPage;
