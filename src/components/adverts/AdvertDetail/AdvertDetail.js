import { useEffect, useState } from "react";
//import Layout from "../../layout";
import { deleteAdvert, getAdvert } from "../service";
import { Button, Photo } from "../../common";

function AdvertDetail({ match }) {
  const [advert, setAdvert] = useState();

  useEffect(() => {
    getAdvert(match.params.advertId).then((advert) => {
      return setAdvert(advert);
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
    <section className="AdvertDetail">
      <article key={advert.id}>
        <div className="Photo-div">
          <Photo {...photo} />
        </div>
        <div className="text-div">
          <span className="name">Name: {advert.name}</span>
          <br />
          <span className="price">Price: {advert.price}€</span>
          <br />
          <span className="sale">Sale: {advert.sale ? "Yes" : "No"}</span>
          <br />
          <span className="tags">Tags: {advert.tags}</span>
        </div>
      </article>
      <br />
      <div className="delete-button">
        <p>Are you sure you want to delete the advert?</p>
        <Button onClick={handleDelete}>Delete Advert</Button>
      </div>
    </section>
  ): (
    <article title="Advert-title">
      <div className="advertDetail">Loading adverts...</div>
    </article>
  );
  
};

export default AdvertDetail;