import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { GetAuthData } from "../../context/auth";
import Api from "../../services/api";

import LoadingPage from "../../components/loadingPage";
import TrainerEdition from "./trainerEdition";

const TrainerEditionIndex = () => {
  const history = useHistory();

  const [queryResponse, setQueryResponse] = useState({});
  const [loading, setLoading] = useState(true);

  const handleUpdateData = async (data) => {
    const formData = {
      role: data.trainerRoleValue,
      about: data.trainerIntroValue,
      classTitle: data.classTitleValue,
      teaching: data.teachValue,
      forPlayers: data.forPlayersValue,
      cash: data.priceValue,
      trainerMod: data.perPriceValue,
      description: data.classInfoValue,
    };

    try {
      await Api.put("user/trainer/edit", formData).then((res) => {
        if (res.status === 200) {
          alert("Dados atualizados com sucesso");
          history.push(`trainer/${GetAuthData().user._id}`);
        }
      });
    } catch (err) {
      alert("Erro no servidor, tente novamente mais tarde.");
    }
  };

  const id = GetAuthData().user._id;

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
  }, [id]);

  console.log(queryResponse);

  const {
    role: trainerRole,
    about: trainerIntro,
    classTitle,
    teaching: teach,
    forPlayers,
    cash: price,
    trainerMod: perPrice,
    description: classInfo,
  } = loading ? {} : queryResponse.trainerProfile;

  return loading ? (
    <LoadingPage />
  ) : (
    <TrainerEdition
      handleUpdateData={handleUpdateData}
      trainerRole={trainerRole}
      trainerIntro={trainerIntro}
      classTitle={classTitle}
      teach={teach}
      forPlayers={forPlayers}
      price={price}
      perPrice={perPrice}
      classInfo={classInfo}
    />
  );
};

export default TrainerEditionIndex;
