import React, { useEffect } from "react";

import { getTags } from "../service";
import { CheckboxTags } from "../../common";

function SelectionTags(props) {
  const [tags, setTags] = React.useState([]);
  useEffect(() => {
    getTags().then((tags) => {
      setTags(tags);
    });
  }, []);
  return <CheckboxTags options={tags} {...props} />;
}

export default SelectionTags;
