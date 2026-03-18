// --- BEFORE: Messy Code ---
function u(l, i) {
  let t = 0;
  for (let j = 0; j < l.length; j++) {
    t += l[j].p;
  }
  if (t > 100) {
    console.log("Free shipping for " + i);
  } else {
    t += 10;
    console.log("Standard shipping for " + i);
  }
  return t;
}

// --- AFTER: Clean Code ---

const FREE_SHIPPING_THRESHOLD = 100;
const STANDARD_SHIPPING_COST = 10;

/**
 * Calculates total order cost including shipping.
 * @param {Array} items - List of items with price property.
 * @param {string} userName - Name of the customer for logging.
 * @returns {number} The final total.
 */
function calculateOrderTotal(items, userName) {
  const subtotal = calculateSubtotal(items);
  const shipping = calculateShippingCost(subtotal);
  
  logShippingStatus(userName, shipping === 0);
  
  return subtotal + shipping;
}

function calculateSubtotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

function calculateShippingCost(subtotal) {
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_COST;
}

function logShippingStatus(userName, isFree) {
  const status = isFree ? "Free" : "Standard";
  console.log(`${status} shipping applied for ${userName}.`);
}
