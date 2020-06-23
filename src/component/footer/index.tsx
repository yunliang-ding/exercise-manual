import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Pagination } from 'react-ryui'
import './index.less'
@inject('UI')
@observer
class Footer extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    const {
      pagination: {
        pageSize,
        current,
        total
      },
      setPagination,
    } = this.props.UI
    return <div className='app-footer'>
      {
        total > 0 && [<Pagination
          current={current}
          pageSize={pageSize}
          total={total}
          dark
          showJumper
          pageSizeOptions={[10,20,30]}
          onPageSizeChange={
            (e) => {
              console.log(e)
            }
          }
          onChange={
            (e) => {
              setPagination('current', e)
            }
          }
        />, <span className='total'>总数 {total}</span>]
      }
    </div>
  }
}
export { Footer }