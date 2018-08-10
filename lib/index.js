import "./index.css"
import Component from "./component"
import util from "util.vue"
import FaceHeaderLink from "./Link.vue"
const HeaderLink = util.package(FaceHeaderLink)
import FaceHeaderTool from "./Tool.vue"
const HeaderTool = util.package(FaceHeaderTool)

export default util.package(Component)
export { HeaderLink, HeaderTool }
