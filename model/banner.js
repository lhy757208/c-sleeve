import { Http } from '../utils/http'

class Banner {
  static locationB = 'b-1'

  static locationG = 'b-2'

  static getHomeLocationB () {
    return Http.request({
      url: `${Banner.locationB}.json`
    })
  }

  static getHomeLocationG() {
    return Http.request({
      url: `${Banner.locationG}.json`
    })
  }
}

export {
  Banner
}
