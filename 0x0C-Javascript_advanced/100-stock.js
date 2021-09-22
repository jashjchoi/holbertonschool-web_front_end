const stock = {
  macbook: 2,
  iphone: 4
};

const processPayment = (itemName) => {
  stock[itemName] -= 1;
  console.log(`Payment is being processed for item ${itemName}`);
};

const processError = (itemName) => {
  console.log(`No more ${itemName} in stock`);
  console.log('Payment is not being processed');
};

function processOrder (itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);
  if (stock[itemName] != 0) { callbackPayment(itemName); } else { callbackError(itemName); }
}

const userPrompt = window.prompt(
  'Please enter the item you would like to purchase (Macbook, iPhone)'
);

processOrder(userPrompt.toLowerCase(), processPayment, processError);
