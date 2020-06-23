import * as React from "react"
import './index.less'
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
class Monaco extends React.Component{
  editor: any
  monacoNode: HTMLElement;
  props: any;
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.UI.MonacoInit(this.monacoNode, {
      language: this.props.language,
      value: this.props.value,
      path: this.props.path,
      theme: this.props.theme
    }, this.props.onChange)
  }
  render() {
    return <div
      className={`app-monaco-editor`}
      ref={(node) => { this.monacoNode = node }}
    />
  }
}
export { Monaco }