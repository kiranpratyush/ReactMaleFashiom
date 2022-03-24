
// Helper function to filter By category List

function filterByCategoryList(categoryList, data) {
  const filteredData = [];
  for (let index = 0; index < categoryList.length; index++) {
    if (categoryList[index]) {
      filteredData.push(data[index]);
    }
  }
  return filteredData;
}

export function filter(type, payload = {}) {
  switch (type) {
    case "Category":
      return filterByCategoryList(payload.categoryList, payload.data);

    default:
      return payload;
  }
}
