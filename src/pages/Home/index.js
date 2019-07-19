import React from 'react'
import { Carousel } from 'antd'
import './style.css'

const imgs = [
  require('./image/true4.jpg'),
  require('./image/true1.jpg'),
  require('./image/true2.jpg'),
  require('./image/true3.jpg')
]

class Home extends React.Component {
  render() {
    return (
      <div style={styles.bg} className='home'>
        <Carousel arrows effect='fade' className='size' autoplay	>
          {imgs.map(item =>
            <div key={item}>
              <div className='size'
                style={{
                  backgroundImage: `url(${item})`,
                  backgroundSize:`cover`,
                  backgroundPosition: `center`

                }} />
            </div>
          )}
          {/*不用img标签是因为图片大小会出现问题*/}
        </Carousel>
      </div>
    )
  }
}

const styles = {
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    // height:'calc(100vh - 64px)'
  }
}

export default Home
