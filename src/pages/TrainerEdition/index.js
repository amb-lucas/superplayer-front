import React from "react";
import { Redirect } from "react-router-dom";

import { isAuthenticated } from "../../context/auth";
import Api from "../../services/api";

import TrainerEdition from "./trainerEdition";

const TrainerEditionIndex = () => {
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

    console.log(formData.description);

    try {
      await Api.put("user/trainer/edit", formData).then((res) => {
        console.log("atualizado");
        if (res.status === 200) {
          alert("BOA POHA");
        }
      });
    } catch (err) {
      console.log(err.response);
      console.log(err);
    }
  };

  return isAuthenticated() ? (
    <TrainerEdition handleUpdateData={handleUpdateData} />
  ) : (
    <Redirect to="/login" />
  );
};

export default TrainerEditionIndex;
