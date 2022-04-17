
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
const productsRef = collection(db, 'Products');

const storage = getStorage();

async function getData() {
  const products = await getDocs(productsRef);
  const productArray = [];
  products.forEach((element) =>
    productArray.push({ id: element.id, ...element.data() })
  );
  const updatedProductArray = Promise.all(
    productArray.map(async (products) => {
      try {
        const image = products.image;
        const path = ref(storage, image);
        const url = await getDownloadURL(path);
        return [{ ...products, image: url }];
      } catch (e) {
        console.log(e);
      }
    })
  );
  const array = await updatedProductArray;
  return array;
}

async function setCart(userId, data) {
  console.log("setting",userId)
  const userRef = doc(db, `users/${userId}/cart/${data.id}`);
  console.log(userRef)
  await setDoc(userRef, {
    itemName: data.itemName,
    price: data.price,
    image: data.image,
    quantity: data.quantity,
    id: data.id,
  });
}
async function deleteCart(userId,data)
{
  const userRef = doc(db, `users/${userId}/cart/${data}`);
  await deleteDoc(userRef)
}

async function getCart(userId) {
  const userRef = collection(db, `users/${userId}/cart`);
  const querySnapShot = await getDocs(userRef);
  const data = [];
  querySnapShot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
}
async function getWishList(userId) {
  const userRef = collection(db, `users/${userId}/wishlist`);
  const querySnapShot = await getDocs(userRef);
  const data = [];
  querySnapShot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
}
async function setWishList(userId, data) {
  const userRef = doc(db, `users/${userId}/wishlist/${data.id}`);
  await setDoc(userRef, {
    itemName: data.itemName,
    price: data.price,
    image: data.image,
    id: data.id,
    quantity:data.quantity
  });
}
async function deleteCart(userId,dataId)
{
  const docRef = doc(db,`users/${userId}/cart/${dataId}`)
  await deleteDoc(docRef)
}
async function deleteWishList(userId,dataId)
{
  const docRef = doc(db,`users/${userId}/wishlist/${dataId}`)
  await deleteDoc(docRef)
}
export { getData, getCart, setCart, getWishList, setWishList,deleteWishList,deleteCart };

