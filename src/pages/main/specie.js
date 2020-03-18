import React, {Component} from 'react';
import {apiSprite} from '../../services/api';
import { Link } from 'react-router-dom'

export default class Specie extends Component {
    render() {
        const {id, pkmn} = this.props;
        return (

            <article key={id} className="pkmn-portrait">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                {/*{<img src={`https://images-na.ssl-images-amazon.com/images/I/417Y8qz6oXL.png`} />}*/}
                <div className="name-pkmn">
                    <Link to={{pathname: `/pokemon/${id}`}}>{pkmn.name}</Link>
                </div>
            </article>
        );
    }
}
