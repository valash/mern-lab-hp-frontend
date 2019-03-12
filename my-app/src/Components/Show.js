import React, { Component } from 'react';

class Show extends Component {
    render() {
        let characterList = this.props.character.filter(character => character.name === this.props.match.params.name);
        let character = characterList[0];
        console.log(character);

        return (
            <div className="Show-Page">
                <div className="Show-info">
                    <h1>{character.name}</h1>
                    <h2>{character.gender}</h2>
                    <h2>{character.house}</h2>
                    <h2>{character.bloodStatus}</h2>
                </div>
                <a href={character.home}>
                    <button>Read More</button>
                </a>
            </div>
        );
    }
}

export default Show;
