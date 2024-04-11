import { useQuery } from "@tanstack/react-query";

const fetchWorkshops = async (url) => {
    try {
        const fetchData = await fetch(url);
        const response = await fetchData.json();

        return response.workshops;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const fetchWorkshopDetails = async (url) =>{
    try {
        const fetchData = await fetch(url);
        const response = await fetchData.json();

        return response.workshopDetail;
    } catch (error) {
        console.error(error);
        return error;
    }
}


export const getAllWorkshop = (url = "") => {
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["WORKSHOP"],
        queryFn: () => fetchWorkshops(url),
        staleTime: 60000,
    });

    return { isLoading, error, data, refetch };
};

export const getWorkshopDetail = (url = "") => {
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["WORKSHOPDETAIL"],
        queryFn: () => fetchWorkshopDetails(url),
        staleTime: 60000,
    });

    console.log("====================================");
    console.log("GETTING Workshop: --->", data);
    console.log("====================================");

    return { isLoading, error, data, refetch };
};