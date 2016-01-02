// import Fetch from 'whatwg-fetch'

const get = (url) => (
  fetch(url)
  .then((res) =>
    res.json()
  )
)


const post = (url, data) => (
  fetch(url, {
    method: 'post',
    body: JSON.stringify(data)
  })
  .then((res) =>
    res.json()
  )
)

const deleteData = (url) => (
  fetch(url, {
    method: 'delete',
  })
  .then((res) =>
    res.json()
  )
)

const patch = (url, data) => (
  fetch(url, {
    method: 'patch',
    body: JSON.stringify(data)
  })
  .then((res) =>
    res.json()
  )
)


export default {
  get: get,
  post: post,
  deleteData: deleteData,
  patch: patch
}
