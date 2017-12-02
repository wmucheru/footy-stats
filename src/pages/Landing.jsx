import React, { Component } from 'react'

import { FootyAPI } from '../utils/api'
import logo from '../images/footy-stats.png'

export default class Landing extends Component{

    constructor(props){
        super(props)
        
        this.state = {
            competitions: [],
            leagueTable: []
        }
    }

    componentDidMount(){
        
        FootyAPI.getCompetitions()
            .then( (response) => {
                var data = response.data

                if(typeof data !== undefined){
                    this.setState({ competitions: data })

                    this.getLeagueTable(data[0].id)
                }
            })
    }

    getLeagueTable(id){
        FootyAPI.getCompetitions(id + '/leagueTable')
            .then( (response) => {
                this.setState({ leagueTable: response.data.standing })
            })
    }

    render(){
        console.log(this.state)

        const { competitions, leagueTable } = this.state

        return(
            <div className="clearfix">
                <div className="col-sm-3">
                    <div className="app-logo">
                        <img src={ logo } alt="Footy Stats" />
                    </div>
                    <h4>
                        Competitions &nbsp;
                        { competitions.length > 0 ? competitions[0].year : "" }
                    </h4>

                    {
                        competitions.length > 0 ? 

                        <ul>
                        {
                            
                            competitions.map( (competition, index)=>{
                                
                                return(
                                    <li 
                                        key={ index } 
                                        onClick={ () => { this.getLeagueTable(competition.id) } }>

                                        { competition.caption + " - " + competition.league }
                                    </li>
                                )
                            })
                        }
                        </ul>

                    :
                        <div>Loading competitions...</div>
                    }
                </div>

                <div className="col-sm-9">
                    <h4>Standings</h4>
                    {
                        leagueTable.length > 0 ? 

                        <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Team</th>
                                <th>PL</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>P</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            
                            leagueTable.map( (team, index)=>{
                                
                                return(
                                    <tr key={ index }>
                                        <td>{ team.position }</td>
                                        <td>{ team.teamName }</td>
                                        <td>{ team.playedGames }</td>
                                        <td>{ team.wins }</td>
                                        <td>{ team.draws }</td>
                                        <td>{ team.losses }</td>
                                        <td>{ team.goals }</td>
                                        <td>{ team.goalsAgainst }</td>
                                        <td>{ team.goalDifference }</td>
                                        <td>{ team.points }</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                        </table>

                    :
                        <div>Loading teams...</div>
                    }
                </div>
            </div>
        )
    }
}