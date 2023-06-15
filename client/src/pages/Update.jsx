//Penser au truc de Guillaume pour le cover !!

import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Update() {
  const [game, setGame] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
    availability: null,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const gameId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setGame((prev) => ({ ...prev, [e.target.name]: e.target.value })); // voir si name, ou number, car on prend le dernier
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/games/" + gameId, game);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1> Modifier un jeu</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="description"
        onChange={handleChange}
        name="description"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />
      <input
        type="number"
        placeholder="availability"
        onChange={handleChange}
        name="availability"
      />

      <button className="formButton" onClick={handleClick}>
        Mise à jour
      </button>
    </div>
  );
}

export default Update;
