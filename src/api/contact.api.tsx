import firebaseConfig from "../../firebaseConfig";
import { getDatabase, ref, push, set } from "firebase/database";
import firebase from "firebase/compat/app";

const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const contactButton = async (
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  try {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const phoneRegex = /^(\+)?(?:[0-9]●?){6,14}[0-9]$/;

    const data: Record<string, string> = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    for (let key in data) {
      if (!data[key]) {
        throw new Error(`Empty ${key}. Please fill in the ${key}.`);
      }
    }

    if (typeof name !== "string" || name.length < 5) {
      throw new Error(`Enter a longer name`);
    }

    if (!emailRegex.test(email)) {
      throw new Error("Invalid email address");
    }

    if (!phoneRegex.test(phone)) {
      throw new Error("Invalid phone number");
    }

    initializeFirebase();

    const database = getDatabase();
    const contactInfoRef = ref(database, "Clients Info");
    const newContactInfoRef = push(contactInfoRef);

    set(newContactInfoRef, {
      ...data,
    });

    return null;
  } catch (error: any) {
    console.log(error);
    throw {
      message: error.message,
    };
  }
};
