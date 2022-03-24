import React, { useEffect, useState } from 'react';

// Components
import Layout from '../../components/Layout/Layout';
import Advert from '../../components/Advert/Advert';
import Searcher from '../../components/Searcher/Searcher';
import Sorter from '../../components/Sorter/Sorter';
// CSS
import './Home.css';

// Bootstrap
import { Container } from 'react-bootstrap';
import { getLatestAdverts } from '../../components/adverts/service';
import Skipper from '../../components/Skipper/Skipper';

const EmptyListFiltered = () => (
  <div>
    <div>
      <p>No hay resultados</p>
    </div>
  </div>
);

function Home() {
  const [adverts, setAdverts] = useState([]);
  const [filter, setfilter] = useState({
    name: '',
    price: [0, 10000],
    sale: 'Ambos',
    tags: [],
  });
  const [sorter, setSorter] = useState('None');
  const [pagination, setPagination] = useState({
    skip: 0,
    limit: 10,
  });

  const handlePagination = (e) => {
    if (e.target.id === 'next') {
      setPagination({
        skip: pagination.skip + 10,
        limit: pagination.limit + 10,
      });
    } else {
      if (pagination.skip === 0) {
        setPagination({
          skip: 0,
          limit: 10,
        });
      } else {
        setPagination({
          skip: pagination.skip - 10,
          limit: pagination.limit - 10,
        });
      }
    }
  };

  useEffect(() => {
    getLatestAdverts(pagination.skip, pagination.limit, sorter).then(
      (response) => {
        let tagsFiltered = [];
        if (filter.tags.length !== 0) {
          response.results.forEach((element) => {
            for (const tag of filter.tags) {
              if (
                element.tags.includes(tag) &&
                !tagsFiltered.includes(element)
              ) {
                tagsFiltered.push(element);
              }
            }
          });
        } else {
          tagsFiltered = response.results;
        }

        setAdverts(tagsFiltered);

        let finalfiltersAdverts = [];
        for (const ad of tagsFiltered) {
          if (
            ad.name.includes(filter.name) &&
            ad.price <= filter.price[1] &&
            ad.price >= filter.price[0] &&
            (filter.sale.sale === 'Ambos' ||
              filter.sale.sale === ad.sale ||
              filter.sale === 'Ambos')
          ) {
            finalfiltersAdverts.push(ad);
          }
        }
        setAdverts(finalfiltersAdverts);
      }
    );
  }, [filter, sorter, pagination]);

  return (
    <Layout>
      <main className='home'>
        <Container>
          <section className='home__filters'>
            <h1>What are you looking for?</h1>
            <div className='home__filters--content'>
              <p className='total__adverts'>
                <strong>Total adverts</strong> {adverts.length}
              </p>
              <Searcher setfilter={setfilter} />
              <Sorter setSorter={setSorter} sorter={sorter} />
              <Skipper
                handlePagination={handlePagination}
                pagination={pagination}
                count={adverts.length}
              />
            </div>
          </section>
          <section className='home__adverts'>
            {adverts && adverts.length ? (
              <ul className='home__adverts--list'>
                {adverts.map((advert) => (
                  <li
                    className='home__adverts--list-item'
                    key={advert.advertId}
                  >
                    <Advert {...advert} />
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyListFiltered />
            )}
          </section>
        </Container>
      </main>
    </Layout>
  );
}

export default Home;
