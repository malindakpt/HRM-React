// const firebase = require("firebase");
import firebase from "firebase";
import ***REMOVED*** Entities ***REMOVED*** from "./Entities/Entities";
import ***REMOVED*** Entity ***REMOVED*** from "./Entities/Entity";

const config = ***REMOVED***
  // apiKey: YOUR_API_KEY,
  // authDomain: YOUR_AUTH_DOMAIN,
  // databaseURL: YOUR_DATABASE_URL,
  // projectId: YOUR_PROJECT_ID,
  // storageBucket: '',
  // messagingSenderId: YOUR_MESSAGING_SENDER_ID,

  apiKey: "AIzaSyAiYdNndsn7mssf9lzc5Sua8rJ3FJzfScY",
  authDomain: "axinom-hr.firebaseapp.com",
  databaseURL: "https://axinom-hr.firebaseio.com",
  projectId: "axinom-hr",
  storageBucket: "axinom-hr.appspot.com",
  messagingSenderId: "913528455228",
  appId: "1:913528455228:web:1488ca4f54c47182688339",
  measurementId: "G-CZGCVEBQ7X"
***REMOVED***;

export class DataService ***REMOVED***
  public db: any;

  constructor() ***REMOVED***
    // this.application = admin.initializeApp(config);
    firebase.initializeApp(config);
    this.db = firebase.firestore();
    // console.log('Intialized', this.application);
  ***REMOVED***

  addEntity() ***REMOVED***
    this.db
      .collection("users")
      .add(***REMOVED***
        first: "Ada",
        last: "Lovelace",
        born: 1815
      ***REMOVED***)
      .then(function(docRef: any) ***REMOVED***
        console.log("Document written with ID: ", docRef.id);
      ***REMOVED***)
      .catch(function(error: any) ***REMOVED***
        console.error("Error adding document: ", error);
      ***REMOVED***);
  ***REMOVED***

  public saveEntity(
    entityNme: Entities,
    entity: Entity,
    successMessage?: string
  ): Promise<any> ***REMOVED***
    // Display network error message
    const requestStatus = ***REMOVED*** isCompleted: false ***REMOVED***;
    // this.startTimeoutToCheckDelay(requestStatus, "Saving " + entityNme);

    // Calls to firebase DB
    this.busyOn();
    const ref = this.db.collection(entityNme);

    return new Promise((resolves, reject) => ***REMOVED***
      ref.add(JSON.parse(JSON.stringify(entity)))
        .then(() => ***REMOVED***
          this.busyOff();
          if (successMessage) ***REMOVED***
            alert(successMessage);
          ***REMOVED***
          requestStatus.isCompleted = true;
          console.log("Document successfully written!");
          resolves();
        ***REMOVED***)
        .catch(error => ***REMOVED***
          this.busyOff();
          requestStatus.isCompleted = true;
          console.error("Error writing document: ", error);
          reject();
        ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***

  /**
   *
   * @param entityName
   * @param conditions ***REMOVED***value: '>25'***REMOVED***, ***REMOVED***name: 'Malinda'***REMOVED***
   * @param orderBy orderBy('population', 'desc'); orderBy('population', 'asc');
   * @param skipBusy
   */
  public getEntity(
    entityName: Entities,
    conditions: Object,
    orderBy: Object,
    skipBusy?: boolean
  ): Promise<any> ***REMOVED***
    console.log("Requesting entity: " + entityName);
    // Display network error message
    const requestStatus = ***REMOVED*** isCompleted: false ***REMOVED***;

    // Calls to firebase DB
    if (!skipBusy) ***REMOVED***
      this.busyOn();
    ***REMOVED***
    return new Promise((resolves, reject) => ***REMOVED***
      // For future use of deletion of entity
      let query = this.db
        .collection(entityName);

      Object.keys(conditions).forEach((key, index) => ***REMOVED***
        if (
          typeof conditions[key] === "string" &&
          (conditions[key].includes(">") || conditions[key].includes("<"))
        ) ***REMOVED***
          query = query.where(
            key,
            conditions[key].charAt(0),
            conditions[key].substring(1)
          );
        ***REMOVED*** else if (key === "limit") ***REMOVED***
          query = query.limit(conditions[key]);
        ***REMOVED*** else if (Array.isArray(conditions[key])) ***REMOVED***
          query = query.where(key, "array-contains", conditions[key][0]);
        ***REMOVED*** else ***REMOVED***
          query = query.where(key, "==", conditions[key]);
        ***REMOVED***
      ***REMOVED***);

      Object.keys(orderBy).forEach((key, index) => ***REMOVED***
        query = query.orderBy(key, orderBy[key]);
      ***REMOVED***);

      const results = [];
      query
        .get()
        .then(querySnapshot => ***REMOVED***
          querySnapshot.forEach((doc: any) => ***REMOVED***
            const v = doc.data();
            v.id = doc.id;
            results.push(v);
          ***REMOVED***);
          this.busyOff();
          requestStatus.isCompleted = true;
          resolves(results);
        ***REMOVED***)
        .catch(error => ***REMOVED***
          requestStatus.isCompleted = true;
          console.log("Error getting documents: ", error);
          this.busyOff();
          resolves(null);
        ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***

  
  public busyOn(): void ***REMOVED***
    // document.getElementById("overlay").style.display = "block";
  ***REMOVED***

  public busyOff(): void ***REMOVED***
    // document.getElementById("overlay").style.display = "none";
  ***REMOVED***
***REMOVED***
