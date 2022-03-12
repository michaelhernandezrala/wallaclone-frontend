import client from '../../api/client';

const advertBaseUrl = '/api';

export const createAdvert = (advert) => {
  const url = `${advertBaseUrl}/new-advert`;
  return client.post(url, advert);
};

export const getAdvert = (advertId) => {
  const url = `${advertBaseUrl}/adverts/${advertId}`;
  return client.get(url);
};

export const deleteAdvert = (advertId) => {
  const url = `${advertBaseUrl}/${advertId}`;
  return client.delete(url);
};

export const getLatestAdverts = () => {
  const url = `${advertBaseUrl}/adverts?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
  return client.get(url);
};
