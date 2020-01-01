import React from 'react'
import { Checkbox, List, Button, WingBlank, WhiteSpace } from "antd-mobile";


const CheckboxItem = Checkbox.CheckboxItem;
const data = [
    { value: 0, label: '阿棒' },
    { value: 1, label: '阿铭' },
    { value: 2, label: '小P' },
    { value: 3, label: '萍萍' },
    { value: 4, label: '夏婷' },
    { value: 5, label: '大B' },
    { value: 6, label: '牛羊' },
    { value: 7, label: '妹纸' },
    { value: 8, label: '阿桑' },
    { value: 9, label: '赌神' },
    { value: 10, label: '王准' },
    { value: 11, label: '小敏' },
    {
        value: 12, label: '冬冬'
    }

];
export default class Select extends React.Component {
    res = new Array(data.length)
    onChange(e, i) {
        const checked = e.target.checked
        if (checked) {
            this.res[i.value] = i
        } else {
            this.res[i.value] = null
        }
        console.log(this.res)
    }
    render() {
        return <div>
            <List renderHeader={() => '选择玩家'}>
                {data.map(i => (
                    <CheckboxItem key={i.value} onChange={(e) => this.onChange(e, i)}>
                        {i.label}
                    </CheckboxItem>
                ))}
            </List>
            <WhiteSpace size='xl'></WhiteSpace>
            <WingBlank> <Button type="primary" onClick={() => { this.props.handleOk(this.res) }}>选好了</Button></WingBlank>
        </div>
    }

}