import Axios from "axios";

const url = `${process.env.BASE_API_URL}/transfer`;

export const insertTransfer = (transfer) => 
{ 
    return Axios.post(url, transfer).then((response) => { return response.data; });
};
