export const setIsLoadingActionCreator = (isLoading) => {
  return {
    type: "SET_IS_LOADING",
    payload: isLoading,
  }
}