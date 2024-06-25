// Action Type
const IS_FETCHING_AT = "is-fetching";

// Action Creator
const isFetching_AC = (bool) => ({ type: IS_FETCHING_AT, payload: bool });

// Export Files
export { IS_FETCHING_AT, isFetching_AC };
