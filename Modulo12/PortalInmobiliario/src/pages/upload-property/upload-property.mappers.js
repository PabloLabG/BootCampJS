export const mapPropertyFromVmToApi = (property) => {

    return {
        title: property.title,
        notes: property.notes,
        email: property.email,
        phone: property.phone,
        price: property.price,
        saleTypeIds: property.salesTypes,
        address: property.address,
        city: property.city,
        provinceId: property.province,
        squareMeter: property.squareMeter,
        rooms: property.rooms,
        bathrooms: property.bathrooms,
        locationUrl: property.locationUrl,
        equipmentIds: property.mainFeatures,        
        images: property.images,
        mainFeatures: property.mainFeatures
    };
};