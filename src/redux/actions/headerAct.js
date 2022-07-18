import axiosIntance from "../../api";

export async function getCategories() {
  let response = await axiosIntance.get("/categories");
  if (response.status === 200 && response.data.success) {
    return response.data.categories;
  }
  else{
    return [];
  }
}
