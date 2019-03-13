import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

export const requiresAuth = Childcomponent => {
    class Authenticate extends Component {
        componentDidMount() {
            this._checkAndRedirect();
        }

        componentDidUpdate() {
            this._checkAndRedirect();
        }

        _checkAndRedirect() {
            const { auth } = this.props;

            if (!auth.name) {
                this.redirect();
            }
        }
        redirect = () => this.props.history.push('/');
        render = () => (this.props.auth.name ? <Childcomponent {...this.props} /> : null)
    };
    const mapStateToProps = state => {
        return {
            auth: state.auth
        };
    };
    
    return connect(
        mapStateToProps
    )(withRouter(Authenticate));
};
