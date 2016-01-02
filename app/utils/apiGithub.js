import api from './api'
const githubRootUrl = 'https://api.github.com/users/'
import configSec from '../config/configSec'

const getGithubRepos = ((username) =>
  api.get(`${githubRootUrl}${username}/repos?access_token=${configSec.githubAccessToken}`)
)


const getBio = ((username) =>
  api.get(`${githubRootUrl}${username}?access_token=${configSec.githubAccessToken}`)
)


const getGithubInfo = ((username) =>
  Promise.all([
    getGithubRepos(username),
    getBio(username)
  ]).then((values) => ({
    repos: values[0],
    bio: values[1]
  }))
)


export default {
  getGithubRepos: getGithubRepos,
  getBio: getBio,
  getGithubInfo: getGithubInfo
}
