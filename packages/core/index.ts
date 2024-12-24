import { makeInstaller } from "@yvan-element/utils"
import components from "./components"
import "@yvan-element/theme/index.css"
const installer = makeInstaller(components);

export * from "@yvan-element/components";
export default installer;
