import { getPropetyList, getSaleTypeList, getProvinceList } from './property-list.api';
import { mapPropertyListFromApitoViewModel, mapFilterToQueryParams } from './property-list.mappers';
import { addPropertyRows, setOptions, clearPropertyRows } from './property-list.helpers';
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions } from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';

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
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');
    setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
    setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');
});


const loadPropertyList = (propertyList) => {    
    const viewModelPropertyList = mapPropertyListFromApitoViewModel(propertyList);
    addPropertyRows(viewModelPropertyList);
};


let filter = {
    saleTypeId: '',
    provinceId: '',
    minRooms: '',
    minBathRooms: '',
    minPrice: '',
    maxPrice: ''
};

onUpdateField('select-sale-type', (event) => {
    const value = event.target.value;
    filter = {...filter, saleTypeId: value};
});

onUpdateField('select-province', (event) => {
    const value = event.target.value;
    filter = {...filter, provinceId: value};
});

onUpdateField('select-room', (event) => {
    const value = event.target.value;
    filter = {...filter, minRooms: value};
});

onUpdateField('select-bathroom', (event) => {
    const value = event.target.value;
    filter = {...filter, minBathRooms: value};
});

onUpdateField('select-min-price', (event) => {
    const value = event.target.value;
    filter = {...filter, minPrice: value};
});

onUpdateField('select-max-price', (event) => {
    const value = event.target.value;
    filter = {...filter, maxPrice: value};
});



onSubmitForm('search-button', () => {
    console.log({filter});
    const queryParams = mapFilterToQueryParams(filter);
    clearPropertyRows();
    console.log({queryParams});

    getPropetyList(queryParams).then((propertyList) => {
        loadPropertyList(propertyList);
    });
});