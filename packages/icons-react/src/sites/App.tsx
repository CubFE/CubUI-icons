import '../style_iconfont.scss'
import Add from '../components/Add'
import icons from "../../../../iconfont/config.json"
import {Icon, Cell, CellGroup, Toast,} from '@cubui/cubui-react'


const generateCopyText = (name: string) => {
    return `<Icon name="${name}"></Icon>`
}
const generateAMCopyText = (icon: any) => {
    return `
  <Icon name="${icon.name}"
    className="${`cub-icon-${icon['animation-name']}  cub-icon-${icon['animation-time']}`}"/>`
}
const copyTag = (text: string) => {
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.setAttribute('value', text)
    input.select()
    if (document.execCommand('copy')) {
        document.execCommand('copy')
        Toast.text(`Copy: ${text}`)
    }
    document.body.removeChild(input)
}

const style = `
.cub-cell > .cubui-iconfont {
  margin-right: 10px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
}
ul li {
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
ul li  span {
  height: 40px;
  font-size: 12px;
  text-align: center;
}
ul li span .cubui-iconfont {
  margin: 16px 0 16px;
}
`

function App() {

    return (
        <div className="App">
            <Add width="100"
                 height="100"/>

            <style>{style}</style>
            <div className="demo">
                <h2>基础用法</h2>
                <Cell>
                    <Icon name="shop"/>
                    <Icon name="douyin1"/>
                </Cell>
                <h2>图片链接</h2>
                <Cell>
                    <Icon
                        size="40"
                        name="https://oss.netconcepts.cn/website/wap/job-wap-icon-1.png"
                    />
                </Cell>
                <h2>图标颜色</h2>
                <Cell>
                    <Icon name="dongdong" color="#fa2c19"/>
                    <Icon name="dongdong" color="#64b578"/>
                    <Icon name="JD" color="#fa2c19"/>
                </Cell>
                <h2>图标大小</h2>
                <Cell style={{alignItems: 'center'}}>
                    <Icon name="dongdong" size="16"/>
                    <Icon name="dongdong" size="20"/>
                    <Icon name="dongdong" size="24"/>
                </Cell>
                {icons.data.map((item, index) => {
                    return (
                        <CellGroup key={index} title={item.name}>
                            <Cell>
                                <ul>
                                    {item.icons.map((icon) => {
                                        return (
                                            <li
                                                key={icon}
                                                onClick={() => copyTag(generateCopyText(icon))}
                                            >
                                                <Icon name={icon}/>
                                                <span>{icon}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </Cell>
                        </CellGroup>
                    )
                })}
                {icons.style.map((item, index) => {
                    return (
                        <CellGroup key={index} title={item.name}>
                            <Cell>
                                <ul>
                                    {item.icons.map((icon) => {
                                        return (
                                            <li
                                                key={icon.name}
                                                onClick={() => copyTag(generateAMCopyText(icon))}
                                            >
                                                <Icon
                                                    name={icon.name}
                                                    className={`cub-icon-${icon['animation-name']}  cub-icon-${icon['animation-time']}`}
                                                />
                                                <span>{icon['animation-name']}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </Cell>
                        </CellGroup>
                    )
                })}
            </div>
        </div>
    )
}

export default App
