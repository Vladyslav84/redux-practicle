

export const increment = (value) => {
    return {
        type: "counter/increment",
        payload: value,
    }
};

export const decrement = (value) => {
    console.log(value);
    return {
        type: "counter/decrement",
        payload: value,
    }
};
