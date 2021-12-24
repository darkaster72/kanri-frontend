const loggerMiddlware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export default loggerMiddlware;
