import React, { useState, useEffect } from "react";

import Api from "../../../services/api";

import MeetTrainers from "./meetTrainers";

const MeetTrainersIndex = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [queryResponse, setQueryResponse] = useState([]);

  useEffect(() => {
    const makeQuery = async () => {
      try {
        await Api.get("search/highlighted").then((res) => {
          setQueryResponse(
            res.data.TopProfiles.map((trainer) => {
              return {
                name: trainer.name,
                title: trainer.role,
                photo: trainer.profileImage,
                description: trainer.about,
                id: trainer.user,
              };
            })
          );
          setLoading(false);
        });
      } catch (err) {
        setError(true);
      }
    };

    makeQuery();
  }, []);

  return (
    <MeetTrainers loading={loading} error={error} trainers={queryResponse} />
  );
};

export default MeetTrainersIndex;
