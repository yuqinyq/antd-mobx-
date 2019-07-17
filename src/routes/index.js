/**
 * @Description: 项目路由控制
*/
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { menus } from '../constants';

class ContentRoutes extends Component {

  constructor(props){
    super(props);
    this.arr = []
    this.cacheList = []
  }

  getContentRutes = data =>
    data &&
    data.length &&
    data.map(item => {
      if (item.component) {
        if (!this.cacheList.includes(item.key)) {
          this.cacheList.push(item.key)
          this.arr.push(
            <Route
              exact={!item.noexact}
              path={item.key}
              key={item.key}
              component={item.component}
            />
          )
        }
      }
      if (item.sub && item.sub.length) {
        return this.getContentRutes(item.sub)
      }
      // console.log(this.arr);
      return this.arr
    })
  componentWillUnmount() {
    this.arr = null;
  }

  render() {
    return (
      <Switch>
        {
          this.getContentRutes(menus)
        }
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    );
  }
}

export default ContentRoutes;
