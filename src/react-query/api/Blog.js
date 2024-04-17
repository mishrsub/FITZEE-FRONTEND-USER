import { useQuery, useMutation, } from "@tanstack/react-query";

const createComment = async (comment, url) => {
  try {
    const fetchData = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    const response = await fetchData.json();

    return response;
  } catch (error) {
    console.error(error);
  }
};

const fetchBlog = async (url) => {
  try {
    const fetchData = await fetch(url);
    const response = await fetchData.json();

    return response.news;
  } catch (error) {
    console.error(error);
  }
};

const fetchBlogComments = async (url) => {
    try {
      const fetchData = await fetch(url);
      const response = await fetchData.json();
  
      return response.comments;
    } catch (error) {
      console.error(error);
    }
};

export const getAllBlog = (url = "") => {
  console.log("URLRRLRLRLRLLRLR: ", url);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["BLOG"],
    queryFn: () => fetchBlog(url),
    staleTime: 60000,
  });


  return { isLoading, error, data, refetch };
};

export const getBlogComments = (url = "") => {
    console.log("URLRRLRLRLRLLRLR: ", url);
    const { isLoading, error, data, refetch } = useQuery({
      queryKey: ["BLOG-COMMENTS"],
      queryFn: () => fetchBlogComments(url),
      staleTime: 60000,
    });
  
  
    return { isLoading, error, data, refetch };
  };
  

export function useCreateBlogComment() {
  const mutationOptions = {
    mutationFn: ({comment, url}) => createComment(comment, url), // The function that performs the mutation (creating a new post)
    onSuccess: (data) => {
      // This function runs if the mutation is successful
      // Invalidate the query to trigger a refetch of the posts
      // Handle successful mutation (e.g., update UI, trigger a refetch, etc.)
      console.log("Blog submitted successfully:", data);
      return data;
    },
    // You can add more properties here according to your needs
    // For example:
    onError: (error) => {
      // This function runs if the mutation encounters an error
      console.error("Mutation error:", error);
      // You can add error handling logic here
    },
  };
  return useMutation(mutationOptions);
}
