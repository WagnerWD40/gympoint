import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import PlanManagement from '../pages/Management/Plan';
import StudentManagement from '../pages/Management/Student';
import RegistryManagement from '../pages/Management/Registry';
import HelpManagement from '../pages/Management/Help';

import StudentRegister from '../pages/Register/Students';
import PlanRegister from '../pages/Register/Plans';
import RegistryRegister from '../pages/Register/Registries';

import StudentEdit from '../pages/Edit/Students';
import PlanEdit from '../pages/Edit/Plans';
import RegistryEdit from '../pages/Edit/Registries';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={SignIn} />
            
            <Route path='/management/students' component={StudentManagement} isPrivate />
            <Route path='/management/plans' component={PlanManagement} isPrivate />
            <Route path='/management/registries' component={RegistryManagement} isPrivate />
            <Route path='/management/help' component={HelpManagement} isPrivate />

            <Route path='/register/students' component={StudentRegister} isPrivate />
            <Route path='/register/plans' component={PlanRegister} isPrivate />
            <Route path='/register/registries' component={RegistryRegister} isPrivate />

            <Route path='/edit/students' component={StudentEdit} isPrivate />
            <Route path='/edit/plans' component={PlanEdit} isPrivate />
            <Route path='/edit/registries' component={RegistryEdit} isPrivate />

            <Route path='/' component={() => <h1>404</h1>} />
        </Switch>
    );
};