import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Input, Select } from 'react-ryui'
import { Monaco } from '../monaco/index'
import './index.less'
@inject('UI')
@observer
class TopicDrawer extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    const {
      topic: {
        content,
        level,
        type,
        url,
        code,
        remake,
        id
      },
      setTopicByKey,
      typeList,
      monaco
    } = this.props.UI
    return <div className='app-drawer-box'>
      <div className='app-drawer-box-item'>
        <div className='app-drawer-box-item-left'>
          难度系数
        </div>
        <div className='app-drawer-box-item-right'>
          <Select
            dark
            style={{ width: 300, marginBottom: 16 }}
            placeholder='请选择'
            dataList={[{
              label: '简单',
              value: 1
            }, {
              label: '一般',
              value: 2
            }, {
              label: '复杂',
              value: 3
            }]}
            value={level}
            onChange={
              (e) => {
                setTopicByKey('level', e)
              }
            }
          />
        </div>
      </div>
      <div className='app-drawer-box-item'>
        <div className='app-drawer-box-item-left'>
          分类
        </div>
        <div className='app-drawer-box-item-right'>
          <Select
            dark
            style={{ width: 300, marginBottom: 16 }}
            placeholder='请选择'
            dataList={typeList}
            value={type}
            onChange={
              (e) => {
                setTopicByKey('type', e)
              }
            }
          />
        </div>
      </div>
      <div className='app-drawer-box-item'>
        <div className='app-drawer-box-item-left'>
          参考链接
        </div>
        <div className='app-drawer-box-item-right'>
          <Input
            dark
            value={url}
            onChange={
              (e) => {
                setTopicByKey('url', e.target.value)
              }
            }
          />
        </div>
      </div>
      <div className='app-drawer-box-item'>
        <div className='app-drawer-box-item-left'>
          题目描述
        </div>
        <div className='app-drawer-box-item-right'>
          <Input
            dark
            value={content}
            onChange={
              (e) => {
                setTopicByKey('content', e.target.value)
              }
            }
          />
        </div>
      </div>
      <div className='app-drawer-box-item' style={{height: 'calc(100% - 180px)'}}>
        <div className='app-drawer-box-item-left'>
          代码段
        </div>
        <div className='app-drawer-box-item-right'>
          <Monaco
            theme='vs-dark'
            language={'javascript'}
            value={code}
            onChange={
              (e) => {
                setTopicByKey('code', e)
              }
            }
          />
        </div>
      </div>
    </div>
  }
}
export { TopicDrawer }