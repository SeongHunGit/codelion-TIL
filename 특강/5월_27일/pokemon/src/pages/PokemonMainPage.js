import "../styles.css";

import { useEffect, useState } from "react";
import { getPokemons } from "../api";
import { PokemonCard } from "../components";

export const PokemonMainPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const loadData = setTimeout(() => {
      getPokemons().then((result) => {
        setPokemons(result);
        setFilteredPokemons(result);
        setIsLoading(false);
      });
    }, 2000);

    return () => {
      // 컴포넌트가 unmount 될때
      clearTimeout(loadData);
    };
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    const result = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPokemons(result);
  };

  return (
    <div className="App">
      <input
        placeholder="포켓몬 이름을 입력하세요."
        type="text"
        value={query}
        onChange={handleInputChange}
      />
      <div>
        {isLoading ? (
          <div>지금 포켓몬을 찾는 중입니다.</div>
        ) : (
          <div>
            {filteredPokemons.map(({ name }) => (
              // card컴포넌트
              <PokemonCard name={name} key={`${name}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
