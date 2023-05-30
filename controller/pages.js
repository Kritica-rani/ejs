module.exports.displayData = (req, res) => {
  res.render("view", {
    name: "Seema",
    email: "seema@gmail.com",
  });
  return;
};

module.exports.displayList = (req, res) => {
  const user = ["seema", "srk", "anmol", "harsh"];
  res.render("list", {
    user: user,
  });
};
