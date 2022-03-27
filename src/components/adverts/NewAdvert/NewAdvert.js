import './NewAdvert.css';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Button } from '../../common';
//import { Loader } from '../utils/Loader' // TODO
import { createAdvert } from '../service';
import Layout from '../../Layout/Layout';
import { Container } from 'react-bootstrap';

function NewAdvert() {
  const history = useHistory();
  const [value, setValue] = useState({
    name: '',
    sale: false,
    price: 0,
    tags: [],
    photo: '',
  });

  const [error, setError] = useState(null);
  const [CreateAdvertId, setCreatedAdvertId] = useState('');
  //const [loader, setLoader] = useState(false) // TODO

  const handleChange = (event) => {
    setValue((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (value.sale === 'true') {
        value.sale = true;
      } else {
        value.sale = false;
      }
      const createdAdvert = await createAdvert(value);
      setCreatedAdvertId(createdAdvert.id);
      history.push('/');
    } catch (error) {
      if (error.status === 401) {
        return history.push('/login');
      }
      setError(error);
    }
  };

  if (CreateAdvertId) {
    return <Redirect to={`/advert/${CreateAdvertId}`} />;
  }

  return (
    <Layout>
      <main className='newAdvPage'>
        <section className='newAdvPage__content'>
          <h1 className='newAdvPage__title'>Create advert</h1>
          <form className='form' onSubmit={handleSubmit}>
            <div className='newAdvPage__form--control'>
              <label htmlFor='Name'>Name</label>
              <input
                required
                autoFocus
                className='newAdvert__input'
                placeholder='Name of product'
                name='name'
                type='text'
                value={value.name}
                onChange={handleChange}
              />
            </div>
            <div className='newAdvPage__form--control--sale '>
              <label htmlFor='Sale'>To Sell</label>
              <input
                type='radio'
                name='sale'
                className='newAdvert__input'
                value={true}
                onChange={handleChange}
                id='sale'
              />
              &nbsp;&nbsp;
              <label for='compro'>To buy</label>
              <input
                type='radio'
                name='sale'
                className='newAdvert__input'
                value={false}
                onChange={handleChange}
                id='venta'
              />
            </div>
            <div className='newAdvPage__form--control'>
              <label htmlFor='Price'>Price</label>
              <input
                required
                name='price'
                placeholder='Price'
                className='newAdvert__input'
                type='number'
                value={value.price}
                onChange={handleChange}
              />
            </div>

            <div className='newAdvPage__form--control '>
              <label htmlFor='Tags'> Choose tags </label>
              <select
                required
                name='tags'
                id='tags'
                size='4'
                multiple={true}
                value={[value.tags]}
                onChange={handleChange}
                className='tags-selection'
              >
                <option name='lifestyle' value='lifestyle'>
                  Lifestyle
                </option>
                <option name='work' value='work'>
                  Work
                </option>
                <option name='motor' value='motor'>
                  Motor
                </option>
                <option name='mobile' value='mobile'>
                  Mobile
                </option>
              </select>
            </div>
            <div className='newAdvPage__form--control newAdvert__photo'>
              <label className='photo-label' htmlFor='photo'>
                Upload a photo
              </label>
              <input
                name='photo'
                type='file'
                className='newAdvert__input'
                onChange={handleChange}
              />
            </div>
            <Button
              className='submit-button'
              type='submit'
              disabled={
                !value.name || !value.sale || !value.price || !value.tags
              }
            >
              Create
            </Button>
          </form>
        </section>
      </main>
    </Layout>
  );
}

export default NewAdvert;
