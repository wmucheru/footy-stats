import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL
const URL = {
    competitions: baseURL + 'competitions/',
    teams: baseURL + 'teams/',
    fixtures: baseURL + 'fixtures/'
}

const makeAPIRequest = (endpoint) => {
    const options = {
        headers: { 'X-Auth-Token': process.env.REACT_APP_API_TOKEN }
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
