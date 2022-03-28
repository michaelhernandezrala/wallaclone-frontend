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

export const getLatestAdverts = (skip, limit, sorter) => {
  console.log('skip', skip);
  console.log('limit', limit);
  let sort = 'updatedAt';
  let order = 'desc';
  switch (sorter) {
    case 'a-z':
      sort = 'name';
      order = 'asc';
      break;
    case 'z-a':
      sort = 'name';
      order = 'desc';
      break;
    case 'cheap':
      sort = 'price';
      order = 'asc';
      break;
    case 'expensive':
      sort = 'price';
      order = 'desc';
      break;
    default:
      sort = 'updatedAt';
      order = 'desc';
      break;
  }
  const url = `${advertBaseUrl}/adverts?_expand=user&_embed=likes&_skip=${skip}&_limit=${limit}&_sort=${sort}&_order=${order}`;
  return client.get(url);
};

export const getTags = () => {
	const url = `${advertBaseUrl}/adverts/tags`;
	return client.get(url);
};
