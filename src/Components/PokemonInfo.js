import React, { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PokemonInfo = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      setPokemonData(response.data);
    } catch (error) {
      console.error(error);
      setPokemonData(null);
    }
  };

  return (
    <div className='bodySection'>
        <div>
            <h2 className='titleInput'>información pokemon</h2>
            <Form className='inputSection'onSubmit={handleSubmit}>
                <Form.Group className='formInput'>
                    <Form.Label className='labelNamePokemon'>Nombre del Pokemón:</Form.Label>
                    <Form.Control className='inputNamePokemon'
                        type="text"
                        placeholder="Ingresa tu pokemón"
                        value={pokemonName}
                        onChange={handleChange}
                    />
                    <Button className="btn btn-custom" variant="primary" type="submit">
                      ELíGEME
                    </Button>
                </Form.Group>
            </Form>
        </div>
        <div className='answerSection'>
            {pokemonData && (
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='answerImg' variant="top" src={pokemonData.sprites.front_default} alt={pokemonName} />
                    <Card.Body>
                        <Card.Title>{pokemonName}</Card.Title>
                        <Card.Text>
                            <strong>TIPO:</strong> {pokemonData.types[0].type.name}
                            <br />
                            <strong>HABILIDADES</strong>
                            <ul>
                                {pokemonData.abilities.map((ability, index) => (
                                    <li key={index}>{ability.ability.name}</li>
                                ))}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    </div>
  );
};

export default PokemonInfo;
