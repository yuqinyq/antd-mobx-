/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-15 14:14:27
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-29 14:55:10
 */
import React, { Component } from 'react'
import { Carousel, Button, WhiteSpace, WingBlank, List } from 'antd-mobile';
import './index.less'


class App extends Component {

  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    slideIndex: 2,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  componentDidUpdate() {
    // After the new child element is rendered, change the slideIndex
    // https://github.com/FormidableLabs/nuka-carousel/issues/327
    if (this.state.slideIndex !== this.state.data.length - 1) {
      /* eslint react/no-did-update-set-state: 0 */
      this.setState({ slideIndex: this.state.data.length - 1 });
    }
  }
  render() {
    return (
      <div>
        <List renderHeader={() => '基本'}>
          <WingBlank className="padding-top-20">
            <Carousel
              autoplay={false}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </List>
        <List renderHeader={() => '带间距'}>
          <WingBlank>
            <Carousel className="space-carousel"
              frameOverflow="visible"
              cellSpacing={10}
              slideWidth={0.8}
              autoplay
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => this.setState({ slideIndex: index })}
            >
              {this.state.data.map((val, index) => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{
                    display: 'block',
                    position: 'relative',
                    top: this.state.slideIndex === index ? -10 : 0,
                    height: this.state.imgHeight,
                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </List>
        <List renderHeader={() => '子元素数量变化'}>
          <WingBlank>
            <Button
              onClick={() => {
                this.setState({
                  data: this.state.data.concat('AiyWuByWklrrUDlFignR'),
                });
              }}
            >Click me to add child</Button>
            <WhiteSpace />
            <Carousel
              autoplay={false}
              infinite
              selectedIndex={this.state.slideIndex}
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map((val, index) => (
                <a
                  key={val + index}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </List>
        <List renderHeader={() => '竖向'} >
          <WingBlank>
            <Carousel className="my-carousel"
              vertical
              dots={false}
              dragging={false}
              swiping={false}
              autoplay
              infinite
            >
              <div className="v-item">carousel 1</div>
              <div className="v-item">carousel 2</div>
              <div className="v-item">carousel 3</div>
            </Carousel>
          </WingBlank>
        </List>
        <List renderHeader={() => '抽奖'} >
          <WingBlank>
            <Carousel className="my-carousel"
              vertical
              dots={false}
              dragging={false}
              swiping={false}
              autoplay
              infinite
              speed={200}
              autoplayInterval={300}
              resetAutoplay={false}
            >
              {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
                <div className="v-item" key={type}>{type}</div>
              ))}
            </Carousel>
          </WingBlank>
        </List>
      </div>
    );
  }
}


export default App
