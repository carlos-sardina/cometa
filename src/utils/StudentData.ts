import { getStudentOrders, getStudentInfo } from '../services';
import { StudentInfo, StudentOrder } from '../types';

export const getStudentOrdersData = async () => {
  const response: StudentOrder[] = await getStudentOrders();

  const paid: StudentOrder[] = response.filter((order) => order.status === 'PAID');
  const due: StudentOrder[] = response.filter((order) => order.status === 'DUE');
  const outstanding: StudentOrder[] = response.filter((order) => order.status === 'OUTSTANDING');

  return { paid, due, outstanding };
};

export const getStudentInfoData = async () => {
  const response: StudentInfo = await getStudentInfo();
  return response;
};
