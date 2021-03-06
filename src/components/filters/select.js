import React, { Component } from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    state = {
        selected: null
    }

    handleChange = selected => this.setState({ selected })

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.state.selected}
            onChange={this.handleChange}
            multi
        />
    }
}

export default SelectFilter