import React from 'react'

export default ToggleItem => class NewComponent extends React.Component {
    state = {
        itemIsOpen: false
    }

    toggleItem = itemIsOpen => this.setState({ itemIsOpen: !this.state.itemIsOpen})

    render() {
        return(
            <ToggleItem {...this.props}
                            isOpen = {this.state.itemIsOpen}
                            toggleItem = {this.toggleItem}
            />
        )
    }
}