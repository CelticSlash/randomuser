import React from "react";

export default class GenshinCharacter extends React.Component{
    state = {
        charName: 'eula',
        urlImg: undefined,
        loading: true,
        char: undefined,
    }

    render(){
        const char = this.state.char;

        if(this.state.loading)
            return (<h1>Carregando...</h1>);

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <img src={this.state.urlImg} style={{'width': '150px'}}/>
                        <div className="mt-3"><span className="h2">{char.name}</span></div>
                    </div>

                    <div className="col-8">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan="2">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Vision</td>
                                    <td>{char.vision}</td>
                                </tr>
                                <tr>
                                    <td>Weapon</td>
                                    <td>{char.weapon}</td>
                                </tr>
                                <tr>
                                    <td>Nation</td>
                                    <td>{char.nation}</td>
                                </tr>
                                <tr>
                                    <td>Affiliation</td>
                                    <td>{char.affiliation}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row mt-5">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th colSpan="2">Talents</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{char.skillTalents[0].name}</td>
                            <td>{char.skillTalents[0].description}</td>
                        </tr>
                        <tr>
                            <td>{char.skillTalents[1].name}</td>
                            <td>{char.skillTalents[1].description}</td>
                        </tr>
                        <tr>
                            <td>{char.skillTalents[2].name}</td>
                            <td>{char.skillTalents[2].description}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    async componentDidMount(){
        const url = 'https://api.genshin.dev/characters/'+ this.state.charName;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            loading: false,
            char: data,
            urlImg: 'https://api.genshin.dev/characters/' + this.state.charName + '/icon-big',
        });
    }
};