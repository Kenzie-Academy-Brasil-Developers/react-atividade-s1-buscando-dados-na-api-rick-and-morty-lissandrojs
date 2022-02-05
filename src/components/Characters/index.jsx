import "./style.css";
import "../CharCard/";
import CharCard from "../CharCard/";

const Characters = ({ characterList }) => {
  return (
    <div>
      <h1>Meus Personagens </h1>
      <div className="container--person">
        {characterList.map((item) => (
          <CharCard
            key={item.id}
            name={item.name}
            species={item.species}
            gender={item.gender}
            url={item.image}
          ></CharCard>
        ))}
      </div>
    </div>
  );
};
export default Characters;
