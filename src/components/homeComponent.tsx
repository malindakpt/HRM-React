
import * as React from 'react';
import ***REMOVED*** DataService ***REMOVED*** from '../DataService';
import ***REMOVED*** Entities ***REMOVED*** from '../Entities/Entities';
import ***REMOVED*** Leave ***REMOVED*** from '../Entities/Leave';
import AppContext from '../Context/AppContext';

export interface UserState ***REMOVED***
    name: string;
***REMOVED***
const HomeComponent: React.FC<UserState> = (props: UserState) => ***REMOVED***
    // console.log(props);
    const l = new Leave(***REMOVED***id: 0***REMOVED***);
    const dataService = new DataService();


    dataService.getEntity(Entities.Leave, ***REMOVED******REMOVED***, ***REMOVED******REMOVED***).then(dat => console.log(dat));
    return (<div>
        <AppContext.Consumer>
            ***REMOVED***(context) => ***REMOVED***
            return <button onClick=***REMOVED***() => dataService.saveEntity(Entities.Leave, l)***REMOVED*** >ADD News ***REMOVED***context.name***REMOVED***</button>
            ***REMOVED******REMOVED***
        </AppContext.Consumer>     
    </div>);
***REMOVED***

export default HomeComponent;