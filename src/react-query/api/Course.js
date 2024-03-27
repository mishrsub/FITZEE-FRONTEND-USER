import { useQuery } from "@tanstack/react-query";

const fetchCourseById = async (url) => {
    try {
        const fetchData = await fetch(url);
        const response = await fetchData.json();

        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const fetchCompetitiveCourseById = async (url) => {
    try {
        const fetchData = await fetch(url);
        const response = await fetchData.json();

        console.log('====================================');
        console.log("My response: ",response);
        console.log('====================================');

        return response.class;
    } catch (error) {
        console.error(error);
    }
};

export const getCourseByClassId = (param) => {
    const url = `http://65.1.94.113:8000/api/course/class/${param}`;

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["course"],
        queryFn: () => fetchCourseById(url),
    });
    return { isLoading, error, data, refetch };
};

export const getCourseAndProgramByClassId = (classId, programId) => {
    const url = `http://65.1.94.113:8000/api/course/class/${classId}/program/${programId}`;

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["course"],
        queryFn: () => fetchCourseById(url),
    });
    return { isLoading, error, data, refetch };
};

export const getCourseDetail = (programId, subProgramId) => {
    const url = `http://65.1.94.113:8000/api/course/programDetail/${programId}/${subProgramId}`;

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["courseDetail"],
        queryFn: () => fetchCourseById(url),
        staleTime: 60000,
    });

    return { isLoading, error, data, refetch };
};

export const getAllCompetitiveCourse = () => {
    const url = `http://65.1.94.113:8000/api/course/competitive/`;

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["courseCompetitive"],
        queryFn: () => fetchCompetitiveCourseById(url),
    
    });

    return { isLoading, error, data, refetch };
};
