import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        // let list = this.props.characterName.map(characterName => {
        //     return (
        //         <div className="card" key={characterName.name}>
        //             <Link to={'/characters/' + characterName.name} />
        //         </div>
        //     );
        // });
        return (
            <div>
                <p> list of characters </p>
            </div>
        );
    }
}

export default Home;
