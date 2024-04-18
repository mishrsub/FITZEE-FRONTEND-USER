import { useQuery } from "@tanstack/react-query";

// const fetchCourseById = async (url) => {
//     try {
//         const fetchData = await fetch(url);
//         const response = await fetchData.json();

//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// };

// const fetchDataById = async (url) => {
//     try {
//         const fetchData = await fetch(url);
//         const response = await fetchData.json();

//         console.log("====================================");
//         console.log("My response: ", response);
//         console.log("====================================");

//         return response.groups;
//     } catch (error) {
//         console.error(error);
//     }
// };

const fetchData = async (url) => {
    try {
        const fetchData = await fetch(url);
        const response = await fetchData.json();

        console.log("====================================");
        console.log("My response: ", response);
        console.log("====================================");

        return response.groups;
    } catch (error) {
        console.error(error);
    }
};

export const getGroups = () => {
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["groups"],
        queryFn: () => fetchData("http://localhost:8000/api/course/getGroups"),
    });
    return { isLoading, error, data, refetch };
};

export const getGroupsById = (param) => {
    // const url = `http://localhost:8000/api/course/group/${param}`;

    // console.log("URLllllLLLLLLLL: ", url);
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["groupsId", param],
        queryFn: () =>
            fetchData(`http://localhost:8000/api/course/group/${param}`),
        enabled: !!param, // Only fetch data if catHandler.catHandler1 is truthy
    });

    return { isLoading, error, data, refetch };
};

// The issue you're encountering is due to the usage of useQuery hook inside the function getGroupsById. The useQuery hook is designed to be used within React functional components, not inside other functions like getGroupsById.

// When you call getGroupsById(catHandler.catHandler1), it creates a new instance of the useQuery hook every time it's called, which results in unexpected behavior because it's not managed by React.

// To fix this issue, you should refactor your code to use useQuery directly inside your component where it can be properly managed by React's component lifecycle. You can pass the catHandler.catHandler1 value as a dependency to the useQuery hook to fetch data based on the selected value.

// In this refactor:

// We use useQuery hook directly inside the component.
// We conditionally enable the useQuery hook for fetching groupData based on the value of catHandler.catHandler1.
// The useQuery hook fetches data based on the selected catHandler.catHandler1 value.
