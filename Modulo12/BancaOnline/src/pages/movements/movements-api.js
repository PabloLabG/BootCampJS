import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`; 

export const getAllMovements = () => 
{
    return Axios.get(`${url}`).then((response) => {
        return response.data;
    });
}
