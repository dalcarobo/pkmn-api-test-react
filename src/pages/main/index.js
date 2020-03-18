import React, {Component} from 'react';
import Specie from './specie';
import './styles.css';

import {api} from '../../services/api';


export default class Main extends Component {

    state = {
        stPkmnList: [],
        fetched: false
    };

    componentDidMount() {
        this.listPkmn();
    }

    listPkmn = async () => {
        const { data } = await api.get('pokemon/?limit=21');
        this.setState({stPkmnList: data.results, fetched: true});

    };

    render() {
        const lista = this.state.stPkmnList;
        return (
            <div className="pkmn-list">
                {lista.map((l,i) => (
                    <Specie key={i} id={i+1} pkmn={l} />
                ))}

            </div>
        );

    }
}