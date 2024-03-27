import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const AddContact = () => {
  const mutation = useMutation({
    mutationFn: (newContact) => {
      return axios.post(
        "http://localhost:8000/api/contact",
        newContact,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
    onSuccess: (data) => {
      // Handle successful mutation (e.g., update UI, trigger a refetch, etc.)
      console.log("Contact submitted successfully:", data);
      return data;
    },
    onError: (error) => {
      // Handle error (e.g., display an error message)
      console.error("Error submitting contact:", error.response.data);
      return error.response.data;
    },
  });

   // Make sure to return the mutation object, so it can be used in the component
   return mutation;
};
