import { getPropetyList, getSaleTypeList, getProvinceList } from './property-list.api';
import { mapPropertyListFromApitoViewModel } from './property-list.mappers';
import { addPropertyRows, setOptions } from './property-list.helpers';

Promise.all([
    getPropetyList(),
    getSaleTypeList(),
    getProvinceList()
]).then(([propertyList, saleTypeList, provinceList]) => 
{
    // ]).then((resultList) => { 
    //     const propertyList = resultList[0];
    //     const saleTypeList = resultList[1];
    //     const provinceList = resultList[2];
    loadPropertyList(propertyList);

    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provinceList, 'select-province', '¿Dónde?');
});


const loadPropertyList = (propertyList) => {    
    const viewModelPropertyList = mapPropertyListFromApitoViewModel(propertyList);
    addPropertyRows(viewModelPropertyList);
};