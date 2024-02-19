import axios from "axios";

// Request interceptors for API calls
axios.interceptors.request.use(
    (config) => {
      config.headers["Content-Type"] = "application/json";
      config.headers["accept"] = "application/json";
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Response interceptors for API calls
  axios.interceptors.response.use((response) => response, (error) => {
    if (error.response.status === 404) {
        window.alert("Invalid City");
    }
  });
  
  export default axios;