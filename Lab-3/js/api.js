const BASE_URL = "http://127.0.0.1:5000/";
const RESOURCE_URL = `${BASE_URL}food_containers/`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
 try {
   const reqParams = {
     method,
     headers: {
       "Content-Type": "application/json",
     },
   };

   if (body) {
     reqParams.body = JSON.stringify(body);
   }
   return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
 } catch (error) {
   console.error("HTTP ERROR: ", error);
 }
};

export const getAllFoodContainers = async () => {
 const rawRes = await baseRequest({ method: "GET" });

 return rawRes.json();
};

export const postFoodContainer = (body) => baseRequest({ method: "POST", body: body });

export const updateFoodContainer = (id, body) => baseRequest({ urlPath: `${id}/`, method: "PUT", body: body });

export const deleteFoodContainer = (id) => baseRequest({ urlPath: `${id}/`, method: "DELETE" });

