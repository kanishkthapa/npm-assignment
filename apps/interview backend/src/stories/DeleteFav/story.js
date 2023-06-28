const knex=requireKnex();
const validator= requireValidator();

const prepare = ({ reqQuery, reqBody, reqParams, req }) => {
  return req.params.packageName;
};

const authorize = async ({ prepareResult }) => {
  return true;
};

// const validateInput = async(prepareResult) => {
//   const constraints = {
//     packageName : {
//       presence: {message: "is required"},
//     },
//   }

//   return validator(prepareResult,constraints);
// }

const handle = async ({ prepareResult, authorizeResult }) => {
  try {
    console.log(prepareResult);
    // await validateInput(prepareResult);
    const emptyArray= [];
    if(knex("fav_pkg_backend").select().where("packageName",prepareResult.packageName) === emptyArray) {
      return "No package required";
    }
    return knex("fav_pkg_backend").where("packageName",prepareResult).del();
  } catch (error) {
    throw error;
  }
};

const respond = async ({ handleResult }) => {
  try {
    console.log("deleted a package");
    return "Package Deleted";
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