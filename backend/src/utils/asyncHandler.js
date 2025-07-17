const asyncHandler = (requestHandler) => {
  return (req, res, next) =>{
    Promise.resolve(requestHandler(req, res, next))
      .catch((error) => next(error)); // Pass the error to the next middleware
  } 
}
export default asyncHandler;