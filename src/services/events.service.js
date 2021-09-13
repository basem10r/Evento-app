import firebase from "../utilities/firebase";

const db = firebase.firestore().collection("events");

const EventsDataService = {
    getAll() {
        return db.get();
    },
    getCurrent(id) {
        return db.doc(id).get();
    },
    create(event) {
        return db.add(event);
    },
    update(id, value) {
        return db.doc(id).update(value);
    },
    delete(id) {
        return db.doc(id).delete();
    }
}
export default EventsDataService;