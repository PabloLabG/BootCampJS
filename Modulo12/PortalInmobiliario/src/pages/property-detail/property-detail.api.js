import Axios from "axios";

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyDetailsById = (id) => {
    return Axios.get(url, {params: {id} }, {params: id}).then((result) => Array.isArray(result.data) ? result.data.shift() : null);
};