import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacts from "./views/Contacts.jsx";
import AddContact from "./views/AddContact.jsx";
import Todds from "./views/Todds.jsx";

export default class Layout extends Flux.DashView {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/index.html" component={Contacts} />
                            <Route exact path="/" component={Contacts} />
                            <Route exact path="/contacts" component={Contacts} />
                            <Route exact path="/add" component={AddContact} />
                            <Route exact path="/edit" component={AddContact} />
                            <Route exact path="/todds" component={Todds} />
                            <Route render={() => <h1 className="notfound">Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
