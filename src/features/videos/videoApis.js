import instance from "../../utils/axios";

export const fetchVideosFromDb = async () => {
    const response = await instance.get("/videos");
   return response
}