import { history } from '../../core/router/history';
import { getPropertyDetailsById, getAllEquipments, insertContact } from './property-detail.api';
import { mapPropetyFromApiToViewModel } from './property.mappers';
import { setPropertyValues } from './property-detail.helpers';
import { onSubmitForm, onUpdateField, onSetFormErrors } from '../../common/helpers';
import { formValidation } from './property-details.validation';

const params = history.getParams();

let propetyDetailsVM = {
    mainImage: '',
    title: '',
    city:'',
    rooms: 0,
    squareMeter: 0,
    bathrooms: 0,
    price: 0,
    notes:'',
    mainFeatures:'',
    equipments: [],
    locationUrl:'',
    images: []
};

let contact = {
    propertyId: '',
    email: '',
    message: ''
};

Promise.all([ getAllEquipments(), getPropertyDetailsById(params.id)
]).then(([equipments, propetyDetails]) => {

    let propetyDetailsVM = (mapPropetyFromApiToViewModel(propetyDetails, equipments));
    
    setPropertyValues(propetyDetailsVM);
});


onUpdateField('email', (event) => {
    contact = { ...contact, email: event.target.value };
});

onUpdateField('message', (event) => {
    contact = { ...contact, message: event.target.value };
});

const onSave = () => { return insertContact(contact); }

onSubmitForm('contact-button', () => {
    
     formValidation.validateForm(contact).then((result) => {
        contact = {...contact, propertyId: params.id};
        onSetFormErrors(result);

        if (result.succeeded) {
            onSave().then(() => {
                alert('Nos pondremos en contacto con usted, gracias.');
                history.back();
            });
        }    
     });
});