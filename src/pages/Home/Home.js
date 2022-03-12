import React, { useEffect, useState } from 'react';

// Components
import Layout from '../../components/Layout/Layout';
import Advert from '../../components/Advert/Advert';
import Searcher from '../../components/Searcher/Searcher';

// CSS
import './Home.css';

// Bootstrap
import { Container } from 'react-bootstrap';
import { getLatestAdverts } from '../../components/adverts/service';

function Home() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts.results));
  }, []);

  return (
    <Layout title='Home'>
      <main className='home'>
        <Container>
          <section className='home__searcher'></section>
          <section className='home__adverts'>
            <ul className='home__adverts--list'>
              {adverts.map((advert) => (
                <li className='home__adverts--list-item' key={advert.advertId}>
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
