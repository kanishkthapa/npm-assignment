const knex=requireKnex();
const validator= requireValidator();

const prepare = ({ reqQuery, reqBody, reqParams, req }) => {
  const payload= req.params.packageName;
  return payload;
};

const authorize = async ({ prepareResult }) => {
  return true;
};

const validateInput = async(prepareResult) => {
  constraints = {
    packageName: {
      presence: {message: "is required"},
    },
  }
}

const handle = async ({ prepareResult, authorizeResult }) => {
  try {
    validateInput(prepareResult);
    return knex("fav_pkg_backend").select().where("packageName",prepareResult);
  } catch (error) {
    console.log("no such");
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
