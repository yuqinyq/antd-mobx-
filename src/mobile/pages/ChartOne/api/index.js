/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-20 10:05:33
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-20 10:11:22
 */
export const ChartListApi = (params) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200,
        result: {
          count: 200,
          list: Array(5)
            .fill(0)
            .map((item, idx) => ({
              key: Math.random(),
              city: '成都',
              money1: 5.56,
              netProfit1: 1.22,
              netInterestRate1:'34.43%',
              money2:'6.56',
              netProfit2: 1.24,
              netInterestRate2:'27.86%',
            }))
        }
      })
    }, 500)
  })
}
