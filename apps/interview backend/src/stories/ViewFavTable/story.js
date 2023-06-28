const knex=requireKnex();

const prepare = ({ reqQuery, reqBody, reqParams, req }) => {
  return ;
};

const authorize = async ({ prepareResult }) => {
 return true;
};

const handle = async ({ prepareResult, authorizeResult }) => {
  try {
    return knex("fav_pkg_backend").select().orderBy("id", "asc").then((rows) => rows);
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
