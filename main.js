// SCI(profit and loss)
// revenue
// event listner of reveanue
document
  .getElementById("grossprofit")
  .addEventListener("click", calculateProfit);

//   Event Function
function calculateProfit() {
  // input
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;

  // process
  let grosspro = rev - cost;

  // output
  document.getElementById("profit").innerHTML = grosspro + "$";
  document.getElementById("gro").innerHTML = grosspro + "$";
}

// Operating Profit
// event Listner of revenue
document
  .getElementById("operatingprofit")
  .addEventListener("click", calculateOprofit);

//   Event Function
function calculateOprofit() {
  // input
  let expense1 = +document.getElementById("expense1").value;
  let expense2 = +document.getElementById("expense2").value;
  //
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;

  // process
  let expenses = expense1 + expense2;
  let grosspro = rev - cost;
  let operatingprofit = grosspro - expenses;

  // output
  document.getElementById("OProfit").innerHTML = operatingprofit + "$";
  document.getElementById("oper").innerHTML = operatingprofit + "$";
}

// Profit of the year before tax
// Event Listner
document
  .getElementById("profitbeforetax")
  .addEventListener("click", calculateprofitbeforetax);

//   Event Function
function calculateprofitbeforetax() {
  // input

  let expense1 = +document.getElementById("expense1").value;
  let expense2 = +document.getElementById("expense2").value;
  //
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;
  //

  let financecost = +document.getElementById("financecost").value;
  let financeincome = +document.getElementById("financeincome").value;

  //   process
  let expenses = expense1 + expense2;
  let grosspro = rev - cost;
  let operatingprofit = grosspro - expenses;
  let finance = operatingprofit + financeincome;
  let probeforetax = finance - financecost;

  // output
  document.getElementById("pretax").innerHTML = probeforetax + "$";
  document.getElementById("prob").innerHTML = probeforetax + "$";
}

// Profit of the year after tax
// Event Listner
document
  .getElementById("profitaftertax")
  .addEventListener("click", calculateprofitaftertax);

//   Event Function
function calculateprofitaftertax() {
  // input

  let expense1 = +document.getElementById("expense1").value;
  let expense2 = +document.getElementById("expense2").value;
  //
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;
  //

  let financecost = +document.getElementById("financecost").value;
  let financeincome = +document.getElementById("financeincome").value;
  //
  let numberoftax = +document.getElementById("tax").value;
  //   process
  let expenses = expense1 + expense2;
  let grosspro = rev - cost;
  let operatingprofit = grosspro - expenses;
  let finance = operatingprofit + financeincome;
  let probeforetax = finance - financecost;
  let proaftertax = probeforetax - numberoftax;
  // output
  document.getElementById("aftertax").innerHTML = proaftertax + "$";
  document.getElementById("proa").innerHTML = proaftertax + "$";
}

// The information table
// group 1
// Event listner
document
  .getElementById("grossprofit")
  .addEventListener("click", calculateProfit2);

// event function
function calculateProfit2() {
  // input
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;

  // output
  document.getElementById("reve").innerHTML = rev + "$";
  document.getElementById("cos").innerHTML = cost + "$";
}

// group 2
// Event listner
document
  .getElementById("operatingprofit")
  .addEventListener("click", calculateOprofit2);

// event function
function calculateOprofit2() {
  // input
  let expense1 = +document.getElementById("expense1").value;
  let expense2 = +document.getElementById("expense2").value;

  // output
  document.getElementById("adm").innerHTML = expense1 + "$";
  document.getElementById("exp").innerHTML = expense2 + "$";
}

// group 3
// Event listner
document
  .getElementById("profitbeforetax")
  .addEventListener("click", calculateprofitbeforetax2);

// event function
function calculateprofitbeforetax2() {
  // input

  let financecost = +document.getElementById("financecost").value;
  let financeincome = +document.getElementById("financeincome").value;

  // output
  document.getElementById("fc").innerHTML = financecost + "$";
  document.getElementById("fi").innerHTML = financeincome + "$";
}

// group 4
// Event listner
document
  .getElementById("profitaftertax")
  .addEventListener("click", calculateprofitaftertax2);

// event function
function calculateprofitaftertax2() {
  // input
  let numberoftax = +document.getElementById("tax").value;

  // output
  document.getElementById("tx").innerHTML = numberoftax + "$";
}

// This didn't work because I put the = sign where it was supposed to be "."
// var reset = document.getElementById("reload");
// reset = addEventListener("click", rload);
// // event function
// function rload() {
//   location.reload;
// }

// Reload button
// event listner

var reload = document.getElementById("reload");
reload.addEventListener("click", rload);
// event function
function rload() {
  location.reload();
}

// info for the calculator

document.getElementById("info").addEventListener("click", information);

// function
function information() {
  alert(
    "Hello to use this calculculator to the best of it's ability, you need to follow the instructions that will appear when you click the steps button. After you finish that, go to the bottom of the page to see all of the information displayed in a table."
  );
}

// step 1 button
// eventlistner
document.getElementById("first").addEventListener("click", step1);

// function
function step1() {
  alert(
    "Get your revenue to the first box, then your cost in the second, that will calculate the gross profit of your company"
  );
}

// step 2 button
// eventlistner
document.getElementById("second").addEventListener("click", step2);

// function
function step2() {
  alert(
    "Get your admistrative cost to the first box, then your other operating cost in the second, this will add the cost, then it will subtract it from your gross profit of the year to give you the operating profit"
  );
}

// step 3 button
// eventlistner
document.getElementById("third").addEventListener("click", step3);

// function
function step3() {
  alert(
    "In the first box put your finance cost and in the second put your income finance income, this will give you the profit of the year. In the last box put how much tax your company paid to the government in dollars for example $10 . After all that you will get the profit of the year after tax."
  );
}
