import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarsList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>In cars list</div>
        );
    }
}

const mapStateToProps = state => ({cars: state.cars, error: state.error});
export default connect(mapStateToProps)(CarsList);