import { useQuery } from "@tanstack/react-query";

const fetchResult = async (url) => {
    try {
        const fetchData = await fetch(url);
        const response = await fetchData.json();

        return response.result;
    } catch (error) {
        console.error(error);
    }
};

export const getAllResult = (url = "") => {
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["courseDetail"],
        queryFn: () => fetchResult(url),
        staleTime: 60000,
    });

    console.log("====================================");
    console.log("GETTING COURSE DETAIL: --->", data);
    console.log("====================================");

    return { isLoading, error, data, refetch };
};
