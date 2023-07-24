const GetNumberOfDays = () => {
  let currentDate = new Date();
  let weddingDate = Date.parse('16 July 2022 00:00:00 GMT');
  let differenceInTime = weddingDate - currentDate.getTime();
  let differenceInDays = Math.ceil(
    differenceInTime > 0 ? differenceInTime : 0 / (1000 * 3600 * 24)
  );
  return differenceInDays;
};

export default GetNumberOfDays;
