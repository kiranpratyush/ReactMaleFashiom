import { filter } from '../export';
export function reducerfn(previousState, { type, payload }) {
  switch (type) {
    case 'SET_DATA':
      return {
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
    case 'FILTER_BY_CATEGORY':
      const categoryFilterList = payload.isChecked
        ? [...previousState.filter.category, payload.value]
        : previousState.filter.category.filter(
            (element) => element !== payload.value
          );
      const filterList = {
        ...previousState.filter,
        category: categoryFilterList,
      };
      console.log(filterList);
      return filter(previousState, filterList);
    case 'FILTER_BY_SORT':
      console.log(payload);
      return filter(previousState, {
        ...previousState.filter,
        price: payload.value,
      });
    case 'FILTER_BY_PRICE_RANGE':
      console.log(previousState);
      return filter(previousState, {
        ...previousState.filter,
        range: payload.value,
      });
    case 'FILTER_BY_RATINGS':
      return filter(previousState, {
        ...previousState.filter,
        ratings: payload.value,
      });
    case 'CLEAR_FILTER':
      return {
        ...previousState,
        filteredData: [],
        filter: { category: [], price: 'NONE', range: 0, ratings: 0 },
      };

    default:
      return previousState;
  }
}
