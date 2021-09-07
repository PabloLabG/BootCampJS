import Axios from "axios";

const url = `${process.env.BASE_API_URL}/properties`;
const urlEquipment = `${process.env.BASE_API_URL}/equipments`;
const urlContact = `${process.env.BASE_API_URL}/contact`;

export const getPropertyDetailsById = (id) => {
   return Axios.get(url, {params: {id} }).then((result) => Array.isArray(result.data) ? result.data.shift() : null);    
};

export const getAllEquipments = () => {
    return Axios.get(urlEquipment).then((result) => result.data);
};

export const insertContact = (contact) => {
    return Axios.post(urlContact, contact).then((result) => result.data);
};