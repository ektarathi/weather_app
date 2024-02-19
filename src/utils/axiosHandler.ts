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
    console.log(error)
    if (error.response.status === 404) {
        window.alert("Invalid City");
    } else if (error.response.status === 401) {
      window.alert("Invalid API key. Please see https://openweathermap.org/faq#error401 for more info. ")
    }
  });
  
  export default axios;