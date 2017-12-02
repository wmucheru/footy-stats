import axios from 'axios'

const baseURL = 'http://api.football-data.org/v1/'
const URL = {
    competitions: baseURL + 'competitions/',
    teams: baseURL + 'teams/',
    fixtures: baseURL + 'fixtures/'
}

const makeAPIRequest = (endpoint) => {
    const options = {
        headers: { 'X-Auth-Token': '6740a08a53f34b9b9df5c0c8ffd944fc' }
    }

    return axios.get(endpoint, options)
}

export const FootyAPI = {
    
    getCompetitions: function(params=''){
        return makeAPIRequest(URL.competitions + params)
    },

    getTeams: function(params=''){
        return makeAPIRequest(URL.teams + params)
    },

    getFixtures: function(params=''){
        return makeAPIRequest(URL.fixtures + params)
    }
}
