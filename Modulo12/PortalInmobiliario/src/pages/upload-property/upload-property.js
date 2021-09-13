import { setOptionList, setCheckboxList, onAddFeature, onRemoveFeature, formatDeleteFeatureButtonId } from './upload-property.helpers';
import { formValidation } from './upload-property.validation';
import { onUpdateField, onSubmitForm, onSetFormErrors, onAddFile } from '../../common/helpers';
import { getProvinceList, getSaleTypeList, getAllEquipments, insertProperty } from './upload-propery.api';
import { mapPropertyFromVmToApi } from './upload-property.mappers';

let propertyAdd = {
        title: '',
        notes: '',
        email: '',
        phone: '',
        price: 0,
        salesTypes: [],        
        address: '',
        city: '',
        province:'',
        squareMeter: 0,
        rooms: 0,
        bathrooms: 0,
        locationUrl: '',
        mainFeatures: [],
        equipments: [],
        images: []
};

getProvinceList().then((provinceList) => {
        setOptionList(provinceList, 'province');
});

getSaleTypeList().then((saleTypes) => {
        setCheckboxList(saleTypes, 'saleTypes');
        setTypesEvents(saleTypes);
});

getAllEquipments().then((equipments) => {
        setCheckboxList(equipments, 'equipments');
        setEquipmentsEvents(equipments, propertyAdd.equipments);
});

const setTypesEvents = (saleTypes) => {
    saleTypes.forEach(saleType => 
    {
        onUpdateField(`${saleType.id}-${saleType.name}`, (event) => {
            if(event.target.checked) {
                propertyAdd = {...propertyAdd, salesTypes: [...propertyAdd.salesTypes, event.target.value]};
            }
            else {
                const _index = propertyAdd.salesTypes.indexOf(event.target.value);
                if (_index > -1) {
                    propertyAdd.salesTypes.splice(_index, 1);
                }
            }
        });
    });
};

const setEquipmentsEvents = (equipments) => {
        equipments.forEach(equipment => 
        {
            onUpdateField(`${equipment.id}-${equipment.name}`, (event) => {
                if(event.target.checked) {                                            
                    propertyAdd = {...propertyAdd, equipments: [...propertyAdd.equipments, event.target.value]};                    
                }
                else {                        
                    const _index = propertyAdd.equipments.indexOf(event.target.value);
                    if (_index > -1) {
                       propertyAdd.equipments.splice(_index, 1);
                    }
                }                
            });
        });
    };
    

onUpdateField('title', (event) => {
        propertyAdd = {...propertyAdd, title: event.target.value};
});

onUpdateField('notes', (event) => {
        propertyAdd = {...propertyAdd, notes: event.target.value};
});

onUpdateField('email', (event) => {
        propertyAdd = {...propertyAdd, email: event.target.value};
});

onUpdateField('phone', (event) => {
        propertyAdd = {...propertyAdd, phone: event.target.value};
});

onUpdateField('price', (event) => {
        propertyAdd = {...propertyAdd, price: parseInt(event.target.value)};
});

onUpdateField('address', (event) => {
        propertyAdd = {...propertyAdd, address: event.target.value};
});

onUpdateField('city', (event) => {
        propertyAdd = {...propertyAdd, city: event.target.value};
});

onUpdateField('province', (event) => {
        propertyAdd = {...propertyAdd, province: event.target.value};
});

onUpdateField('squareMeter', (event) => {
        propertyAdd = {...propertyAdd, squareMeter: parseInt(event.target.value)};
});

onUpdateField('rooms', (event) => {
        propertyAdd = {...propertyAdd, rooms: parseInt(event.target.value)};
});

onUpdateField('bathrooms', (event) => {
        propertyAdd = {...propertyAdd, bathrooms: parseInt(event.target.value)};
});

onUpdateField('locationUrl', (event) => {
        propertyAdd = {...propertyAdd, locationUrl: event.target.value};
});

onAddFile('add-image', (image) => propertyAdd = {...propertyAdd, images: [...propertyAdd.images, image]});

onSubmitForm('insert-feature-button', () => {
       const valueFeature = document.getElementById('newFeature').value;

        if (valueFeature) {
            propertyAdd = {...propertyAdd, mainFeatures: [...propertyAdd.mainFeatures, valueFeature]};
            onAddFeature(valueFeature);

            const idDelete = formatDeleteFeatureButtonId(valueFeature);
            onSubmitForm(idDelete, () => deleteFeature(valueFeature));            
        }
});

const deleteFeature = (feature) => {
    const _index = propertyAdd.mainFeatures.indexOf(feature);
    if (_index > -1) {
        propertyAdd.equipments.splice(_index, 1);
        onRemoveFeature(feature);
    }
};


onSubmitForm('save-button', () => {
        
        formValidation.validateForm(propertyAdd).then((result) => {               
                onSetFormErrors(result);
        
                if (result.succeeded) {
                    onSave().then(() => {
                        alert('Propiedad dada de alta correctamente.');
                        history.back();
                    });
                }    
        });
});

const onSave = () => { return insertProperty(mapPropertyFromVmToApi(propertyAdd)); }
