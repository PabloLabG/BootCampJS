
export const mapPropertyListFromApitoViewModel = (propertyList) => {
    return propertyList.map((property) => mapPropetyFromApiToViewModel(property));
};

const mapPropetyFromApiToViewModel = (property) => {
   return {
        id: property.id,
        title: property.title,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter}m2`,
        notes: `${truncateNotes(property.notes)}`,
        price: `${property.price.toLocaleString('de', {style:'currency', currency:'EUR', useGrouping: true})}`,
        image: Array.isArray(property.images) ? property.images[0] : ''
    };
};

const getRoomWord = (rooms) => { return rooms > 1 ? 'habitaciones' : 'habitación'; };

const truncateNotes = (text) => { return text.length > 240 ? `${text.substring(0, 236)}...` : text; };