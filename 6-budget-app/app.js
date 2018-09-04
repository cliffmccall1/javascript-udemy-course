// Budget Controller
var budgetController = (() => {
  // some code
})();

// UI Controller
var UIController = (() => {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: () => {
      return DOMstrings;
    }
  };
})();

// Global App Controller
var controller = ((budgetCtrl, UICtrl) => {
  var DOM = UICtrl.getDOMstrings();

  var ctrlAddItem = () => {
    // 1. Get the filed input data
    var input = UICtrl.getInput();
    console.log(input);
    // 2. Add the item to the budget controller
    // 3. add the item to the UI
    // 4. Calculate the budget
    // 5. display the budget
  };

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', e => {
    if (e.keyCode === 13 || e.which === 13) {
      console.log('ENTER was pressed.');
    }
  });
})(budgetController, UIController);
