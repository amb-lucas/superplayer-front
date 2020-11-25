import React from "react";
import { useHistory } from "react-router-dom";

import { GetAuthData, useAuth } from "../../context/auth";
import Api from "../../services/api";
import ReadFileAsync from "../../utils/readFileAsync";

import ProfilePage from "./profile";

const ProfilePageIndex = () => {
  const history = useHistory();
  const { update } = useAuth();

  const { name, profileImage: photo, email, trainer } = GetAuthData().user;

  const handleProfileUpdate = async ({ name, photo }) => {
    const image = photo
      ? await ReadFileAsync(photo)
      : GetAuthData().user.profileImage;

    const formData = {
      name,
      profileImage: image,
    };

    try {
      await Api.put("user/edit", formData).then((res) => {
        if (res.status === 200) {
          update(res.data);
          alert("Dados alterados com sucesso!");

          history.push("/");
        }
      });
    } catch (err) {
      alert("Erro no servidor, por favor tente novamente mais tarde.");
    }
  };

  return (
    <ProfilePage
      name={name}
      photo={photo}
      email={email}
      isTrainer={trainer}
      updateProfile={handleProfileUpdate}
    />
  );
};

export default ProfilePageIndex;
