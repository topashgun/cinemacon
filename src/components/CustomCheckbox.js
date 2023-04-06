import React, { Component } from 'react'

export default class CustomCheckBox extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className='checkbox-container'>
                <div className="input-group">
                    <label>
                        <input
                            type="checkbox"
                            className="checkbox_input"
                            checked={this.props.checked}
                            onChange={this.props.handleChange}
                        />
                        <span
                            className="React__checkbox--span"
                        />
                        {this.props.label}
                    </label>
                </div>
            </div>
        )
    }
}
