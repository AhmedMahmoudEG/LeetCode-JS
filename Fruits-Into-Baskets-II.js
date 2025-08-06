/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {

    let res = 0;
	for (let i = 0; i < fruits.length; i++) {
		for (let j = 0; j < baskets.length; j++) {
			if (fruits[i] <= baskets[j] && baskets[j] > 0) {
				res += 1;
				baskets[j] = 0;
				break;
			}
		}
	}
	return fruits.length - res;
    /*
    let n = fruits.length;
    let used = new Array(n).fill(false); // Tracks used baskets
    let unplaced = 0;

    for (let i = 0; i < n; i++) {
        let placed = false;
        for (let j = 0; j < n; j++) {
            if (!used[j] && baskets[j] >= fruits[i]) {
                used[j] = true; // Mark basket as used
                placed = true;
                break;
            }
        }
        if (!placed) unplaced++;
    }

    return unplaced;
    */
};