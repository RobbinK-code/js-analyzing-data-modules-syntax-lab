require('datejs');

function combineUsers(...args) {
  return {
    users: args.flat(), 
      merge_date: new Date().toString('M/d/yyyy')
  };
}

module.exports = combineUsers;