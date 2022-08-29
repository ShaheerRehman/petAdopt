import { useState, useEffect } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
import { useSelector, useDispatch } from "react-redux";
import { changeBreed } from "./redux/ducks/breedDuck";
import { changeLocation } from "./redux/ducks/locationDuck";
import { changeTheme } from "./redux/ducks/themeDuck";
import { changeAnimal } from "./redux/ducks/animalDuck";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const animal = useSelector((state) => state.animal.animal);
  // console.log(animal);
  const theme = useSelector(({ theme }) => theme.theme);
  // console.log(theme);
  const location = useSelector((state) => state.location.location);
  const breed = useSelector((state) => state.breed.breed);
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            defaultValue={location}
            placeholder="Location"
            onChange={(evt) => dispatch(changeLocation(evt.target.value))}
          />
        </label>
        <label htmlFor="animals">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              dispatch(changeAnimal(e.target.value));
            }}
            onBlur={(e) => {
              dispatch(changeAnimal(e.target.value));
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              dispatch(changeBreed(e.target.value));
            }}
            onBlur={(e) => {
              dispatch(changeBreed(e.target.value));
            }}
          >
            <option />
            {breeds.map((b) => (
              <option value={b} key={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            id="theme"
            value={theme}
            onChange={(e) => dispatch(changeTheme(e.target.value))}
            onBlur={(e) => dispatch(changeTheme(e.target.value))}
          >
            <option value="darkblue">Darkblue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="peru">Peru</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
