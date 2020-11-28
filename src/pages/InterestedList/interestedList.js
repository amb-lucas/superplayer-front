import React from "react";

import "./styles.css";

const InterestedList = ({ contacts = [] }) => {
  return (
    <div className="page-inside">
      <div id="interested-list-page">
        <h2>Quem requisitou treino?</h2>

        {contacts.length === 0 ? (
          <h3>Nenhuma requisição em aberto :(</h3>
        ) : (
          <table id="interested-list">
            <thead>
              <tr>
                <td>Nome</td>
                <td>Email</td>
                <td colSpan="2">Observações</td>
              </tr>
            </thead>
            <tbody>
              {contacts.map(({ name, email, observations }, i) => {
                return (
                  <tr key={`player-${i}-${name}`}>
                    <td>{name}</td>
                    <td>{email}</td>

                    <td colSpan="2">{observations}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default InterestedList;
