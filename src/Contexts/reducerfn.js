import { filter } from '../utilityFunctions/filter';
let initialData;
export function reducerfn(previousState, {type,payload}) {
  switch (type) {
    case 'SET_DATA':
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
    case "FILTER":
        let newFilterListValue = previousState.filterListValue.filter(element=>element.category!==payload.category)
        newFilterListValue =[...newFilterListValue,{category:payload.category,data:payload.data}]
        const newData = filter(initialData,newFilterListValue)
        return {...previousState,data:newData,filterListValue:newFilterListValue}
    case "CLEAR_FILTER":
      return {...initialData}

    default:
      return previousState;
  }
}
