import * as React from "react"
import { observer, inject } from 'mobx-react'
import { getMonaco } from '../../tools/index'
import './index.less'
@inject('UI')
@observer
class Content extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  createModel = async () => {
    const monaco:any = await getMonaco()
    monaco.editor.create(document.querySelector('.app-content'), {
      value: [
        'function start() {',
        '\tconsole.log("Hello world!");',
        '}'
      ].join('\n'),
      language: 'javascript',
      theme: 'vs-dark',
      selectOnLineNumbers: true,
      automaticLayout: true,
      fontSize: 12,
      tabSize: 2,
      fontWeight: "400",
      minimap: {
        enabled: false
      }
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
export { Content }