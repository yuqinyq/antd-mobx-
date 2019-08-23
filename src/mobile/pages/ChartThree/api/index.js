/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-20 10:05:33
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-23 15:36:26
 */
export const DetailsListApi = (params) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200,
        result: [
          {
            name: '南京分公司',
            today: 96,
            todate: 87,
            increase: 6,
            tomouth: 2184,
            todate2: 2469
          },
          {
            name: '郑州分公司',
            today: 52,
            todate: 39,
            increase: 138,
            tomouth: 1557,
            todate2: 942
          },
          {
            name: '武汉分公司',
            today: 46,
            todate: 61,
            increase: -66,
            tomouth: 1388,
            todate2: 1411
          },{
            name: '济南分公司',
            today: 43,
            todate: 43,
            increase: -13,
            tomouth: 1221,
            todate2: 1202
          },
          {
            name: '杭州分公司',
            today: 25,
            todate: 23,
            increase: 58,
            tomouth: 813,
            todate2: 650
          },
          {
            name: '南昌分公司',
            today: 25,
            todate: 18,
            increase: 97,
            tomouth: 713,
            todate2: 578
          },
          {
            name: '长沙分公司',
            today: 24,
            todate:24,
            increase: 55,
            tomouth:950,
            todate2: 830
          }
        ]
      })
    }, 500)
  })
}
