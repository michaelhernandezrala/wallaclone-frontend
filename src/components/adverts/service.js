import client from '../../api/client';

const advertBaseUrl = '/api';

export const createAdvert = advert => {
    const url = `${advertBaseUrl}/new-advert`;
    return client.post(url, advert);
};

export const getAdvert = (advertId) => {
    const url = `${advertBaseUrl}/adverts/${advertId}`;
    return client.get(url);
};

export const deleteAdvert = (advertId) => {
    const url= `${advertBaseUrl}/${advertId}`
    return client.delete(url)
}
