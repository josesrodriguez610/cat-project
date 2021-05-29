export const formatDate = (string) => {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  let dateArr = string
    .split("-")
    .map((date) => (date[0] === "0" ? date.slice(1) : date));

  return `${dateArr[2]} ${months[dateArr[1]]} ${dateArr[0]}`;
};
