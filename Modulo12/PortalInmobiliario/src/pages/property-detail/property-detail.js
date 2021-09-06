import { history } from '../../core/router/history';
import { getPropertyDetailsById } from './property-detail.api';
import { mapPropetyFromApiToViewModel } from './property.mappers';
import { setPropertyValues } from './property-detail.helpers';

const params = history.getParams();

let propetyDetailsVM = {
    mainImage: '',
    title: '',
    city:'',
    rooms: '',
    squareMeter: '',
    bathrooms: '',
    price: '',
    notes:'',
    mainFeatures:'',
    equipments: [],
    locationUrl:'',
    images: []
};

getPropertyDetailsById(params.id).then(propetyDetails => {
    propetyDetailsVM = (mapPropetyFromApiToViewModel(propetyDetails));
    console.log(propetyDetailsVM);
    setPropertyValues(propetyDetailsVM);
});
