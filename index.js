require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  args.forEach(array => {
    combinedObject.users.push(...array);
  });

  combinedObject.merge_date =
  today.toString('M/d/yyyy') ||
  `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  return combinedObject;
  }


module.exports = combineUsers;