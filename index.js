require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  // Merge all arrays
  args.forEach(array => {
    combinedObject.users.push(...array);
  });

  // Create today's date properly
  const today = new Date();

  // Use datejs formatting
  combinedObject.merge_date = today.toString('M/d/yyyy');

  return combinedObject;
}

module.exports = combineUsers;