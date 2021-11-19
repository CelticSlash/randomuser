import React from "react";

export default class Profile extends React.Component{
    state = {
        loading: true,
        user: undefined,
    }

    render(){
        const user = this.state.user;

        if(this.state.loading)
            return (<h1>Carregando...</h1>);

        return (
            <div>
                <span>{user.name.first} {user.name.last}</span>
                <img src={user.picture.large} />
            </div>
        );
    }

    componentDidMount(){
        const url = 'https://api.randomuser.me';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            loading: false,
            user: data.results[0],
        });
    }
};