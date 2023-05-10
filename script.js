// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

for (let number = 20; number <= 30; number += 0.5) {
  console.log(number);
}

// 2. Один долар коштує 27 гривень.Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

for (let usd = 0; usd <= 100; usd += 10) {
  const exchangeUsdToUa = 27;
  const ua = usd * exchangeUsdToUa;
  console.log(`${usd} = ${ua}`);
}

// 3. Дане ціле число.Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const N = 500;

for (let number = 1; number <= 100; number++) {
  if (number ** 2 <= N) {
    console.log(number);
  }
}

// 4. Дане ціле число.З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const n = 41;
let number = true;

if (n > 1) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      number = false;
      break;
    }
  }
} else {
  number = false;
}

if (number) {
  console.log(`${n} - просте число.`);
} else {
  console.log(`${n} - складене число.`);
}

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const integer = 81;
let i = 1;

while (i < integer) {
  i *= 3;
}

if (i === integer) {
  console.log(
    `${integer} - число можна отримати шляхом зведення числа 3 у деякий ступінь.`
  );
} else {
  console.log(
    `${integer} - число НЕ можна отримати шляхом зведення числа 3 у деякий ступінь.`
  );
}
