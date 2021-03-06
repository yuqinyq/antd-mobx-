/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-26 09:19:51
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-19 10:43:38
 */
import { observable, action, runInAction } from 'mobx'
import Base from '../../../../../store/components/Base'
import { columns } from '../components/columns'
import { DataListApi } from '../api'


export default class SearchListStore extends Base {

  @observable.ref
  list = []
  @observable
  loading = false
  @observable
  pageNo = 1
  @observable
  pageSize = 10
  @observable
  total = 0
  @observable
  keyword = ''
  @observable
  columns = []
  @observable.ref
  checkedKeys = ['key', 'num', 'name', 'price', 'varietiesData','action']
  @observable
  disabledKeys = ['key','num','name','action']

  constructor(data) {
    super()
    this.data = data
  }

  @action
  async fetchList({ pageNo, pageSize, keyword }) {
    this.loading = true
    const data = await DataListApi({
      pageNo,
      pageSize,
      keyword
    })
    if (data.success) {
      runInAction('fetch question list success', () => {
        this.list = data.result.list
        this.total = data.result.count
        this.columns = columns(data.result.list,this.checkedKeys)
        this.loading = false
        this.pageNo = pageNo
      })
    }
    return data
  }

  @action
  columnsChange = checkedKeys => {
    this.checkedKeys = checkedKeys
    this.columns = columns(this.list,checkedKeys)
  }



}
