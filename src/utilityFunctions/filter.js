// Helper function to filter By category List
function filterByLowToHigh(data) {
  const filteredData = [...data];
  filteredData.sort((item1, item2) => item1.price - item2.price);
  return filteredData;
}
function filterByHighToLow(data) {
  const filterdData = [...data];
  filterdData.sort((item1, item2) => item2.price - item1.price);
  return filterdData;
}
function filterByCategoryList(categoryList, data) {
  const filteredData = [];

  for (let item in categoryList) {
    if (categoryList[item]) {
      console.log(data);
      const x = data.find((element) => element.category === item);
      if (x !== undefined) {
        filteredData.push(x);
      }
    }
  }
  return filteredData.length > 0 ? filteredData : data;
}

function filterByPriceRange(range, data) {
  return data.filter((element) => element.price >= range);
}

export function filter(initialData, filterListValue) {
  let newData = [...initialData.data];
  for (let i = 0; i < filterListValue.length; i++) {
    if (filterListValue[i].category === 'CATAEGORY') {
      newData = filterByCategoryList(filterListValue[i].data, newData);
    }
    if (filterListValue[i].category === 'slider') {
      newData = filterByPriceRange(filterListValue[i].data, newData);
    }
    if (filterListValue[i].category === 'LOWTOHIGH') {
      newData = filterByLowToHigh(newData);
    }
    if (filterListValue[i].category === 'HIGHTOLOW') {
      newData = filterByHighToLow(newData);
    }
  }

  return newData;
}
