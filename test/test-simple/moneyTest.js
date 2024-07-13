import { formatCurrency } from "../../money.js";


console.log('test suits: formatCurrency');

console.log('convert cents into dollalrs');

if(formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('');

if (formatCurrency(0) === '0.00') {
 console.log('passed');
} else {
  console.log('failed');
}

console.log('');

if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
 } else {
   console.log('failed');
 }
 