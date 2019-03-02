import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';

import { loadcars } from '../redux/actions/actioncreators.cars'

class CarsList extends Component {

    state = {
        collapse: false
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        console.log(Object.values(this.props.cars))

        const showelement  = shows => Object.values(shows).length > 0 ? (Object.values(shows)
        .map(show => show.name
        ) + ' ') : 'no show';

        const modelelement = models => Object.values(models).length > 0 ? (Object.values(models)
            .map(model =>
                <CardSubtitle key={model.name}>
                    Model: {model.name}
                    <CardText>{model.name} appeared in {showelement(model.shows)}</CardText>
                </CardSubtitle>

            )) : null;

        const carselement = Object.values(this.props.cars).length > 0 ? Object.values(this.props.cars)
            .map(maker =>
                <Card key={maker.name}>
                    <CardBody>
                        <CardTitle>Make: {maker.name}</CardTitle>
                        {modelelement(maker.models)}
                    </CardBody>
                </Card>
            ) : null;
        return (
            carselement
        );
    }

    componentDidMount() {
        this.props.rendercars();
    }
}

const mapStateToProps = state => ({ cars: state.cars, error: state.error });
const mapDispatchToProps = dispatch => ({ rendercars: () => dispatch(loadcars()) });
export default connect(mapStateToProps, mapDispatchToProps)(CarsList);