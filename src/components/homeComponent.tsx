import * as React from 'react';
import { DataService } from '../DataService';
import { Entities } from '../Entities/Entities';
import AppContext from '../Context/AppContext';
import { User } from '../Entities/User';

export interface UserState {
    name: string;
}
const HomeComponent: React.FC<UserState> = (props: UserState) => {
    // console.log(props);
    const l = new User({name: 'Malinda K', userName: 'kumarsinghe@axinom.com', accountIdentifier: 'b75aed0a-2d70-4196-baaa-583dd46e52b1'});
    console.log('pp',l);
    const dataService = DataService.getInstance();


    dataService.getEntity(Entities.User, {}, {}).then(dat => console.log(dat));
    return (<div>
        <AppContext.Consumer>
            {(context) => {
            return <button onClick={() => dataService.saveEntity(Entities.User, l)} >ADD News {context.name}</button>
            }}
        </AppContext.Consumer>     
    </div>);
}

export default HomeComponent;