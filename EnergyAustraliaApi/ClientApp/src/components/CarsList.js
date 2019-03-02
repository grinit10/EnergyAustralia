import React, { Component } from 'react';
import { connect } from 'react-redux';

import {loadcars} from '../redux/actions/actioncreators.cars'

class CarsList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>In cars list</div>
        );
    }

    componentDidMount() {
        this.props.rendercars();
    }
}

const mapStateToProps = state => ({cars: state.cars, error: state.error});
const mapDispatchToProps = dispatch => ({rendercars: () => dispatch(loadcars())});
export default connect(mapStateToProps, mapDispatchToProps)(CarsList);