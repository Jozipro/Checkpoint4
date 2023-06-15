import React, { useEffect, useState } from "react";
import axios from "axios";

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchAllGames = async () => {
      try {
        const res = await axios.get("http://localhost:8800/games"); // or 5000 ?
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllGames();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/games/" + id);
      window.location.reload(); // ou redux ?
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Joe's Games Storage</h1>
      <div className="games">
        {games.map((games) => (
          <div className="game" key={book.id}>
            {game.cover && <img src="" alt="game offical cover" />} // idem pour
            availabili ?<h2>{game.title}</h2>
            <p>{game.description}</p>
            <span>{game.price}</span>
            <span>{game.availability}</span>
            <button className="update" onClick={() => handleDelete(game.id)}>
              Mettre à jour
            </button>
            <button className="delete">Supprimer</button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/create">Ajouter un jeu </Link>
      </button>
    </div>
  );
}

export default Games;
