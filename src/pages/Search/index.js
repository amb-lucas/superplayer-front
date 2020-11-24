import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Api from "../../services/api";

import SearchPage from "./search";

const queryResponseSample = {
  total: 2,
  trainers: [
    {
      name: "Yodami",
      title: "Coach de League of Legends",
      photo: process.env.PUBLIC_URL + "/sample-images/yodami.png",
      description: "League of Legends Jungle, para todos os níveis",
      id: "1",
    },
    {
      name: "Zilde Souto",
      title: "Jungle da UFPE Virtus",
      photo: process.env.PUBLIC_URL + "/sample-images/zilde.png",
      description: "Aprenda a gankar  com o Top 1 Rek'Sai BR",
      id: "2",
    },
    {
      name: "Yodami",
      title: "Coach de League of Legends",
      photo: process.env.PUBLIC_URL + "/sample-images/yodami.png",
      description: "League of Legends Jungle, para todos os níveis",
      id: "3",
    },
    {
      name: "Zilde Souto",
      title: "Jungle da UFPE Virtus",
      photo: process.env.PUBLIC_URL + "/sample-images/zilde.png",
      description: "Aprenda a gankar  com o Top 1 Rek'Sai BR",
      id: "4",
    },
  ],
};

const SearchIndex = (props) => {
  const [queryValue, setQueryValue] = useState(
    props.location === ""
      ? ""
      : props.location.search.split("term=")[1].split("=")[0]
  );

  const [queryResponse, setQueryResponse] = useState(queryResponseSample);
  const makeQuery = async (query) => {
    Api.get("search", {
      params: { term: query },
    }).then((res) => {
      const responseData = res.data.searchAns;

      console.log(responseData);

      setQueryResponse({
        total: responseData.length,
        trainers: responseData.map(({ name, role, classTitle, user }) => {
          return {
            name,
            role,
            photo: process.env.PUBLIC_URL + "/sample-images/yodami.png",
            classTitle,
            id: user,
          };
        }),
      });

      history.push(`/search?term=${query}`);
    });
  };

  const history = useHistory();
  const handleNewQuery = (query) => {
    setQueryValue(query);
    history.push(`/search?term=${query}`);
    makeQuery(query);
  };

  return (
    <SearchPage
      queryValue={queryValue}
      handleNewQuery={handleNewQuery}
      queryResponse={queryResponse}
    />
  );
};

export default SearchIndex;
