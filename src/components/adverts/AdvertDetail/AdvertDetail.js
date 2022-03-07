import React from 'react';
import { Redirect, useLocation, useParams } from 'react-router';
import { useCallback } from 'react/cjs/react.development';
import AdvertDetail from '.';
import Layout from '../../layout';
//import { getAdvert } from '../service';


const useGetData = getData => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getData().then(data => setData(data));

    return () => {
      console.log(getData);
    };
  }, [getData]);

  return data;
};

const useAdvert = advertId => {
  const fixedGetAdvert = useCallback(() => getAdvert(advertId), [advertId]);
  const advert = useGetData(fixedGetAdvert);
  return advert;
};

function TweetPageF() {
  const { advertId } = useParams();
  const location = useLocation();
  console.log(location);
  // const advert = useAdvert(match.params.advertId);
  // const advert = useGetData(() => getAdvert(match.params.advertId));
  const advert = useAdvert(advertId);

  return (
    <Layout title="Advert detail">
      <span>Advert id {advertId}</span>
      <div>{JSON.stringify(advert)}</div>
    </Layout>
  );
}

// React.useEffect(() => {
//   getAdvert(advertId)
//     .then(advert => setTweet(advert)
//     .catch(error => setError(error));
//   return () => {
//      // cancel API call
//   }
// }, [match.params.advertId]);

class AdvertPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advert: null,
      error: null,
    };
  }

  handleGetAdvert = advertId => {
    getAdvert(advertId)
      .then(advert => this.setState({ advert }))
      .catch(error => this.setState({ error }));
  };

  componentDidMount() {
    const { match } = this.props;
    this.handleGetAdvert(match.params.advertId);
  }

  componentDidUpdate(prevProps, prevState) {
    const { match } = this.props;
    if (prevProps.match.params.advertId !== match.params.advertId) {
      this.handleGetAdvert(match.params.advertId);
    }
  }

  componentWillUnmount() { }

  render() {
    const { advert, error } = this.state;

    if (error?.status === 404) {
      return <Redirect to="/404" />;
    }

    return (
      <Layout title="Advert detail">
        <div>{JSON.stringify(advert)}</div>
      </Layout>
    );
  }
}

export default AdvertDetail;

