import { useQuery } from "@tanstack/react-query";

const fetchCourseById = async (url) => {
    try {
        const fetchData = await fetch(url);
        const response = await fetchData.json();

        console.log('====================================');
        console.log("Response query data: ",response);
        console.log('====================================');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getCourseByClassId = (param) => {
    const url = `http://35.154.95.255:8000/api/course/competitive/class/${param}`;

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["competitiveCourseById"],
        queryFn: () => fetchCourseById(url),
    });
    return { isLoading, error, data, refetch };
};

export const getCourseDetailByProgramId = (param) => {
    const url = `http://35.154.95.255:8000/api/course/competitive/programDetail/${param}`;

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["courseDetailByProgramId"],
        queryFn: () => fetchCourseById(url),
    });
    return { isLoading, error, data, refetch };
};
