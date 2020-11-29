import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Api from "../../services/api";
import Feedback from "./feedback";
import LoadingPage from "../../components/loadingPage";

const FeedbackIndex = (props) => {
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

  const handleCommentSubmit = async (data) => {
    try {
      await Api.post(`trainer/${id}/evaluate`, data).then((res) => {
        if (res.status === 200) {
          alert("Treinador avaliado com sucesso!");
          history.push(`/trainer/${id}`);
        }
      });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        if (err.response.data.signal === 1) {
          alert(
            "Erro: Não foram encontrados treinos seus concluídos com esse treinador."
          );
        } else {
          alert("Erro: Você não pode se avaliar.");
        }
      } else {
        alert("Ocorreu um erro no servidor, tente novamente mais tarde");
      }
      history.push(`/trainer/${id}`);
    }
  };

  return loading ? (
    <LoadingPage />
  ) : (
    <Feedback
      name={name}
      title={title}
      photo={photo}
      commentSubmit={handleCommentSubmit}
    />
  );
};

export default FeedbackIndex;
