import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`; 

export const getAllMovements = () => 
{
    return Axios.get(`${url}`).then((response) => {
        return response.data;
    });
};

export const getMovementsById = (id) => {
    return Axios.get(url, {params : {accountId: id}}).then((response) => {
        return response.data;
    });
};
