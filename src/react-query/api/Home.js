import { useQuery } from "@tanstack/react-query";

const fetchData = async (url, type) => {
  const response = await fetch(url);
  const data = await response.json();

  // Return data based on the specified type
  return type ? data[type] : data;
};

export const getAllData = (url, type = "") => {
  try {
    const {
      isLoading,
      error,
      data: newData,
      refetch
    } = useQuery({
      queryKey: [type],
      queryFn: () => fetchData(url, type),
    });

    return { isLoading, error, newData,refetch };
  } catch (error) {
    console.error(error);
  }
};
