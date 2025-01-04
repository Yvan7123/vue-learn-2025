import { makeInstaller } from '@yvan-element/utils'
import components from './components'
import '@yvan-element/theme/index.css'
const installer = makeInstaller(components)
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export * from '@yvan-element/components'
export default installer
