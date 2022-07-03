import axios from 'axios';

const config = {
  headers:{
    hash: 'OcJn4jYChW',
  }
};

export const getStudentOrders = async () => {
  const response = await axios.get('http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/orders/', config);
  return response.data;
}

export const getStudentInfo = async () => {
  const response = await axios.get('http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/', config);
  return response.data;
}