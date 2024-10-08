import axios from 'axios'
import {Message} from 'element-ui'
import Qs from 'qs'

const errorMessage = '加载失败, 请稍后再试'
// 成功状态码
const SUCCESS_CODE = 0

axios.defaults.baseURL = 'api'
axios.defaults.timeout = 10000
axios.defaults.responseType = 'json'
axios.interceptors.request.use(config => {
  return config
}, error => {
  Message.error({
    message: errorMessage
  })

  return Promise.reject(error)
})

axios.interceptors.response.use(data => {
  return data
}, error => {
  Message.error({
    message: errorMessage
  })

  return Promise.reject(error)
})

function handle (promise, next) {
  promise.then((res) => successCallback(res, next))
    .catch((error) => failureCallback(error))
}

function checkResponseCode (code, msg) {
  if (code !== SUCCESS_CODE) {
    Message.error({
      message: msg
    })
    return false
  }

  return true
}

function successCallback (res, next) {
  if (!checkResponseCode(res.data.code, res.data.message)) {
    return
  }
  if (!next) {
    return
  }
  next(res.data.data, res.data.code, res.data.message)
}

function failureCallback (error) {
  Message.error({
    message: '请求失败 - ' + error
  })
}

export default {
  get (uri, params, next) {
    const promise = axios.get(uri, {params})
    handle(promise, next)
  },

  batchGet (uriGroup, next) {
    const requests = []
    for (let item of uriGroup) {
      let params = {}
      if (item.params !== undefined) {
        params = item.params
      }
      requests.push(axios.get(item.uri, {params}))
    }

    axios.all(requests).then(axios.spread(function (...res) {
      const result = []
      for (let item of res) {
        if (!checkResponseCode(item.data.code, item.data.message)) {
          return
        }
        result.push(item.data.data)
      }
      next(...result)
    })).catch((error) => failureCallback(error))
  },

  post (uri, data, next) {
    const promise = axios.post(uri, Qs.stringify(data), {
      headers: {
        post: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    })
    handle(promise, next)
  }
}
