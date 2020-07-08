export const getDomainName = (url: string): string => {
  let newUrl = url;

  if (url.indexOf("//") > -1) {
    newUrl = url.split("/")[2];
  } else {
    newUrl = url.split("/")[0];
  }

  //find & remove port number
  newUrl = newUrl.split(":")[0];
  //find & remove "?"
  newUrl = newUrl.split("?")[0];

  return newUrl;
};

export const spliceArray = (
  array: any[],
  startIndex: number,
  endIndex: number
) => {
  return [...array].slice(startIndex, endIndex);
};

export const miliSecToTime = (ms: number) => {
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  let min = Math.floor((ms / (1000 * 60)) % 60);
  let sec = Math.floor((ms / 1000) % 60);

  if (hours < 24) {
    return hours + " hrs ago";
  } else if (min < 60) {
    return min + " min ago";
  } else if (sec < 60) {
    return sec + " sec ago";
  }
};
