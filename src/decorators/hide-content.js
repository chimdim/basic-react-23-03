import React from 'react'

export default ToggleComment => class NewComponent extends React.Component {
    state = {
        itemIsOpen: false
    }

    toggleItem = itemIsOpen => this.setState({ itemIsOpen: !this.state.itemIsOpen})

    render() {
        return(
          <div>
            <ToggleComment {...this.props}
                            isOpen = {this.state.itemIsOpen}
                            toggleItem = {this.toggleItem}
            />
          </div>
        )
    }
}