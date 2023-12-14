import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './Components/Landing';
import Pricing from './Components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

export default ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={ history }>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route exact path="/" component={Landing} />
                </Switch>
            </Router>    
        </StylesProvider>
    </div>
}