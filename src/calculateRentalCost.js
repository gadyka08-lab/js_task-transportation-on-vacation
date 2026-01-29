/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const COST_DAY = 40;
  const TOTAL_COST = days * COST_DAY;

  if (days >= 7) {
    return TOTAL_COST - 50;
  }

  if (days >= 3) {
    return TOTAL_COST - 20;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
