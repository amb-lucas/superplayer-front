import React from "react";

import ProfilePage from "./profile";

const ProfilePageIndex = (props) => {
  // const { id } = props.match.params.id;

  // make query with id

  const sampleProfileData = {
    name: "Yodami",
    rating: "5",
    title: "Treinador de League of Legends",
    photo: process.env.PUBLIC_URL + "/sample-images/yodami.png",
    intro: `Olá! Sou Luís Augusto, também conhecido como Yodami.
    Jogo League of Legends desde 2013 e tenho 6 anos de experiência jogando competitivamente como Jungle, com main Amumu.
    É uma das posições mais complicadas, mas vou lhe ensinar quando gankar, que rotas fazer, como evitar armadilhas e o que se deve ter na build de um Jungle.
    Aulas práticas, descontraídas e que respeitam o nível do aluno!`,
    train: `Na aula, vamos começar com um nivelamento, onde verei o qualidade do seu farm, build e escolha do campeão e build.
    Depois, faremos um exercício para observar como os melhores jogadores competitivos fazem cada ponto e jogadas de sua função.
    E então seguiremos para uma partida ao vivo, onde estarei monitorando seu jogo e darei feedbacks relevantes durante a competição e anotarei pontos para discutir ao final da partida.
    Após a aula, você será capaz de entender o que deve fazer e como melhorar nesses pontos.`,
    comments: [
      {
        comment: "Opa, muito bom",
        author: "Danilo Lira",
      },
      {
        comment: "Genial demais",
        author: "Daniel Bezerra",
      },
    ],
  };

  const {
    name,
    rating,
    title,
    photo,
    intro,
    train,
    comments,
  } = sampleProfileData;

  return (
    <ProfilePage
      name={name}
      rating={rating}
      title={title}
      photo={photo}
      intro={intro}
      train={train}
      comments={comments}
    />
  );
};

export default ProfilePageIndex;
