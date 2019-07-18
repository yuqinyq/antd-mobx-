import React from 'react'
import { Card, List } from 'antd'
import axios from 'axios'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'


class ListDemo extends React.Component {
  state = {
    size: 'default',
    bordered: true,
    data: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({
      loading: true,
    })
    this.getData();
  }

  getData = () => {
    axios.post('api/postUserInfo', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }).then(res => {
      this.setState({
        data: res.data.data,
        loading: false,
      })
    })
  }

  render() {
    const { loading, data} = this.state
    return (
      <div>
        <CustomBreadcrumb arr={['显示', '列表']}/>
        <Card bordered={false} style={{marginBottom: 10}} id='remoteLoading'>
          <List loading={loading} dataSource={data} style={styles.listStyle} renderItem={item => ( <List.Item>{ item.question }</List.Item> )} />
        </Card>
      </div>
    )
  }
}

const styles = {
  haveBorder: {
    minHeight: 270,
    width:'80%',
    boxSizing: 'border-box'
  },
  noBorder: {
    minHeight: 270,
    width:'80%',
    padding: '0 24px',
    boxSizing: 'border-box',
    border: '1px solid #fff'
  },
  loadMore: {
    height: 32,
    marginTop: 16,
    lineHeight: '32px',
    textAlign: 'center',
  },
  listStyle:{
    width:'80%'
  },
  affixBox:{
    position: 'absolute',
    top: 100,
    right: 50,
    with: 170
  }
}

export default ListDemo