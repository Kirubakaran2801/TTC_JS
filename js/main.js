function OrderYourFood() {
    console.log("Recived Order");
    var OrderFood = document.getElementById("my_order").value;
    console.log(OrderFood);
    var Orderqty = document.getElementById("Quantity").value;
    console.log(Orderqty);
    var one_Idly = 10;
    var one_Dhosa = 20;
    var one_poori = 30;
    var one_Chapathi = 25;
    var one_Pongal = 50;
    var totalBill = 0;
    if (OrderFood == "Idly") {
        console.log(OrderFood);
        console.log(Orderqty);
        var totalBill = parseInt(Orderqty) * parseInt(one_Idly);
        console.log(totalBill);
        document.getElementById('totalBillAmt').innerHTML = "Your Total Bill Amount is " + totalBill;
    }
    else if (OrderFood == "Dhosa") {
        console.log(OrderFood);
        console.log(Orderqty);
        var totalBill = parseInt(Orderqty) * parseInt(one_Dhosa);
        console.log(totalBill);
        document.getElementById('totalBillAmt').innerHTML = "Your Total Bill Amount is " + totalBill;
    }
    else if (OrderFood == "Chapathi") {
        console.log(OrderFood);
        console.log(Orderqty);
        var totalBill = parseInt(Orderqty) * parseInt(one_Chapathi);
        console.log(totalBill);
        document.getElementById('totalBillAmt').innerHTML = "Your Total Bill Amount is " + totalBill;
    }
    else if (OrderFood == "Poori") {
        console.log(OrderFood);
        console.log(Orderqty);
        var totalBill = parseInt(Orderqty) * parseInt(one_poori);
        console.log(totalBill);
        document.getElementById('totalBillAmt').innerHTML = "Your Total Bill Amount is " + totalBill;
    }
    else if (OrderFood == "Pongal") {
        console.log(OrderFood);
        console.log(Orderqty);
        var totalBill = parseInt(Orderqty) * parseInt(one_Pongal);
        console.log(totalBill);
        document.getElementById('totalBillAmt').innerHTML = "Your Total Bill Amount is INR " + totalBill;
    }
}