// code your solution here
// 1. saturdayFun function
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // 2. mondayWork function expression
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
  
  // 3. wrapAdjective function
  function wrapAdjective(wrapper = '*') {
    return function(adjective = 'special') {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  