const knex=requireKnex();
const findKeysFromRequest = requireUtil("findKeysFromRequest");
const validator=requireValidator();

const prepare = ({ reqQuery, reqBody, reqParams, req }) => {
  const payload = findKeysFromRequest(req,["packageName","description"]);  
  return payload;
};

const authorize = async ({ prepareResult }) => {
  return true;
};

const validateInput = async(prepareResult) => {
  const constraints = {
    packageName: {
      presence: { message: "is required"},
      format: {
        pattern: "[a-z0-9]+",
        message: "^please enter a valid package name.",
      },
    },
    description: {
      presence: { message: "^Description is required"},
      format: {
        pattern: "[a-z0-9 ]+",
        message: "^please give a valid description."
      },
    },
  };

  return validator(prepareResult,constraints);
}

const handle = async ({ prepareResult, authorizeResult }) => {
  try {
    await validateInput(prepareResult);
    const emptyArray = [];
    const alreadyTest = await knex("fav_pkg_backend").select().where("packageName",prepareResult.packageName);
    if( alreadyTest.length === emptyArray.length) {
    const newRow= await knex("fav_pkg_backend")
    .insert({
      packageName: prepareResult.packageName,
      description: prepareResult.description,
    })
    .returning("*");

    return newRow;
  }
  return "Package already exists";
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