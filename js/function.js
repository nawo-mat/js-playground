// 文による関数宣言
// 再宣言可能で、宣言の巻き上げが起こるため非推奨
function double_statement(n) {
  return n * 2;
}

// 式による関数宣言
const double_expression = function (n) {
  return n * 2;
};

console.log(double_statement(3));
console.log(double_expression(4));

// 関数内のreturn文以下の処理は実行されない
const double_not_do = function (n) {
  return n * 2;
  console.log("This message won't be shown.");
};

console.log(double_not_do(5));

// アロー関数式による関数宣言
// thisに関して利点があるため、基本的にはこれを推奨
const double_arrow = (n) => {
  return n * 2;
};

// アロー関数式の省略記法
// return文のみの場合はreturn文をブロックごと省略可能
const double_arrow_short = (n) => n * 2;

console.log(double_arrow(6));
console.log(double_arrow_short(7));
