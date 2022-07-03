export type StudentOrder = {
  id: string;
  name: string;
  price: string;
  status: string;
  interest: string;
  due: string;
}

export type StudentOrders = {
  paid: StudentOrder[];
  due: StudentOrder[];
  outstanding: StudentOrder[];
}

export type StudentInfo = {
  id: string;
  first_name: string;
  last_name: string;
  cohort: string;
  interest: string;
  due: string;
  school: School;
}

export type School = {
  id: string;
  name: string;
  logo: string;
}