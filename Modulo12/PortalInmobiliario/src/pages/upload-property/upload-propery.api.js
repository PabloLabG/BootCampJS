import Axios from "axios";

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;
export const getProvinceList = () => {
    return Axios.get(provinceListUrl).then((response) => response.data);
};

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;
export const getSaleTypeList = () => {
    return Axios.get(saleTypeListUrl).then((response) => response.data);
}

const urlEquipment = `${process.env.BASE_API_URL}/equipments`;
export const getAllEquipments = () => {
    return Axios.get(urlEquipment).then((response) => response.data);
};

const urlProperty = `${process.env.BASE_API_URL}/properties`;
export const insertProperty = (property) => {
    return Axios.post(urlProperty, property).then((response) => response.data);
};