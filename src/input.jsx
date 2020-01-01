import React from "react";
import { List, InputItem, WingBlank, WhiteSpace, Flex, Button } from 'antd-mobile'

export default class Inputs extends React.Component {
    data = []

    constructor(props) {
        super(props)
        this.nextRound = this.nextRound.bind(this)
        this.done = this.done.bind(this)
        this.onChange = this.onChange.bind(this)
        debugger
        let tmpVal = {}
        let users = this.props.users.filter((user) => { return !!user }).map((u, i) => {
            tmpVal[i] = null
            return {
                value: i,
                label: u.label
            }
        })
        this.state = {
            tmpVal,
            tmpRes: {},
            users,
            lastRound: {}
        }
    }
    nextRound() {
        // 下一轮
        debugger
        let tmpRes = this.state.tmpRes
        let tmpVal = this.state.tmpVal
        let lastRound = {}
        let sum = 0
        Object.keys(tmpVal).forEach((tmp) => {
            let v = tmpVal[tmp]
            if (v !== undefined && v !== null) {
                sum += v
            }
        })
        // 计算本轮结果
        Object.keys(tmpVal).forEach((tmp) => {
            let v = tmpVal[tmp]
            if (v === undefined || v === null) {
                tmpVal[tmp] = -sum
            }
        })
        lastRound = Object.assign(lastRound, tmpVal)
        // 计算暂时结果
        Object.keys(tmpVal).forEach(k => {
            if (tmpRes[k]) {
                tmpRes[k] -= tmpVal[k]
            } else {
                tmpRes[k] = -tmpVal[k]
            }

        })
        Object.keys(tmpVal).forEach(k => {
            tmpVal[k] = null

        })
        this.setState({
            tmpRes,
            tmpVal,
            lastRound
        })
    }
    done() {
        // 结算
        debugger
    }
    onChange(v, user) {
        debugger
        this.setState({
            tmpVal: Object.assign(this.state.tmpVal, { [user.value]: Number(v) })
        })
    }
    render() {
        debugger

        return <WingBlank><List renderHeader={() => '输入'}>
            {
                this.state.users.map((user, index) => (<InputItem value={this.state.tmpVal[index]} placeholder='本局输的金额，赢的人不填' onChange={(v) => { this.onChange(v, user) }} key={user.value}>{user.label}</InputItem>))
            }
        </List>
            <WhiteSpace size='xl' />
            <Flex justify='between'> <Button style={{
                width: '40%'
            }} type="primary" onClick={this.nextRound} inline>下一把</Button><Button style={{
                width: '40%'
            }} type="primary" inline>结算</Button></Flex>
            <List renderHeader={() => '上轮结果'}>
                {
                    this.state.users.map((user, index) => (<InputItem editable={false} value={this.state.lastRound[index]} placeholder='结果展示' onChange={(v) => { this.onChange(v, user) }} key={user.value}>{user.label}</InputItem>))
                }
            </List>
            <List renderHeader={() => '暂时结果'}>
                {
                    this.state.users.map((user, index) => (<InputItem editable={false} value={this.state.tmpRes[index]} placeholder='结果展示' onChange={(v) => { this.onChange(v, user) }} key={user.value}>{user.label}</InputItem>))
                }
            </List>
        </WingBlank>
    }
}