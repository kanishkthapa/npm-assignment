const knex= requireKnex();
const findKeysFromRequest = requireUtil("findKeysFromRequest");

const prepare = ({ reqQuery, reqBody, reqParams, req }) => {
const name=req.params.packageName;
const desc=findKeysFromRequest(req,["description"]);

return {
  name,
  desc,
}
};

const authorize = async ({ prepareResult }) => {
  return true;
};

const handle = async ({ prepareResult, authorizeResult }) => {
  try {
    console.log(prepareResult);
    return knex("fav_pkg_backend").where("packageName",prepareResult.name).update("description",prepareResult.desc.description).then(console.log("updated"));
  } catch (error) {
    throw error;
  }
};

const respond = async ({ handleResult }) => {
  try {
    return handleResult;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  prepare,
  authorize,
  handle,
  respond,
};
