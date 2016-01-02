// import Fetch from 'whatwg-fetch'

const get = (url) => (
  fetch(url)
  .then((res) =>
    res.json()
  )
)


export default {
  get: get
}
