import  Axios  from 'axios';

const url = `${process.env.BASE_API_URL}/account`;

export const insertAccount = (account) => 
{ 
    return Axios.post(`${url}/${account.id}`, account).then((response) => {
        return response.data;
    });
};

export const getAccount = (id) => 
{
    return Axios.get(`${url}/${id}`).then((response) => {
        return response.data;
    });
};

export const updateAccount = (account) => 
{
    return Axios.put(`${url}/${account.id}`, account).then((response) => {
        return response.data;
    });
};