import axios from "axios";

export const enviaLead = lead => {
  axios
    .post("/leads", lead)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
