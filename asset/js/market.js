let summary;
/*
var nameData = [
    {
        items:"FAN",
        // quality:"PREMIUM",
        powerRating: "30.42",
        quantity: 4, id:1
    },
    {
        items:"BULB",
        // quality:"BASIC",
        powerRating: "60",
        quantity: 8, id:2
    }
];
*/

let nameData = JSON.parse(localStorage.getItem('locateData')) || []

/*
var a = Data()
b = age
function substract() {
   return  a - b;
};
document.getElementById('substract()').innerHTML = substract();
*/

function displayTableData() {
    let html = "<table border= '1/2 class='table'>";
    setTimeout(() => {
        html+="<thead style=' background-color: gray; color: #000; border-bottom: 2px solid #000;'>";
        html+="<tr>";
        html+="<td  style='border-right: 2px solid #000;'>" + '<b>S/NO.</b>' + "</td>";
        html+="<td  style='border-right: 2px solid #000; text-transform: uppercase;' contenteditable=''>" + '<b>ITEMS</b>' + "</td>";
        // html+="<td  style='border-right: 2px solid #000;'>" + '<b>QUALITY</b>' + "</td>";
        html+="<td  style='border-right: 2px solid #000;'>" + '<b>POWER-RATING</b>' +  "</td>";
        // html+="<td>" + 'Age' + "</td>";
        html+="<td  style='border-right: 2px solid #000;'>" + '<b>QUANTITY</b>' + "</td>";
        html+="<td>" + '<b>ACTION</b>' + "</td>";
        html+="</tr>";
        html+="</thead>";
        for ( var i = 0; i < nameData.length; i++) {
            var sno=i+1;
            html+="<tr style='table-striped-danger w-auto border-bottom: 2px solid #000;'>";
            html+="<td  style='border-right: 2px solid #000;'>" + sno + "</td>";
            html+="<td  style='border-right: 2px solid #000; text-transform: uppercase;'>" + nameData[i].items + "</td>";
            // html+="<td  style='border-right: 2px solid #000;'>" + nameData[i].quality + "</td>";
            html+="<td  style='border-right: 2px solid #000;'>" + nameData[i].powerRating + "</td>";
            // html+="<td>" + nameData[i].age + "</td>";
            html+="<td  style='border-right: 2px solid #000;'>" + nameData[i].quantity + "</td>";
            html+="<td>"+ `<button type="button" class="btn btn-danger" onclick='removeItem(${nameData[i].id})'><i class="fa fa-trash"></i> Remove</button>` + "</td>";
            // html+="<td>"+ `<button type="button" class="btn btn-danger" onclick='removeItem(${nameData[i].id})'><i class="fa fa-trash"></i> Remove</button>` + `<button type="button" class="btn btn-upload" onclick='updateItem(${nameData[i].id})'><i class="fa fa-upload"></i> Update</button>` + "</td>";
            html+="</tr>";
        }
        html+="</table>";
        document.getElementById("table").innerHTML =html
    }, 200);

    calculate();
}

displayTableData();
document.value

function addOnClick() {
    let items = document.getElementById('items').value;
    // var quality = document.getElementById('quality').value;
    let powerRating = document.getElementById('powerRating').value;
    // var age = document.getElementById('age').value;
    let quantity = document.getElementById('quantity').value;

    if(items && powerRating && quantity) {
        let id = nameData.length +1;
        nameData.push({
            items:items, powerRating:powerRating, quantity:quantity, id:id
        })
        displayTableData();
        window.localStorage.setItem("locateData", JSON.stringify(nameData))
        clearItems();
    }
}

function clearItems() {
document.getElementById('items').value=""
    // document.getElementById('quality').value=""
    document.getElementById('powerRating').value=""
    // document.getElementById('age').value=""
    document.getElementById('quantity').value=""
}

function removeItem(rec) {
    console.log(rec, '..rec');
    let Data = JSON.parse(localStorage.getItem('locateData')) || []
    console.log(Data, 'data..');

    let filt = nameData.filter((a,i)=>{
        if(rec == a.id){
            let filtered = nameData.splice(i,1)
            console.log(filtered, '..filtered');
            displayTableData();
        }
    })
    console.log(nameData, '2nd data instance');
    window.localStorage.setItem("locateData", JSON.stringify(nameData))
}

function updateItem(rec) {
    console.log(rec);

    let filt = nameData.filter((a,i)=>{
        if(rec == a.id){
            document.getElementById('items').value=a.items
    // document.getElementById('quality').value=a.quality
    document.getElementById('powerRating').value=a.powerRating
    // document.getElementById('age').value=a.age
    document.getElementById('quantity').value=a.quantity
            // displayTableData();
            nameData.push();
            
        }
        
    })
    console.log(nameData);
}

updateItem()


/*
// OTHERS
function showfield(name){
  if(name=='Other')document.getElementById('div1').innerHTML='Other: <input type="text" name="other" />';
  else document.getElementById('div1').innerHTML='';
}

onchange="showfield(this.options[this.selectedIndex].value)"
*/


// SUMMARY
function calculate() {
    summary = nameData;

    totalQty = summary.map(sum => Number(sum.quantity))
    totalQuantity = totalQty.reduce((accumulate, current)=>{
        return current + accumulate
    })
    console.log(typeof(totalQty))


    totalPower = summary.map(sum => Number(sum.powerRating))
    totalPowered = totalPower.reduce((accumulate, current)=>{
        return current + accumulate
    })
    console.log(typeof(totalPowered))

    let quant = document.getElementById('quant')
    quant.innerHTML = totalQuantity
    // quant.append(totalQuantity)
    let rate = document.getElementById('rate')
    rate.innerHTML = totalPowered
    // power.append(totalQuantity)
    let energy = document.getElementById('energy')
    energy.innerHTML = totalQuantity * totalPowered
    // energy.append(totalQuantity * totalPowered)
    let cost = document.getElementById('cost')
    let tCost = document.getElementById('tCost')
    let work = document.getElementById('work')
}