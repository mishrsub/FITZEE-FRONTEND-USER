import { useMutation, useQuery } from "@tanstack/react-query";

const fetchNews = async (url) => {
    try {
        const fetchData = await fetch(url);
        const response = await fetchData.json();

        return response.news;
    } catch (error) {
        console.error(error);
    }
};

const likeDislikeNews = async (url, method) => {
    try {
        // console.log("Fetching Data: ", fetchData);
        const fetchData = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        });

        const response = await fetchData.json();

        return response.data.likes;
    } catch (error) {
        console.error("ERROR -------->", error);
    }
};

export const getAllNews = (url = "") => {
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["newsDscription"],
        queryFn: () => fetchNews(url),
        staleTime: 60000,
    });

    return { isLoading, error, data, refetch };
};

export const useLikeDislike = () => {
    const mutation = useMutation({
        mutationFn: (data) => likeDislikeNews(data[0], data[1]), // Assuming data is an array [url, method]
        onSuccess: (data) => {
            // Update the query cache or refetch as needed
            queryCache.setQueryData(["newsLike"], data);
        },
    });

    const handleLikeDislike = (url, method) => {
        mutation.mutate([url, method]);
    };

    return {
        isLoading: mutation.isLoading,
        error: mutation.error,
        handleLikeDislike,
    };
};
