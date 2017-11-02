import axios from "axios";

export const enviaLead = lead => {
  const myApi = axios.create({
    timeout: 10000,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  myApi({
    method: "put",
    url: "https://secret-ridge-86550.herokuapp.com/api/leads",
    data: lead
  })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
