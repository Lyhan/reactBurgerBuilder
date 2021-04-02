import React, {Component} from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);
            axios.interceptors.request.use(req => {
                this.handleError();
                return req;
            })
            axios.interceptors.response.use(res => res, error => {
                this.handleError(error);
            })
        }

        handleError(error){
            this.setState({error:error || null});
        }

        state = {error: null}

        componentDidMount() {
            // The code added here will run after all children components are rendered
            // If children have error, no error will be handled because axios.interceptors
            // will not be set at the time the error occurs.
            /*
            axios.interceptors.request.use(req => {
                this.handleError();
                return req;
            })
            axios.interceptors.response.use(res => res, error => {
                this.handleError(error);
            })
             */
            // To avoid this use "componentWillMount" (Deprecated) or class constructor

        }
        errorConfirmHandler = ()=> {
        this.setState({error:null})
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClose={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }

    }
}

export default withErrorHandler