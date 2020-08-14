import React, { Component } from 'react'

import { FootyAPI } from '../utils/api'
import logo from '../images/footy-stats.png'

// Data
import competitions from '../data/competitions.json'
import standings from '../data/standings-epl.json'

export default class Landing extends Component{

    constructor(props){
        super(props)
        
        this.state = {
            competitions: competitions.competitions,
            leagueTable: standings,
            activeLeague: "English Premier League"
        }

        console.log(standings)
    }

    componentDidMount(){

        /*
        FootyAPI.getCompetitions()
            .then( (response) => {
                var data = response.data

                if(typeof data !== undefined){
                    const competitions = data.competitions

                    this.setState({ 
                        competitions: competitions
                    })

                    this.getLeagueTable(competitions[0].id)
                }
            })
        */
    }

    getLeagueTable(id){
        /*
        FootyAPI.getCompetitions(id + '/standings')
            .then( (response) => {
                var data = response.data
                //console.log(data)

                this.setState({ 
                    leagueTable: data.standing,
                    activeLeague: data.leagueCaption
                })
            })
        */
    }

    render(){
        console.log(this.state)

        const { competitions, leagueTable, activeLeague } = this.state

        return(
            <div className="clearfix">
                <div className="col-sm-3">
                    <div className="app-logo">
                        <img src={ logo } alt="Footy Stats" />
                    </div>
                    <h4 className="hidden">
                        Competitions &nbsp;
                        { competitions.length > 0 ? competitions[0].year : "" }
                    </h4>

                    <div className="hidden">
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
                </div>

                <div className="col-sm-9">
                    <h4>Standings: { activeLeague }</h4>
                    {
                        leagueTable.standings[0].table.length > 0 ? 

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
                            
                            leagueTable.standings[0].table.map( (team, index)=>{
                                
                                return(
                                    <tr key={ index }>
                                        <td>{ team.position }</td>
                                        <td>
                                            <img src={ team.team.crestUrl } alt="[IMG] " />
                                            { team.team.name }
                                        </td>
                                        <td>{ team.playedGames }</td>
                                        <td>{ team.wins }</td>
                                        <td>{ team.draw }</td>
                                        <td>{ team.lost }</td>
                                        <td>{ team.goalsFor }</td>
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