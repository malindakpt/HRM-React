// const firebase = require("firebase");
import firebase from "firebase";
import { Entities } from "./Entities/Entities";
import { Entity } from "./Entities/Entity";

const config = {
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
};

export class DataService {
  public db: any;
  private static instance: DataService;

  public static getInstance(): DataService {
    if (!this.instance){
      this.instance = new DataService();
    }
    return this.instance;
  }

  private constructor() {
    // this.application = admin.initializeApp(config);
    firebase.initializeApp(config);
    this.db = firebase.firestore();
    // console.log('Intialized', this.application);
  }

  // addEntity() {
  //   this.db
  //     .collection("users")
  //     .add({
  //       first: "Ada",
  //       last: "Lovelace",
  //       born: 1815
  //     })
  //     .then(function(docRef: any) {
  //       console.log("Document written with ID: ", docRef.id);
  //     })
  //     .catch(function(error: any) {
  //       console.error("Error adding document: ", error);
  //     });
  // }

  public saveEntity(
    entityNme: Entities,
    entity: Entity,
    successMessage?: string
  ): Promise<any> {

    console.log(entity);
    // Display network error message
    const requestStatus = { isCompleted: false };
    // this.startTimeoutToCheckDelay(requestStatus, "Saving " + entityNme);

    // Calls to firebase DB
    this.busyOn();
    const ref = this.db.collection(entityNme);

    return new Promise((resolves, reject) => {
      ref.add(JSON.parse(JSON.stringify(entity)))
        .then(() => {
          this.busyOff();
          if (successMessage) {
            alert(successMessage);
          }
          requestStatus.isCompleted = true;
          console.log("Document successfully written!");
          resolves();
        })
        .catch(error => {
          this.busyOff();
          requestStatus.isCompleted = true;
          console.error("Error writing document: ", error);
          reject();
        });
    });
  }

  /**
   *
   * @param entityName
   * @param conditions {value: '>25'}, {name: 'Malinda'}
   * @param orderBy orderBy('population', 'desc'); orderBy('population', 'asc');
   * @param skipBusy
   */
  public getEntity(
    entityName: Entities,
    conditions: Object,
    orderBy: Object,
    skipBusy?: boolean
  ): Promise<any> {
    console.log("Requesting entity: " + entityName);
    // Display network error message
    const requestStatus = { isCompleted: false };

    // Calls to firebase DB
    if (!skipBusy) {
      this.busyOn();
    }
    return new Promise((resolves, reject) => {
      // For future use of deletion of entity
      let query = this.db
        .collection(entityName);

      Object.keys(conditions).forEach((key, index) => {
        if (
          typeof conditions[key] === "string" &&
          (conditions[key].includes(">") || conditions[key].includes("<"))
        ) {
          query = query.where(
            key,
            conditions[key].charAt(0),
            conditions[key].substring(1)
          );
        } else if (key === "limit") {
          query = query.limit(conditions[key]);
        } else if (Array.isArray(conditions[key])) {
          query = query.where(key, "array-contains", conditions[key][0]);
        } else {
          query = query.where(key, "==", conditions[key]);
        }
      });

      Object.keys(orderBy).forEach((key, index) => {
        query = query.orderBy(key, orderBy[key]);
      });

      const results = [];
      query
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach((doc: any) => {
            const v = doc.data();
            v.id = doc.id;
            results.push(v);
          });
          this.busyOff();
          requestStatus.isCompleted = true;
          resolves(results);
        })
        .catch(error => {
          requestStatus.isCompleted = true;
          console.log("Error getting documents: ", error);
          this.busyOff();
          resolves(null);
        });
    });
  }

  
  public busyOn(): void {
    // document.getElementById("overlay").style.display = "block";
  }

  public busyOff(): void {
    // document.getElementById("overlay").style.display = "none";
  }
}
