import { firestore } from "./firebase";

const db = firestore.collection("/favorites");

const getAll = () => {
  return db;
};

const create = (data) => {
  return db.add(data);
};

const update = (id, value) => {
  return db.doc(id).update(value);
};

const remove = (id) => {
  return db.doc(id).delete();
};

const getFavoriteByUserEmail = (email) => {
  return db.where('email_user', '==', email).get().then((querySnapshot) => {
      const userFavorite = [];
      querySnapshot.forEach((doc) => userFavorite.push({  id: doc.id, ...doc.data() }));
      return userFavorite;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

};


const DataServiceFavorite = {
  getAll,
  create,
  update,
  remove,
  getFavoriteByUserEmail
};

export default DataServiceFavorite;

