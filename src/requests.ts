const APIURL = "https://hacker-news.firebaseio.com";

export const subURL = `${APIURL}/v0/item`;

export const getNews = async () => {
  const res = await fetch(`${APIURL}/v0/topstories.json`);
  return res;
};

export const getComments = async (cid: number) => {
  const res = await fetch(`${APIURL}/v0/item/${cid}.json`);
  return res;
};

export const getAsks = async () => {
  const res = await fetch(`${APIURL}/v0/askstories.json`);
  return res;
};

export const getJobs = async () => {
  const res = await fetch(`${APIURL}/v0/jobstories.json`);
  return res;
};

export const getShows = async () => {
  const res = await fetch(`${APIURL}/v0/showstories.json`);
  return res;
};