import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Api from "../../services/api";

import SearchPage from "./search";

const SearchIndex = (props) => {
  const [queryValue, setQueryValue] = useState(
    props.location === ""
      ? ""
      : props.location.search.split("term=")[1].split("=")[0]
  );

  const [queryLoading, setQueryLoading] = useState(true);
  const [queryResponse, setQueryResponse] = useState({
    total: 0,
    trainers: [],
  });

  const makeQuery = async (query) => {
    setQueryLoading(true);
    history.push(`/search?term=${query}`);

    Api.get("search", {
      params: { term: query },
    }).then((res) => {
      const responseData = res.data.searchAns;
      setQueryLoading(false);
      setQueryResponse({
        total: responseData.length,
        trainers: responseData.map(
          ({ name, role, profileImage, classTitle, user }) => {
            return {
              name,
              role,
              photo: profileImage,
              classTitle,
              id: user,
            };
          }
        ),
      });
    });
  };

  const history = useHistory();
  const handleNewQuery = (query) => {
    setQueryValue(query);
    history.push(`/search?term=${query}`);
    makeQuery(query);
  };

  useEffect(() => {
    makeQuery(queryValue);
  }, []);

  return (
    <SearchPage
      queryValue={queryValue}
      queryLoading={queryLoading}
      handleNewQuery={handleNewQuery}
      queryResponse={queryResponse}
    />
  );
};

export default SearchIndex;
