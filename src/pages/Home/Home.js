import React from 'react';

// Components
import Layout from '../../components/Layout/Layout';
import Advert from '../../components/Advert/Advert';
import Searcher from '../../components/Searcher/Searcher';

// CSS
import './Home.css';

// Bootstrap
import { Container } from 'react-bootstrap';

const adverts = [
  {
    id: '1',
    createdAt: '2022-02-19T12:33:31.000Z',
    name: 'prueba',
    sale: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
    price: 11111,
    tags: ['lifestyle', 'mobile', 'motor', 'work'],
    photo:
      'https://c8.alamy.com/compes/ey0hca/coche-deportivo-rojo-generico-ey0hca.jpg',
  },
  {
    id: '2',
    createdAt: '2022-02-19T12:33:31.000Z',
    name: 'prueba',
    sale: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 11111,
    tags: ['lifestyle', 'mobile', 'motor', 'work'],
    photo:
      'https://c8.alamy.com/compes/ey0hca/coche-deportivo-rojo-generico-ey0hca.jpg',
  },
  {
    id: '3',
    createdAt: '2022-02-19T12:33:31.000Z',
    name: 'prueba',
    sale: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 11111,
    tags: ['lifestyle', 'mobile', 'motor', 'work'],
    photo:
      'https://c8.alamy.com/compes/ey0hca/coche-deportivo-rojo-generico-ey0hca.jpg',
  },
  {
    id: '4',
    createdAt: '2022-02-19T12:33:31.000Z',
    name: 'prueba',
    sale: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 11111,
    tags: ['lifestyle', 'mobile', 'motor', 'work'],
    photo:
      'https://c8.alamy.com/compes/ey0hca/coche-deportivo-rojo-generico-ey0hca.jpg',
  },
  {
    id: '5',
    createdAt: '2022-02-19T12:33:31.000Z',
    name: 'prueba',
    sale: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 11111,
    tags: ['lifestyle', 'mobile', 'motor', 'work'],
    photo:
      'https://c8.alamy.com/compes/ey0hca/coche-deportivo-rojo-generico-ey0hca.jpg',
  },
  {
    id: '6',
    createdAt: '2022-02-19T12:33:31.000Z',
    name: 'prueba',
    sale: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 11111,
    tags: ['lifestyle', 'mobile', 'motor', 'work'],
    photo:
      'https://c8.alamy.com/compes/ey0hca/coche-deportivo-rojo-generico-ey0hca.jpg',
  },
  {
    id: '7',
    createdAt: '2022-02-19T12:33:31.000Z',
    name: 'prueba',
    sale: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 11111,
    tags: ['lifestyle', 'mobile', 'motor', 'work'],
    photo:
      'https://c8.alamy.com/compes/ey0hca/coche-deportivo-rojo-generico-ey0hca.jpg',
  },
  {
    id: '8',
    createdAt: '2022-02-19T12:33:31.000Z',
    name: 'prueba',
    sale: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 11111,
    tags: ['lifestyle', 'mobile', 'motor', 'work'],
    photo:
      'https://c8.alamy.com/compes/ey0hca/coche-deportivo-rojo-generico-ey0hca.jpg',
  },
  {
    id: '9',
    createdAt: '2022-02-19T12:33:31.000Z',
    name: 'prueba',
    sale: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 11111,
    tags: ['lifestyle', 'mobile', 'motor', 'work'],
    photo:
      'https://c8.alamy.com/compes/ey0hca/coche-deportivo-rojo-generico-ey0hca.jpg',
  },
  {
    id: '10',
    createdAt: '2022-02-19T12:33:31.000Z',
    name: 'prueba',
    sale: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 11111,
    tags: ['lifestyle', 'mobile', 'motor', 'work'],
    photo:
      'https://c8.alamy.com/compes/ey0hca/coche-deportivo-rojo-generico-ey0hca.jpg',
  },
];

function Home() {
  return (
    <Layout title='Home'>
      <main className='home'>
        <Container>
          <section className='home__searcher'></section>
          <section className='home__adverts'>
            <ul className='home__adverts--list'>
              {adverts.map((advert) => (
                <li className='home__adverts--list-item' key={advert.id}>
                  <Advert {...advert} />
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </main>
    </Layout>
  );
}

export default Home;
