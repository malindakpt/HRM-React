
import * as React from 'react';
import { DataService } from '../DataService';
import { Entities } from '../Entities/Entities';
import { Leave } from '../Entities/Leave';
import AppContext from '../Context/AppContext';

export interface UserState {
    name: string;
}
const HomeComponent: React.FC<UserState> = (props: UserState) => {
    // console.log(props);
    const l = new Leave({id: 0});
    const dataService = new DataService();


    dataService.getEntity(Entities.Leave, {}, {}).then(dat => console.log(dat));
    return (<div>
        <AppContext.Consumer>
            {(context) => {
            return <button onClick={() => dataService.saveEntity(Entities.Leave, l)} >ADD News {context.name}</button>
            }}
        </AppContext.Consumer>     
    </div>);
}

export default HomeComponent;