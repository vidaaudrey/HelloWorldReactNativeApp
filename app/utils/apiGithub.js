import api from './api'
const githubRootUrl = 'https://api.github.com/users/'
import configSec from '../config/configSec'

const getRepos = ((username) =>
  api.get(`${githubRootUrl}${username}/repos?access_token=${configSec.githubAccessToken}`)
)


const getBio = ((username) =>
  api.get(`${githubRootUrl}${username}?access_token=${configSec.githubAccessToken}`)
)


const getInfo = ((username) =>
  Promise.all([
    getRepos(username),
    getBio(username)
  ]).then((values) => ({
    repos: values[0],
    bio: values[1]
  }))
)


export default {
  getRepos: getRepos,
  getBio: getBio,
  getInfo: getInfo
}
