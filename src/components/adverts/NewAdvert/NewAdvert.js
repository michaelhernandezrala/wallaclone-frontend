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
    sale: '',
    price: '',
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
      <div className='newAdvPage'>
        <Container>
          <h1>Create your new advert here</h1>
          <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='Name'>What product do you want to advertise?</label>
            <input
              required
              autoFocus
              className='newAdvert-name'
              placeholder='Name of product'
              name='name'
              type='text'
              value={value.name}
              onChange={handleChange}
            />
            <div className='sale'>
              <label for='sale'>To sell</label>
              <input
                name='sale'
                className='sale'
                type='radio'
                value={true}
                onChange={handleChange}
                id='sale'
              />
              &nbsp;&nbsp;
              <label for='compro'>To buy</label>
              <input
                name='sale'
                className='buy'
                type='radio'
                value={false}
                onChange={handleChange}
                id='venta'
              />
            </div>
            <label htmlFor='Price'>Price</label>
            <input
              required
              name='price'
              placeholder='Price'
              className='newAdvert-price'
              type='number'
              value={value.price}
              onChange={handleChange}
            />
            <div className='tags-selection'>
              <label htmlFor='tags'> Choose tags </label>
              <select
                required
                name='tags'
                id='tags'
                size='4'
                multiple={true}
                value={[value.tags]}
                onChange={handleChange}
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
            <div>
              <label className='photo-label' htmlFor='photo'>
                Upload a photo
              </label>
              <input
                className='photo-input'
                name='photo'
                type='file'
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
        </Container>
      </div>
    </Layout>
  );
}

export default NewAdvert;
