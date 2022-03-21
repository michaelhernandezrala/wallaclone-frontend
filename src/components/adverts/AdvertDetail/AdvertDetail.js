import { useEffect, useState } from 'react';
//import Layout from "../../layout";
import { deleteAdvert, getAdvert } from '../service';
import { Button, Photo } from '../../common';
import Layout from '../../Layout/Layout';
import { Container } from 'react-bootstrap';

function AdvertDetail({ match }) {
  const [advert, setAdvert] = useState();

  useEffect(() => {
    getAdvert(match.params.advertId).then((advert) => {
      setAdvert(advert.result[0]);
    });
  }, [match.params.advertId]);

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await deleteAdvert(advert.id);
    } catch (error) {
      console.error(error);
    }
  };

  const getAdvertDetail = advert !== undefined;

  const photo = getAdvertDetail ? { photo: advert.photo } : {};

  return getAdvertDetail ? (
    <Layout>
      <section className='AdvertDetail'>
        <Container>
          <article key={advert.id}>
            <div className='Photo-div'>
              <Photo {...photo} />
            </div>
            <div className='text-div'>
              <span className='name'>Name: {advert.name}</span>
              <br />
              <span className='price'>Price: {advert.price}€</span>
              <br />
              <span className='sale'>Sale: {advert.sale ? 'Yes' : 'No'}</span>
              <br />
              <span className='tags'>Tags: {advert.tags}</span>
            </div>
          </article>
          <br />
          <div className='delete-button'>
            <p>Are you sure you want to delete the advert?</p>
            <Button onClick={handleDelete}>Delete Advert</Button>
          </div>
        </Container>
      </section>
    </Layout>
  ) : (
    <article title='Advert-title'>
      <div className='advertDetail'>Loading adverts...</div>
    </article>
  );
}

export default AdvertDetail;
