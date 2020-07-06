export const spliceArray = (
    array,
    startIndex,
    endIndex
  ) => {
    return [...array].slice(startIndex, endIndex);
  };