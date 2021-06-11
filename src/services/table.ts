import request from "@/utils/request";
export function getUserList(params?: any) {
  return request("/user/list", {
    method: "GET",
    params,
  });
}
