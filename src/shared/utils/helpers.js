export const getRandomIndex = (data, diff) =>
  Math.floor(Math.random() * data[diff].length);


export const formatTime = (seconds) => {

  const min = Math.floor(seconds / 60);
  const sec = String(seconds % 60).padStart(2, "0");

  return `${min}:${sec}`;

}