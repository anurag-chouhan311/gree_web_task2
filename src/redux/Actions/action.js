export const Add = (item) => {
  return {
    type: "add",
    payload: item,
  };
};
export const INcQnty = (item) => {
  return {
    type: "incq",
    payload: item,
  };
};
export const DecQnty = (item) => {
  return {
    type: "decq",
    payload: item,
  };
};
export const deleteCart = (id) => {
  return {
    type: "dlt",
    payload: id,
  };
};
export const order = (item) => {
  return {
    type: "order",
    payload: item,
  };
};
