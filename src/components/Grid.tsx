import { ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import seedrandom from 'seedrandom';

import { getPokemonImg, pokemonData, PokemonData } from '../data/pokemon';
import { sanitizeString } from '../helper/sanitize';
import pokeball from '../images/pokeball-sprite.png';

const MIN: number = 1;
const MAX: number = 1017;

function getPokemon(name: string): ReactElement[] {
    const pokemon: ReactElement[] = [];

    if (!name) {
        //default
        for (let i = 0; i < 6; i++) {
            pokemon.push(
                <div className="text-lg font-bold text-center p-6 rounded-lg border border-black">
                    <img
                        className="min-w-full"
                        src={pokeball}
                        style={{ width: '80px' }}
                    />
                </div>
            );
        }
    } else {
        let rng;
        let pokemonNumber: string;
        let pokemonName: string;

        for (let i = 0; i < 6; i++) {
            rng = seedrandom(`${name}--${i}`);
            pokemonNumber = String(Math.floor(rng() * (MAX - MIN + 1) + MIN));
            pokemonName = (pokemonData as PokemonData)[pokemonNumber].name;
            pokemon.push(
                <div className="text-sm md:text-md lg:text-lg font-bold text-center items-center p-4 rounded-lg border border-black">
                    <img
                        className="inline-block min-w-full"
                        src={getPokemonImg(
                            pokemonName,
                            parseInt(pokemonNumber)
                        )}
                    />
                    <p>{pokemonName}</p>
                </div>
            );
        }
    }

    return pokemon;
}

function Grid(): ReactElement {
    const [searchParams, _] = useSearchParams();
    const name = sanitizeString(searchParams.get('name'));

    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-5">
                {getPokemon(name)}
            </div>
        </div>
    );
}
export default Grid;
