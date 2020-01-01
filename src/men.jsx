import React from 'react'
import Select from './select'
import Inputs from './input'

export default class Men extends React.Component{
    state = {
        users: [],
        showContent:false
    }
    constructor(props) {
        super(props)
        this.handleOk = this.handleOk.bind(this)
    }
    handleOk(users) {
        this.setState({
            users,
            showContent:true
        })

    }
    render() {
        return <div className='men'>
            {this.state.showContent ? <Inputs users={this.state.users}/> : <Select handleOk={this.handleOk}/>}
        </div>
    }
}