import * as React from "react"
import { observer, inject } from 'mobx-react'
import { getMonaco } from '../../tools/index'
import './index.less'
@inject('UI')
@observer
class Detail extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  createModel = async () => {
    const monaco:any = await getMonaco()
    monaco.editor.create(document.querySelector('.app-content'), {
      value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}'
      ].join('\n'),
      language: 'javascript',
      theme: 'vs-dark'
    })
  }
  componentDidMount() {
    this.createModel()
  }
  render() {
    return <div className='app-content'>
    </div>
  }
}
export { Detail }