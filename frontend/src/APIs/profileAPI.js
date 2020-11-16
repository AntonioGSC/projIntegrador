import { requestOptions } from "./configAPI";

export function GET_PROFILE(type, id) {
  return requestOptions({
    url: `/profile/${type}/${id}`
  });
}

export function PATCH_PROFILE(type, id, body) {
  return requestOptions({
    url: `/profile/${type}/${id}`,
    method: "PATCH",
    body
  });
}

export function GET_AVATAR(type, id) {
  return requestOptions({
    url: `/profile/${type}/${id}/avatar`,
    isAuthenticated: false
  });
}

export function PATCH_AVATAR(type, id, body) {
  return requestOptions({
    url: `/profile/${type}/${id}/avatar`,
    method: "PATCH",
    body
  });
}
