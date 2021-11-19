import React from "react";

export default class GithubRepo extends React.Component{
    state = {
        loading: true,
        repo: undefined,
    }

    render(){
        const repo = this.state.repo;

        if(this.state.loading)
            return (<h1>Carregando...</h1>);

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Repositório</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        repo.map((repo) => {
                            return(
                                <tr>
                                    <td><a href={repo.html_url}>{repo.name}</a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }

    async componentDidMount(){
        const url = 'https://api.github.com/users/CelticSlash/repos';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            loading: false,
            repo: data,
        });
    }
};