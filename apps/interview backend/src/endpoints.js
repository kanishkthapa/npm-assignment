module.exports = (app) => {
  app.get("/liveness", async (req, res) => {
    return res.code(200).send({ status: "I am alive" });
  });

  app.get("/readiness", async (req, res) => {
    return res.code(200).send({ status: "I am ready" });
  });

  app.post("/mirror", async (req, res) => {
    return res.code(200).send(req.body);
  });

  return [
    {
      endpoints: [
        ["get","/","ViewFavTable"],
        ["get","/view/:packageName","ViewPackage"],
        ["post","/add","AddinFavTable"],
        ["patch","/edit/:packageName","EditDescription"],
        ["delete", "/:packageName","DeleteFav"],
      ],
    },
  ];
};
