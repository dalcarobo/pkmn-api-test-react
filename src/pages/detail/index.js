import React, {Component} from 'react';
import { api } from '../../services/api';

import './styles.css';

export default class Detail extends Component {

    state = {
        detail: {},
        image: {}
    };

    async componentWillMount() {
        const { id } = this.props.match.params;
        const { data } = await api.get(`pokemon/${id}`);
        this.setState({detail: data, image: data.sprites});

    };

    getTypes = (types) => {
        const pkmnTypes = [];
        for (let key in types) {
            pkmnTypes.push(types[key].type.name);
        }

        return pkmnTypes;
    };

    render() {
        const { name, types, id } = this.state.detail;
        const PkmnType = this.getTypes(types);

        return (
            <div className="container">
                <img src={this.state.image.front_default} />

                <div className="container-detail">
                    <h2>{name}</h2>
                    {PkmnType.map(type => (
                        <p key={type} className="badge">{type}</p>
                    ))}
                </div>
            </div>

        );
    }
}