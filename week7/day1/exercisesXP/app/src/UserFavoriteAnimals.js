import {Component} from "react";

class UserFavoriteAnimals extends Component {
    render(){
        const { favAnimals } = this.props

        return(
            <div>
            <h2>my fav animals :</h2>
            <ul>
                {favAnimals.map((animals, index) => {
                    return <li key={index}>{animals}</li>
                })}
            </ul>
            </div>
        );
    }

}

export default UserFavoriteAnimals