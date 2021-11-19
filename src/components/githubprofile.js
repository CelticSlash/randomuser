import React from "react";
import GithubRepo from "./repo";

export default class GithubProfile extends React.Component{
    state = {
        loading: true,
        user: undefined,
    }

    render(){
        const user = this.state.user;

        if(this.state.loading)
            return (<h1>Carregando...</h1>);

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <div><span className="h2">{user.name}</span></div>
                        <img src={user.avatar_url} style={{'width': '150px'}}/>
                    </div>
                    <div className="col-8">
                        <GithubRepo />
                    </div>
                </div>
            </div>
        );
    }

    async componentDidMount(){
        const url = 'https://api.github.com/users/CelticSlash';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            loading: false,
            user: data,
        });
    }
};