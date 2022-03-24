import { collection, getDocs} from 'firebase/firestore';
import { db } from './firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
const productsRef = collection(db, 'Products');
const storage = getStorage()

async function getData(){
    const products = await getDocs(productsRef)
    const productArray = []
    products.forEach(element=>productArray.push({id:element.id,...element.data()}))
    const updatedProductArray = Promise.all(productArray.map(async products=>{
          try{
            const image = products.image
            const path = ref(storage,image)
            const url =await getDownloadURL(path)
            return [{...products,image:url}]
          }
            
          catch(e)
          {
              console.log(e)
          }

        }))
    const array =  await updatedProductArray
    return array
}

export {getData}