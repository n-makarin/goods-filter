/**
 * Doc: https://my-json-server.typicode.com/
 */
import axios from 'axios'

const endpoint = 'https://my-json-server.typicode.com/n-makarin/goods-filter/'
const myJsonServer = {
  /**
   * Get current weather by city name
   * @param {string} path Query path
   * @param {string} query Query params
   * @returns any
   */
  async get (path = '', query = '') {
    let rawData = null
    const url = `${endpoint}${path}${query}`
    await axios({
      method: 'GET',
      url
    })
      .catch((error) => {
        console.log(`Can't get data by url: ${url}. Error: ${error}`)
      })
      .then((result) => {
        if (!result || !result.data) { return }
        rawData = result.data
      })
    return rawData
  }
}

export default myJsonServer
