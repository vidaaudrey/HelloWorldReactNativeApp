import api from './api'
const firebaseRootUrl = 'https://react-note-au.firebaseio.com/'
  // import configSec from '../config/configSec'

const getNotes = (username) => {
  console.log('getting notes', `${firebaseRootUrl}${username}.json`)
  return api.get(`${firebaseRootUrl}${username}.json`)
}


const addNote = (username, note) => {
  console.log('adding notes', `${firebaseRootUrl}${username}.json`)
  return api.post(`${firebaseRootUrl}${username}.json`, note)
}

const deleteNotes = (username) => {
  console.log('deleting notes', `${firebaseRootUrl}${username}.json`)
  return api.deleteData(`${firebaseRootUrl}${username}.json`)
}

export default {
  getNotes: getNotes,
  addNote: addNote,
  deleteNotes: deleteNotes
}
