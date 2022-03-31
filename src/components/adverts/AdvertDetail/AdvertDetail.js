import { useEffect, useState } from 'react';
//import Layout from "../../layout";
import { deleteAdvert, getAdvert } from '../service';
import { Button, Photo } from '../../common';
import Layout from '../../Layout/Layout';
import { Container } from 'react-bootstrap';
import './AdvertDetail.css';

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
      // await deleteAdvert(advert.id);
      await deleteAdvert(match.params.advertId);
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
          <article key={advert.id} className='AdvertDetail__content'>
            <div className='Photo-div'>
              <img src={advert.photo} />
            </div>
            <div className='text-div'>
              <span className='name'>
                <strong>Name:</strong> {advert.name}
              </span>
              <br />
              <span className='price'>
                <strong>Price:</strong> {advert.price}€
              </span>
              <br />
              <span className='sale'>
                <strong>Sale:</strong> {advert.sale ? 'Yes' : 'No'}
              </span>
              <br />
              <span className='tags'>
                <strong>Tags:</strong> {advert.tags}
              </span>
            </div>
            <br />
            <div className='delete-button'>
              <p>Are you sure you want to delete the advert?</p>
              <Button onClick={handleDelete}>Delete Advert</Button>
            </div>
          </article>
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
