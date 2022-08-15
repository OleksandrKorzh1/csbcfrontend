import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import TableBody, { ITableRowItem } from './TableBody';
import TableFilter from './TableFilter';
import TableHeader, { ITableHeader } from './TableHeader';
import { Pagination } from '../../../types';
import TableFooter from './TableFooter';

interface ITable {
  dataHeader: ITableHeader[];
  dataRow: ITableRowItem[];
  gridColumns: string;
  filter?: JSX.Element;
  isScroll?: boolean;
  columScrollHorizontal?: number;
  pagination?: Pagination;
  onPaginationChange?: (pagination: Pagination) => void;
}

const Table = ({
  dataHeader,
  dataRow,
  gridColumns,
  filter,
  pagination,
  onPaginationChange,
  isScroll,
  columScrollHorizontal,
}: ITable): JSX.Element => (
  <>
    <TableFilter filter={filter} />
    <div className={styles.table}>
      <div className={clsx(isScroll && styles.table__scroll)}>
        <TableHeader
          dataHeader={dataHeader}
          gridColumns={gridColumns}
          isScroll={isScroll}
          columScrollHorizontal={columScrollHorizontal}
        />
        {dataRow.length
          ? (
            <TableBody
              columScrollHorizontal={columScrollHorizontal}
              isScroll={isScroll}
              dataRow={dataRow}
              gridColumns={gridColumns}
            />
          )
          : <div className={styles.table__not_found}>Нічого не знайдено</div>}
      </div>
      {!!dataRow.length && pagination && onPaginationChange
        ? <TableFooter pagination={pagination} onPaginationChange={onPaginationChange} />
        : ''}
    </div>
  </>
);

Table.defaultProps = {
  pagination: [],
  onPaginationChange: (e: any) => undefined,
  filter: <div />,
  isScroll: false,
  columScrollHorizontal: 0,
};

export default Table;
