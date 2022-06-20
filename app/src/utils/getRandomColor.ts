const getRandomColor = () => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  const num = Math.floor(Math.random() * colors.length);
  return `${colors[num]}.200`;
};

export { getRandomColor };
