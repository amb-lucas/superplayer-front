import React from "react";
import { Redirect, useHistory } from "react-router-dom";

import { isAuthenticated, GetAuthData } from "../../context/auth";
import Api from "../../services/api";

import TrainerEdition from "./trainerEdition";

const TrainerEditionIndex = () => {
  const history = useHistory();

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

  return isAuthenticated() ? (
    <TrainerEdition handleUpdateData={handleUpdateData} />
  ) : (
    <Redirect to="/login" />
  );
};

export default TrainerEditionIndex;
