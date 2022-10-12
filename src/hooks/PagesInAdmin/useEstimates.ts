import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { FetchSuccess, IPaginateData } from '../../types';
import { AuthContext } from '../../context/All/AuthContext';
import { MessagesContext } from '../../context/All/Messages';

export interface IGradesCreateParams {
  studentId: number;
  courseId: number;
  grade: number;
}

export interface IGradesCreateData {
  id: number;
}

export interface IGetGradesParams {
  orderByColumn?: string;
  orderBy?: string;
  search?: string;
  semester?: number;
  studentId?: number;
  courseId?: number;
  groupId?: number;
  grade?: number;
  page?: number;
  limit?: number;
}

export interface IGetGradesData {
  id: number;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    patronymic: string;
  };
  grades: {
    id: number;
    grade: number;
    course: {
      id: number;
      name: string;
    };
  } [];
  group: {
    id: number;
    name: string;
    orderNumber: string;
  };
}

export interface IUseGradesGet {
  data: IPaginateData<IGetGradesData> | null;
  getEstimateStudent: (params?: IGetGradesParams) => void;
}

export const useGradesGet = (): IUseGradesGet => {
  const { user } = AuthContext();
  const { addErrors } = MessagesContext();
  const [data, setData] = useState<IPaginateData<IGetGradesData> | null>(null);

  const getEstimateStudent = (params?: IGetGradesParams) => {
    axios.get(`${process.env.REACT_APP_API_URL}/grades`, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
      },
      params: {
        orderBy: 'DESC',
        ...params,
      },
    })
      .then((response: AxiosResponse<IPaginateData<IGetGradesData> | null>) => {
        setData(response.data);
      })
      .catch((error) => {
        addErrors(error.response.data.message);
      });
  };

  return { data, getEstimateStudent };
};

interface IGetGradesIdParams {
  id: number;
}

export interface IUseGradesGetId {
  data: IGetGradesData | null;
  getGradesId: (params: IGetGradesIdParams) => void;
}

export const useGradesGetId = (): IUseGradesGetId => {
  const { user } = AuthContext();
  const { addErrors } = MessagesContext();
  const [data, setData] = useState<IGetGradesData | null>(null);

  const getGradesId = (params: IGetGradesIdParams) => {
    axios.get(`${process.env.REACT_APP_API_URL}/grades/student/${params.id}`, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((response: AxiosResponse<IGetGradesData | null>) => {
        setData(response.data);
      })
      .catch((error) => {
        addErrors(error.response.data.message);
      });
  };

  return { data, getGradesId };
};

export interface IGradeEditParams {
  courseId: number;
  grade: number;
  reasonForChange: string;
}

export interface IUseGradesEdit {
  data: FetchSuccess | null;
  gradesEdit: (params: IGradeEditParams, id: number) => void;
}

export const useGradesEdit = (): IUseGradesEdit => {
  const { user } = AuthContext();
  const { addErrors, addInfo } = MessagesContext();
  const [data, setData] = useState<FetchSuccess | null>(null);

  const gradesEdit = (params: IGradeEditParams, id: number) => {
    axios.patch(`${process.env.REACT_APP_API_URL}/grades/student/${id}`, params, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then(() => {
        setData({ success: true });
        addInfo('Оцінку успішно відредаговано.');
      })
      .catch((error) => {
        addErrors(error.response.data.message);
      });
  };

  return { data, gradesEdit };
};

interface IGradesDownloadParams {
  id: number;
}

export interface IUseGradesDownload {
  dataFile: Blob | undefined;
  gradesDownload: (params: IGradesDownloadParams) => void;
}

export const UseGradesDownload = (): IUseGradesDownload => {
  const { user } = AuthContext();
  const { addErrors } = MessagesContext();
  const [dataFile, setDataFile] = useState<Blob | undefined>();

  const gradesDownload = (params: IGradesDownloadParams) => {
    axios.get(`${process.env.REACT_APP_API_URL}/grades/download-grades/student/${params.id}`, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
      },
      responseType: 'arraybuffer',
    })
      .then((response: AxiosResponse<Blob | undefined>) => {
        setDataFile(response.data);
      })
      .catch((error) => {
        addErrors(error.response.data.message);
      });
  };

  return { dataFile, gradesDownload };
};
