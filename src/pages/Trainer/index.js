import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Api from "../../services/api";

import LoadingPage from "../../components/loadingPage";
import TrainerPage from "./trainer";

const TrainerPageIndex = (props) => {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [queryResponse, setQueryResponse] = useState({});

  const { id } = props.match.params;
  useEffect(() => {
    const makeQuery = async () => {
      try {
        await Api.get(`trainer/${id}`).then((res) => {
          setQueryResponse(res.data);
          setLoading(false);
        });
      } catch (err) {
        alert("Erro no servidor, tente novamente mais tarde.");
        history.push("/");
      }
    };

    makeQuery();
  }, [id, history]);

  const name = loading ? "" : queryResponse.trainerProfile.name;
  const title = loading ? "" : queryResponse.trainerProfile.role;
  const photo = loading ? "" : queryResponse.trainerProfile.profileImage;
  const rating = "5";
  const intro = loading ? "" : queryResponse.trainerProfile.about;

  const teaching = loading ? "" : queryResponse.trainerProfile.teaching;
  const forPlayers = loading ? "" : queryResponse.trainerProfile.forPlayers;
  const price = loading ? "" : queryResponse.trainerProfile.cash;
  const costPer = loading ? "" : queryResponse.trainerProfile.trainerMod;
  const train = loading ? "" : queryResponse.trainerProfile.description;

  console.log(queryResponse.trainerProfile);

  const comments = loading
    ? []
    : queryResponse.comments.map(({ name, message }) => {
        return {
          comment: message,
          author: name,
        };
      });

  return loading ? (
    <LoadingPage />
  ) : (
    <TrainerPage
      name={name}
      rating={rating}
      title={title}
      photo={photo}
      intro={intro}
      teaching={teaching}
      forPlayers={forPlayers}
      price={price}
      costPer={costPer}
      train={train}
      comments={comments}
    />
  );
};

export default TrainerPageIndex;
