
export const mapPropetyFromApiToViewModel = (property) => {
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
        mainFeatures: property.mainFeatures,
        equipments: property.equipmentIds,
        locationUrl: property.locationUrl,
        images: property.images
    };
};


const getRoomWord = (rooms) => { return rooms > 1 ? 'habitaciones' : 'habitación'; };

const getBathRoomWord = (rooms) => { return rooms > 1 ? 'baños' : 'baño'; };
