import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const addReview = () => {};

export const GiveReview = () => {
  const mutation = useMutation({
    mutationFn: (newReview) => {
      return axios.post(
        "http://35.154.95.255:8000/api/course/program/review",
        newReview,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
    onSuccess: (data) => {
      // Handle successful mutation (e.g., update UI, trigger a refetch, etc.)
      console.log("Review submitted successfully:", data);
    },
    onError: (error) => {
      // Handle error (e.g., display an error message)
      console.error("Error submitting review:", error);
    },
  });

   // Make sure to return the mutation object, so it can be used in the component
   return mutation;
};
