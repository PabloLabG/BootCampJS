
export const mapPropetyFromApiToViewModel = (property, equipments) => {
    return {
        id: property.id,
        mainImage: Array.isArray(property.images) ? property.images[0] : '',
        title: property.title,
        city: property.city,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter}m2`,        
        bathrooms: `${property.bathrooms} ${getBathRoomWord(property.bathrooms)}`,
        price: `${property.price.toLocaleString('de', {style:'currency', currency:'EUR', useGrouping: true })}`,
        notes: property.notes,
        mainFeatures: Array.isArray(property.mainFeatures) ? property.mainFeatures : [],
        equipments: Array.isArray(property.equipmentIds) ? property.equipmentIds.map(id => getEquipmentNameById(id, equipments)) : [],
        locationUrl: property.locationUrl,
        images: Array.isArray(property.images) ? property.images : []
    };
};


const getRoomWord = (rooms) => { return rooms > 1 ? 'habitaciones' : 'habitación'; };

const getBathRoomWord = (rooms) => { return rooms > 1 ? 'baños' : 'baño'; };

const getEquipmentNameById = (equipmentId, equipments) => { 
    let _equipmentName = '';
    
    let _resultFilter = equipments.filter(x => x.id === equipmentId);
    
    if (_resultFilter) {      
        _equipmentName = _resultFilter[0].name;
    }

    return _equipmentName;
}
