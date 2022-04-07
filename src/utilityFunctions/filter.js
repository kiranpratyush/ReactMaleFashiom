// Helper function to filter By category List
function filterByLowToHigh(data) {
  console.log(data)
  const filteredData = [...data];
  filteredData.sort((item1, item2) => item1.price - item2.price);
  console.log(filteredData)
  return filteredData;
}
function filterByHighToLow(data) {
  const filterdData = [...data];
  filterdData.sort((item1, item2) => item2.price - item1.price);
  return filterdData;
}
function filterByCategoryList(categoryList, data) {
  let filteredData = [];
  for (const category of categoryList) {
    filteredData = [
      ...filteredData,
      ...data.filter((element) => element.category === category),
    ];
  }
  return filteredData.length > 0 ? filteredData : data;
}

function filterByPriceRange(range, data) {
  if(range<=0)
  {
    return data
  }
  return data.filter((element) => element.price <= range);
}
function filterByRating(rating, data) {
  return data.filter((element) => element.rating >= rating);
}
export function filter(state, filterList) {
  let newData = [...state.data];
  for (let filter in filterList) {
    if (filter === 'category') {
      newData = filterByCategoryList(filterList[filter], newData);
      console.log(newData);
    }
    if (filter === 'price') {
      if (filterList[filter] === 'ASC') {
        newData = filterByLowToHigh(newData);
      } else if (filterList[filter] === 'DESC') {
        newData = filterByHighToLow(newData);
      }
      console.log(newData);
    }
    if (filter === 'range') {
      newData = filterByPriceRange(parseInt(filterList[filter]), newData);
    }
    if (filter === 'ratings') {
      newData = filterByRating(filterList[filter], newData);
    }
  }
  console.log(newData);
  return { ...state, filteredData: newData, filter: filterList };
}
