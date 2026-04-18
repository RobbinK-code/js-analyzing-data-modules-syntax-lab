require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  args.forEach(array => {
    combinedObject.users.push(...array);
  });

  combinedObject.merge_date = Date.today().toString('yyyy/M/d');

  return combinedObject;
}

module.exports = combineUsers;