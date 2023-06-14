export const getReviews = async (page) => {
  const res = await fetch('/datas.json');
  const data = await res.json();

  const itemsPerPage = 8;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const slicedData = data.slice(startIndex, endIndex);

  return slicedData;
};
