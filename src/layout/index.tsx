import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Header, Content, Sider, Footer} from 'component/index'
import './index.less'
@inject('UI')
@observer
class Layout extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-layout'>
      <Sider />
      <div style={{width: 'calc(100% - 240px)'}}>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  }
}
export { Layout }