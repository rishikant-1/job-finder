class ApiResponse {
  constructor(
    status = 200,
    data,
    message = "Request was successful",
  ) {
    this.status = status; // Status of the response, e.g., "success" or "error"
    this.message = message; // Message providing additional information about the response
    this.data = data; // Data returned from the API, can be null if no data is returned
    this.success = status < 401; // Boolean indicating if the request was successful
  }

}


export { ApiResponse };