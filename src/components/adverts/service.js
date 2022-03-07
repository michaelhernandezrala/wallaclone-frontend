import client from '../../api/client';

const advertBaseUrl = '/api';

export const createAdvert = advert => {
    const url = `${advertBaseUrl}/adverts`;
    return client.post(url, advert);
};

// export const deleteAdvert = async (id='') =>{
//     const url= `/api/v1/adverts/${id}`
//     return cliente.delete(url)
// }
