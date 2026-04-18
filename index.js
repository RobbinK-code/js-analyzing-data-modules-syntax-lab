//adding dates
require("datejs");

//combining users
function combineUsers(...args) {
  let combinedObject = {
    users: []
  };

//creating the loop for the above functions
args.forEach(arr => {
    combinedObject.users.push(...arr);
  });

  //adding the date format
combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combinedObject;
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};