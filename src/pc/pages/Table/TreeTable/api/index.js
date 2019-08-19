// tree列表api
export const TreeListApi = params => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200,
        result: [
          {
            title: '全部', key: '0', children: [
              {
                title: '中药材', key: '1',
                children:
                  [{ title: '中药材-1', key: '11' },
                  { title: '中药材-2', key: '12' },
                  { title: '中药材-3', key: '13' }]
              },
              {
                title: '中药饮片', key: '2',
                children:
                  [{ title: '中药饮片-1', key: '21' },
                  { title: '中药饮片-2', key: '22' },
                  { title: '中药饮片-3', key: '23' }]
              },
              { title: '中成药', key: '3' },
              { title: '中西成药', key: '4' },
              { title: '化学原料药', key: '5' },
              {
                title: '抗生素', key: '6',
                children:
                  [{ title: '抗生素-1', key: '61' },
                  { title: '抗生素-2', key: '62' },
                  { title: '抗生素-3', key: '63' }]
              },
              { title: '生化药品', key: '7' },
              { title: '放射性药品', key: '8' },
              { title: '疫苗', key: '9' },
              { title: '诊断药品', key: '10' }
            ]
          }

        ]
      });
    }, 500);
  });
};

export const TableListApi = params => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200,
        result: {
          count: 200,
          list: Array(10)
              .fill(0)
              .map((item,idx)=> ({
                key:Math.random(),
                index:idx+1,
                name: `药材-${idx}+1`,
                count: 24+idx,
                type:'中成药'

              }))
        }
      });
    }, 500);
  });
};
