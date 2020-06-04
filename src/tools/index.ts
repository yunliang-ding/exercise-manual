// 判断资源是否已经加载
const Window: any = window
const getMonaco = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      Window.monaco ? resolve(Window.monaco) : resolve(getMonaco()) // resolve一下这个async 否则得不到
    }, 500)
  })
}
export {
  getMonaco
}