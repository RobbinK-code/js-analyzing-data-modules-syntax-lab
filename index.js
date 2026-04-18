require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

 args.forEach(array => {
  if (Array.isArray(array)) {
    combinedObject.users.push(...array);
  }
});

  const today = new Date();

  combinedObject.merge_date = today.toString('M/d/yyyy');

  return combinedObject;
}

module.exports = combineUsers;