import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

const Home = LoadableComponent(() => import('../../pages/Home/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分


// 表单组件Demo
const EditTableList = LoadableComponent(() => import('../../pages/Table/EditTable'))
const LookTableList = LoadableComponent(() => import('../../pages/Table/LookTable'))
const TreeTableList = LoadableComponent(()=> import('../../pages/Table/TreeTable'))
const RouterTableList = LoadableComponent(()=> import('../../pages/Table/RouterTable'))
const RouterTableItem = LoadableComponent(()=> import ('../../pages/Table/RouterTable/Details'))

//基本组件Demo
const ButtonDemo = LoadableComponent(() => import('../../pages/General/ButtonDemo/index'))
const IconDemo = LoadableComponent(() => import('../../pages/General/IconDemo/index'))

//导航组件Demo
const DropdownDemo = LoadableComponent(() => import('../../pages/Navigation/DropdownDemo/index'))
const MenuDemo = LoadableComponent(() => import('../../pages/Navigation/MenuDemo/index'))
const StepsDemo = LoadableComponent(() => import('../../pages/Navigation/StepsDemo/index'))

//输入组件Demo
const FormDemo1 = LoadableComponent(() => import('../../pages/Entry/FormDemo/FormDemo1'))
const FormDemo2 = LoadableComponent(() => import('../../pages/Entry/FormDemo/FormDemo2'))
const UploadDemo = LoadableComponent(() => import('../../pages/Entry/UploadDemo/index'))

//显示组件Demo
const CarouselDemo = LoadableComponent(() => import('../../pages/Display/CarouselDemo/index'))
const CollapseDemo = LoadableComponent(() => import('../../pages/Display/CollapseDemo/index'))
const ListDemo = LoadableComponent(() => import('../../pages/Display/ListDemo/index'))
const TableDemo = LoadableComponent(() => import('../../pages/Display/TableDemo/index'))
const TabsDemo = LoadableComponent(() => import('../../pages/Display/TabsDemo/index'))

//反馈组件Demo
const SpinDemo = LoadableComponent(() => import('../../pages/Feedback/SpinDemo/index'))
const ModalDemo = LoadableComponent(() => import('../../pages/Feedback/ModalDemo/index'))
const NotificationDemo = LoadableComponent(() => import('../../pages/Feedback/NotificationDemo/index'))

//其它
const AnimationDemo = LoadableComponent(() => import('../../pages/Other/AnimationDemo/index'))
const GalleryDemo = LoadableComponent(() => import('../../pages/Other/GalleryDemo/index'))
const DraftDemo = LoadableComponent(() => import('../../pages/Other/DraftDemo/index'))
const ChartDemo = LoadableComponent(() => import('../../pages/Other/ChartDemo/index'))
const LoadingDemo = LoadableComponent(() => import('../../pages/Other/LoadingDemo/index'))
const ErrorPage = LoadableComponent(() => import('../../pages/Other/ErrorPage/index'))

//关于
const About = LoadableComponent(() => import('../../pages/About/index'))

@withRouter
class ContentMain extends React.Component {
  render() {
    return (
      <div className="qf-content-box">
        <Switch>
          <PrivateRoute exact path='/home' component={Home} />

          <PrivateRoute exact path='/home/table/edit' component={EditTableList} />
          <PrivateRoute exact path='/home/table/look' component={LookTableList} />
          <PrivateRoute exact path='/home/table/tree' component={TreeTableList} />
          <PrivateRoute exact path='/home/table/router' component={RouterTableList} />
          <PrivateRoute exact path='/home/table/router/item/:id' component={RouterTableItem} />

          <PrivateRoute exact path='/home/general/button' component={ButtonDemo} />
          <PrivateRoute exact path='/home/general/icon' component={IconDemo} />

          <PrivateRoute exact path='/home/navigation/dropdown' component={DropdownDemo} />
          <PrivateRoute exact path='/home/navigation/menu' component={MenuDemo} />
          <PrivateRoute exact path='/home/navigation/steps' component={StepsDemo} />

          <PrivateRoute exact path='/home/entry/form/basic-form' component={FormDemo1} />
          <PrivateRoute exact path='/home/entry/form/step-form' component={FormDemo2} />
          <PrivateRoute exact path='/home/entry/upload' component={UploadDemo} />

          <PrivateRoute exact path='/home/display/carousel' component={CarouselDemo} />
          <PrivateRoute exact path='/home/display/collapse' component={CollapseDemo} />
          <PrivateRoute exact path='/home/display/list' component={ListDemo} />
          <PrivateRoute exact path='/home/display/table' component={TableDemo} />
          <PrivateRoute exact path='/home/display/tabs' component={TabsDemo} />

          <PrivateRoute exact path='/home/feedback/modal' component={ModalDemo} />
          <PrivateRoute exact path='/home/feedback/notification' component={NotificationDemo} />
          <PrivateRoute exact path='/home/feedback/spin' component={SpinDemo} />

          <PrivateRoute exact path='/home/other/animation' component={AnimationDemo} />
          <PrivateRoute exact path='/home/other/gallery' component={GalleryDemo} />
          <PrivateRoute exact path='/home/other/draft' component={DraftDemo} />
          <PrivateRoute exact path='/home/other/chart' component={ChartDemo} />
          <PrivateRoute exact path='/home/other/loading' component={LoadingDemo} />
          <PrivateRoute exact path='/home/other/404' component={ErrorPage} />

          <PrivateRoute exact path='/home/about' component={About} />

          <Redirect exact from='/' to='/home' />
        </Switch>
      </div>
    )
  }
}

export default ContentMain
