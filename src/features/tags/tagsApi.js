import instance from "../../utils/axios";


export const fetchTagsFromDb = async () => {
    const response = await instance.get("/tags");
    console.log(response)
    return response?.data
}

