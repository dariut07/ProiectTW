class HttpError extends Error {
    constructor(message, errorCode) {
      super(message); // Adaugă un mesaj predefinit de eroare
      this.code = errorCode; // Adaugă un cod de eroare (ex. 404, 500 etc.)
    }
  }
  
  export default HttpError;
  