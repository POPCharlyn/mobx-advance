/*
 * 2022/7/14 下午1:56
 * author: francesca
 * email: 575525869@qq.com
 * Form.js
 */
import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    render() {
        const { name, job } = this.state
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={ name }
                    onChange={ this.handleChange }
                />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={ job }
                    onChange={ this.handleChange }
                />
            </form>
        )
    }

    handleChange = ( event ) => {
        const { name, value } = event.target

        this.setState( {
            [ name ]: value,
        } )
    }
}

export default Form
