import React from "react";
import defaultPhoto from "../../images/nophoto.jpg";

const Photo = ({ photo }) => {
  return photo === null ? (
    <img className="photo" src={defaultPhoto} alt="" height="100" width="100" />
  ) : (
    <div>
      <img
        className="photo"
        src={process.env.REACT_APP_API_BASE_URL + photo}
        alt=""
        width="100"
        height="100"
      />
    </div>
  );
};

export default Photo;