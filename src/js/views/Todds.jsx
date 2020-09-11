import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import avatar1 from '../../img/user_1.jpg';

export default class Todds extends Flux.DashView {
    constructor(){
        super();
        this.state = {
            showModal: false  
        };
    }
    render() {
        return (
            <div className="container">
                <div>
                    <p className="text-right my-3">
                        <Link className="btn btn-success" to="/add">Add new contact</Link>
                    </p>
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <h1> HELLO THIS IS TODDS</h1>
                    </div>
                </div>
                <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
            </div>
        );
    }
}