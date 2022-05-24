/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	        Amount
Penny	                $0.01 (PENNY)
Nickel	                $0.05 (NICKEL)
Dime	                $0.1 (DIME)
Quarter	                $0.25 (QUARTER)
Dollar	                $1 (ONE)
Five Dollars	        $5 (FIVE)
Ten Dollars	            $10 (TEN)
Twenty Dollars	        $20 (TWENTY)
One-hundred Dollars	    $100 (ONE HUNDRED)
*/

function Change(status, change) {
    this.status = status;
    this.change = change;
}

var cashInDrawer = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];


function checkCashRegister(price, cash, cid) {


    let difference = cash - price;
    let response = null;
    let auxArray = [];
    let cid2 = [...cid];
    // reduce array to form an array with total amount
    let arr = cid.reduce(function (obj, value) {
        obj.TOTAL = obj.TOTAL + value[1];
        obj[value[0]] = value[1];
        return obj;
    }, { TOTAL: 0 });

    if (arr.TOTAL < difference) {
        response = new Change("INSUFFICIENT_FUNDS", [])
        return response;
    }

    if (arr.TOTAL == difference) {
        response = new Change("CLOSED", cid)
        return response;
    }

    // cid2 = cid2.reverse();
    // for (let element of cid2) {
    //     let aux = [element[0], 0];
    //     let b = cashInDrawer.find(element => element = element[0]);

    //     while (difference >= b[1] && element[1] > 0) {
    //         aux[1] += cashInDrawer[b[1]];
    //         element[1] -= cashInDrawer[b[1]];
    //         difference -= cashInDrawer[b[1]];
    //         // difference = difference.toFixed(2);
    //     }

    //     console.log(difference);
    //     // console.log(cid2);
    //     if (aux[1] > 0) {
    //         auxArray.push(aux);
    //     }
    // }


    // response = new Change("OPEN", auxArray)
    // return response;


    var change_arr = cashInDrawer.reduce(function (acc, curr) {
        var value = 0;
        while (arr[curr.name] > 0 && difference >= curr.val) {
            difference -= curr.val;
            arr[curr.name] -= curr.val;
            value += curr.val;
            difference = Math.round(change * 100) / 100;
        }
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc;
    }, []);
    if (change_arr.length < 1 || difference > 0) {
        response = new Change("INSUFFICIENT_FUNDS", [])
        return response;
    }
    response = new Change("OPEN", change_arr)
    return response;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));