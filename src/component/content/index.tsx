import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Table, Button, Select } from 'react-ryui'
import './index.less'
@inject('UI')
@observer
class Content extends React.Component<any, any> {
  [x: string]: any
  props: any
  state: any
  constructor(props) {
    super(props)
    this.state = {
      searchForm: {
        level: -1,
        status: -1
      }
    }
  }
  componentDidMount() {
    this.props.UI.getTopicList()
  }
  render() {
    const {
      topicList,
      searchForm: {
        level,
        type
      },
      setOrderForm
    } = this.props.UI
    const colmun = [{
      label: '序号',
      dataIndex: 'id',
      width: '10%',
      render: (id) => {
        return <span>#{id}</span>
      }
    }, {
      label: <Select
        dark
        style={{
          width: 80,
          height: 30,
          border: 0,
          background: 'inherit',
          marginLeft: -8
        }}
        dataList={[
          {
            label: '全部',
            value: -1
          },
          {
            label: '简单',
            value: 1
          },
          {
            label: '一般',
            value: 2
          },
          {
            label: '复杂',
            value: 3
          }
        ]}
        value={level}
        onChange={
          (e) => {
            this.props.UI.setSearchFormByKey('level', e)
          }
        }
      />,
      width: '10%',
      dataIndex: 'level',
      render: (level) => {
        return <span style={{ color: '#fff', fontSize: 12 }}>{level === 1 ? '简单' : level === 2 ? '一般' : '复杂'}</span>
      }
    }, {
      label: '分类',
      width: '15%',
      sorter: (a, b) => {
        return a.type > b.type ? 1 : -1
      },
      dataIndex: 'type',
      render: (type) => {
        return <span>{type}</span>
      }
    }, {
      label: '题目描述',
      width: '60%',
      dataIndex: 'content'
    }, {
      label: '操作',
      width: '15%',
      dataIndex: 'opeartion',
      render: (value, record) => {
        return [<Button
          onClick={
            () => {
              this.props.UI.setVisible(true)
              this.props.UI.setTopic({ ...record }) // deep
            }
          }
          style={{ width: 80, marginRight: 10 }}
          label='试一试'
          type='primary'
        />, <Button
          onClick={
            () => {
              let result = window.confirm(`不再思考一下，确认打开解析吗?`)
              result && window.open(record.url)
            }
          }
          style={{ width: 80, marginRight: 10 }}
          label='参看解析'
          type='primary'
        />]
      }
    }]
    return <div className='app-content'>
      <Table
        dark
        style={{ height: '100%' }}
        data={topicList}
        colmun={colmun}
        onSort={
          (key, type) => {
            setOrderForm({
              [key]: type
            })
          }
        }
      />
    </div>
  }
}
export { Content }