export const isObject = obj => {
  if (obj !== null && typeof obj == "object") {
    return true;
  }
  return false;
};

export function setNestedObjectValues(
  object,
  value,
  visited = new WeakMap(),
  response = {}
) {
  for (let k of Object.keys(object)) {
    const val = object[k];
    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
        console.log("radi if");
      }
    } else {
      response[k] = value;
      console.log("radi else");
    }
  }
  return response;
}
