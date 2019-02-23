import React from 'react';

class DescribeComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    state = { showing: false };
    render() {
        const { showing } = this.state;
        return (
            <div>
            <div onClick={() => this.setState({ showing: !showing })}>{this.props.shortText}</div>
        { showing
            ? <div className="">
            {this.props.longText}
            </div>
        : null
        }
    </div>
    );
    }
}

export default DescribeComponent;