// 数据列表api
export const DataListApi = params => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200,
        result: {
          count: 200,
          list: [
            {
              key: 1,
              num: '001',
              name: '商品1',
              price: '高',
              varieties: 200,
              varietiesPercent: '30%',
              varietiesNow: 123,
              inventoryNum: 4400,
              inventoryMoney: '260043.00',
              timeNum: 34000,
              timeMoney: '1000.00',
              days: 73,
              times: 4
            }, {
              key: 2,
              num: '001',
              name: '商品1',
              price: '中',
              varieties: 140,
              varietiesPercent: '40%',
              varietiesNow: 380,
              inventoryNum: 2400,
              inventoryMoney: '4501.00',
              timeNum: 1420,
              timeMoney: '1430.00',
              days: 11,
              times: 46
            }, {
              key: 3,
              num: '001',
              name: '商品1',
              price: '低',
              varieties: 200,
              varietiesPercent: '540%',
              varietiesNow: 480,
              inventoryNum: 2400,
              inventoryMoney: '26031.20',
              timeNum: 1400,
              timeMoney: '1004.50',
              days: 112,
              times: 45
            },
            {
              key: 4,
              num: '001',
              name: '商品1',
              price: '小计',
              varieties:500,
              varietiesPercent: '24%',
              varietiesNow: 156,
              inventoryNum: 3425,
              inventoryMoney: '2651.00',
              timeNum: 3560,
              timeMoney: '1240.00',
              days: 9,
              times: 1
            }, {
              key: 5,
              num: "002",
              name: '商品2',
              price: '高',
              varieties:800,
              varietiesPercent: '78%',
              varietiesNow: 90,
              inventoryNum: 1300,
              inventoryMoney: '26451.00',
              timeNum: 4400,
              timeMoney: '1046.00',
              days: 15,
              times: 5
            }, {
              key: 6,
              num: "002",
              name: '商品2',
              price: '中',
              varieties: 606,
              varietiesPercent: '11%',
              varietiesNow: 183,
              inventoryNum: 3400,
              inventoryMoney: '2445.00',
              timeNum: 1560,
              timeMoney: '1420.00',
              days: 721,
              times: 13
            }, {
              key: 7,
              num: "002",
              name: '商品2',
              price: '低',
              varieties: 675,
              varietiesPercent: '10%',
              varietiesNow: 566,
              inventoryNum: 1345,
              inventoryMoney: '6787.00',
              timeNum: 1224,
              timeMoney: '546.00',
              days: 55,
              times: 8
            },
            {
              key: 8,
              num: "002",
              name: '商品2',
              price: '小计',
              varieties: 2340,
              varietiesPercent: '19%',
              varietiesNow: 320,
              inventoryNum: 2340,
              inventoryMoney: '26101.00',
              timeNum: 3330,
              timeMoney: '1666.00',
              days: 44,
              times: 9
            }
          ]
        }
      });
    }, 500);
  });
};
