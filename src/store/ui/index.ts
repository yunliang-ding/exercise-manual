import { observable, action, runInAction } from 'mobx'
import { post, get } from '../../axios/index'
import { Message } from 'react-ryui'
import { getMonaco } from '../../tools/index'
const option: any = {
  selectOnLineNumbers: true,
  automaticLayout: true,
  fontSize: 12,
  tabSize: 2,
  fontWeight: "400",
  minimap: {
    enabled: false
  }
}
const message = new Message({
  duration: 3,
  dark: true
})
class UI {
  @observable loading = false
  @observable visible = false
  @observable topic = {
    id: null,
    content: '', // 描述
    level: '', // 难度系数
    type: '', // 分类
    url: '', // 参考链接地址
    code: '', //  答题代码
    remake: '' // 评论
  }
  @observable typeList = [{
    label: 'javascript',
    value: 'javascript'
  }, {
    label: 'css',
    value: 'css'
  }, {
    label: 'html',
    value: 'html'
  }]
  @observable topicList = []
  @observable pagination = {
    pageSize: 10,
    current: 1,
    total: 0
  }
  @observable searchForm = {
    level: -1,
    type: -1
  }
  @observable orderForm = {
    order: {
      id: 'desc'
    }
  }
  @action setOrderForm = (order) => {
    this.orderForm.order = order
    this.getTopicList()
  }
  @action setSearchFormByKey = (key: string, value: number): void => {
    this.searchForm[key] = value
    this.getTopicList()
  }
  @action setPagination = (key: string, value: number): void => {
    this.pagination[key] = value
    this.getTopicList()
  }
  @action setTopicByKey = (key: string, value: any): void => {
    this.topic[key] = value
  }
  @action setLoading = (loading: boolean): void => {
    this.loading = loading
  }
  @action setVisible = (visible: boolean) => {
    this.visible = visible
  }
  @action setTopic = (topic) => {
    this.topic = topic
  }
  @action addOrUpdateTopic = async (topicEntity) => {
    topicEntity = topicEntity || this.topic
    const { code, insertId } = await post('/api/topic/saveorupdate', topicEntity, {})
    if (code === 200) {
      runInAction(() => {
        if (topicEntity.id === null) { // new
          topicEntity.id = insertId
          this.topicList.unshift(topicEntity)
          this.pagination.total += 1
          this.topicList = [...this.topicList] // render
        } else { // update
          this.topicList = this.topicList.map(topic => {
            return topic.id === topicEntity.id ? topicEntity : topic
          })
        }
      })
      message.success('保存成功!')
    } else {
      message.error('保存失败!')
    }
  }
  @action getTopicList = async () => {
    const { code, data } = await get('/api/topic/list', Object.assign({}, this.orderForm, this.searchForm, this.pagination))
    if (code !== 200) {
      message.error('查询习题列表异常!')
    } else {
      runInAction(() => {
        this.pagination.total = data.count
        this.topicList = data.data
      })
    }
  }
  @action deleteTopic = async (topicId) => {
    const { code } = await post('/api/topic/delete', {
      id: topicId
    }, {})
    if (code !== 200) {
      message.error(`习题编号(${topicId})删除异常!`)
    } else {
      message.success(`习题编号(${topicId})已删除!`)
      runInAction(() => {
        this.topicList = this.topicList.filter(topic => {
          return topic.id !== topicId
        })
        this.pagination.total -= 1
      })
    }
  }
  @action clearTopicList = () => {
    this.topicList = []
  }
  /**
    编辑器相关
   */
  @observable monaco;
  @action initMonaco = async () => {
    this.monaco = await getMonaco()
  }
  /**
   * 负责一个文件打开之后 所有 Monaco初始化的工作
   */
  @action MonacoInit = (dom, options, onChange): void => {
    let editorMonaco: any = this.monaco.editor.create(dom, Object.assign(options, option))
    editorMonaco.onDidChangeModelContent(() => { // onChange 事件
      onChange(editorMonaco.getValue())
    })
  }
}
const ui = new UI()
export {
  ui
}