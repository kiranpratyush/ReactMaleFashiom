import { filter } from '../utilityFunctions/filter';
let initialData;
export function reducerfn(previousState, {type,payload}) {
  switch (type) {
    case 'setData':
      initialData = {
        ...previousState,
        data: [
          ...previousState.data,
          {
            id: payload.id,
            itemName: payload.title,
            price: payload.price,
            image: payload.image,
            category: payload.category,
            rating: Number.parseInt(payload.rating),
          },
        ],
      };
      return initialData;
    case "filter":
        console.log(payload)
        console.log(previousState.filterListValue)
        let newFilterListValue = previousState.filterListValue.filter(element=>element.category!==payload.category)
        newFilterListValue =[...newFilterListValue,{category:payload.category,data:payload.data}]
        console.log(newFilterListValue)
        const newData = filter(initialData,newFilterListValue)
        return {...previousState,data:newData,filterListValue:newFilterListValue}


    default:
      return previousState;
  }
}
