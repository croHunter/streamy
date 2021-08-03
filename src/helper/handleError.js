const handleError = async (promise) => {
  try {
    const data = promise;
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
};

export default handleError;
