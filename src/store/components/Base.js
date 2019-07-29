import { action } from 'mobx'

export default class Base {
  @action
  update(values) {
    Object.keys(values).forEach(key => {
      if (values[key] !== undefined) {
        this[key] = values[key]
      }
    })
  }

  /**
   * 后端转前端
   */
  __parse(bData) {
    this.update(bData)
  }

  /**
   * 前端转后端
   */
  __serialize(values) {
    return {}
  }
}
