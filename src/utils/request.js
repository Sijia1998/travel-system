import Axios from './axios'

// let baseUrl = "https://www.easy-mock.com/mock/5cbad7deea584067121b0f83/api/v1"
let baseUrl = "http://192.168.3.66:7001/api/v1"

let api = new Axios({ baseUrl })

export default api