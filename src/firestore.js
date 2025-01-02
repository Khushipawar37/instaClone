import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();

async function addUser(userId, userData) {
  try {
    await setDoc(doc(db, "users", userId), userData);
    console.log("User added!");
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

export { addUser };
