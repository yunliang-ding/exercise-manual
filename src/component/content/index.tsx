import * as React from "react"
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('UI')
@observer
class Content extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-content'>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <img src='/static/image/icon.svg' style={{height: 200}} />
        <div style={{textAlign: 'center', color: '#444', fontSize: 20, fontWeight: 800, marginTop: 20}}>
          react 后台管理模版 (深色主题)
        </div>
      </div>
    </div>
  }
}
export { Content }