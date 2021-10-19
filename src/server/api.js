import { collection, getDocs, addDoc, orderBy, query } from 'firebase/firestore'
import { db } from './firebase'

export const fetchData = async (nameList) => {
  const collectionList = collection(db, nameList)
  const order = query(collectionList, orderBy('createAt', 'asc'))
  const snapshotList = await getDocs(order)
  const dataList = snapshotList.docs.map(doc => {
    let data = doc.data()
    let id = doc.id
    return { id, ...data }
  })
  return dataList
}

export const addData = async (nameList, obj) => {
  await addDoc(collection(db, nameList), obj)
}