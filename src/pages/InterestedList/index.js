import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Api from "../../services/api";
import LoadingPage from "../../components/loadingPage";

import InterestedList from "./interestedList";

const InterestedListIndex = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [queryResponse, setQueryResponse] = useState([]);

  useEffect(() => {
    const makeQuery = async () => {
      try {
        await Api.get("user/trainer/requests").then((res) => {
          setQueryResponse(res.data);
          setLoading(false);
        });
      } catch (err) {
        alert("Erro no servidor, tente novamente mais tarde.");
        history.push("/");
      }
    };

    makeQuery();
  }, [history]);

  return loading ? (
    <LoadingPage />
  ) : (
    <InterestedList contacts={queryResponse} />
  );
};

export default InterestedListIndex;
