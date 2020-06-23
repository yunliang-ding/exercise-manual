import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Drawer, Button, Tooltip } from 'react-ryui'
import { TopicDrawer } from './topic-drawer'
import './index.less'
@inject('UI')
@observer
class Header extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  state = {
    visible: false,
    footer: false,
    mask: true,
    closable: true
  }
  render() {
    const {
      visible,
      setVisible,
      topic,
      addOrUpdateTopic
    } = this.props.UI
    return <div className='app-header'>
      <div className='app-header-left'>
        <i className='diaryfont diary-timu'></i>
        <span>Cloud Topic</span>
      </div>
      <div className='app-header-right'>
        <Tooltip
          dark
          title={<span>添加习题</span>}
          placement='bottom'
        >
          <i className='diaryfont diary-jia' onClick={
            () => {
              setVisible(true)
              this.props.UI.setTopic({
                id: null,
                content: '', // 描述
                level: '', // 难度系数
                type: '', // 分类
                url: '', // 参考链接地址
                code: '', //  答题代码
                remake: '' // 评论
              })
            }
          }></i>
        </Tooltip>
      </div>
      <Drawer
        title={topic.id ? '编辑习题' : '新增习题'}
        closable
        dark
        mask
        footer={[
          <Button
            dark
            type='primary'
            label='保存'
            style={{ width: 60 }}
            onClick={
              () => {
                setVisible(false)
                addOrUpdateTopic()
              }
            }
          />,
          <Button
            dark
            label='取消'
            style={{ width: 60 }}
            onClick={
              () => {
                setVisible(false)
              }
            }
          />
        ]}
        visible={visible}
        content={<TopicDrawer />}
        style={{
          width: 820,
          height: 'calc(100% - 50px)'
        }}
        onClose={
          () => {
            setVisible(false)
          }
        }
      />
    </div>
  }
}
export { Header }