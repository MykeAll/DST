var nameData = [
    {
        items:"FAN",
        quality:"PREMIUM",
        powerRating: "30.42",
        quantity: 4, id:1
    },
    {
        items:"BULB",
        quality:"BASIC",
        powerRating: "60",
        quantity: 8, id:2
    }
];

/*
var a = Data()
b = age
function substract() {
   return  a - b;
};
document.getElementById('substract()').innerHTML = substract();
*/

function displayTableData() {
    var html = "<table border= '1/2 class='table'>";
    setTimeout(() => {
        html+="<thead style=' background-color: gray; color: #000; border-bottom: 2px solid #000;'>";
        html+="<tr>";
        html+="<td  style='border-right: 2px solid #000;'>" + '<b>S/NO.</b>' + "</td>";
        html+="<td  style='border-right: 2px solid #000;' contenteditable=''>" + '<b>ITEMS</b>' + "</td>";
        html+="<td  style='border-right: 2px solid #000;'>" + '<b>QUALITY</b>' + "</td>";
        html+="<td  style='border-right: 2px solid #000;'>" + '<b>POWER-RATING</b>' +  "</td>";
        // html+="<td>" + 'Age' + "</td>";
        html+="<td  style='border-right: 2px solid #000;'>" + '<b>QUANTITY</b>' + "</td>";
        html+="<td>" + '<b>ACTION</b>' + "</td>";
        html+="</tr>";
        html+="</thead>";
        for ( var i = 0; i < nameData.length; i++) {
            var sno=i+1;
            html+="<tr style='background-color: #fff; border-bottom: 2px solid #000;'>";
            html+="<td  style='border-right: 2px solid #000;'>" + sno + "</td>";
            html+="<td  style='border-right: 2px solid #000;'>" + nameData[i].items + "</td>";
            html+="<td  style='border-right: 2px solid #000;'>" + nameData[i].quality + "</td>";
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
}

displayTableData();
document.value

function addOnClick() {
    var items = document.getElementById('items').value;
    var quality = document.getElementById('quality').value;
    var powerRating = document.getElementById('powerRating').value;
    // var age = document.getElementById('age').value;
    var quantity = document.getElementById('quantity').value;

    if(items && quality && powerRating && quantity) {
        let id = nameData.length +1;
        nameData.push({
            items:items, quality:quality, powerRating:powerRating, quantity:quantity, id:id
        })
        displayTableData();
        clearItems();
    }
}

function clearItems() {
document.getElementById('items').value=""
    document.getElementById('quality').value=""
    document.getElementById('powerRating').value=""
    // document.getElementById('age').value=""
    document.getElementById('quantity').value=""
}

function removeItem(rec) {
    console.log(rec);

    var filt = nameData.filter((a,i)=>{
        if(rec == a.id){
            nameData.splice(i,1);
            displayTableData();
        }
    })
    console.log(nameData);
}

function updateItem(rec) {
    console.log(rec);

    var filt = nameData.filter((a,i)=>{
        if(rec == a.id){
            document.getElementById('items').value=a.items
    document.getElementById('quality').value=a.quality
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


// OTHERS
function showfield(name){
  if(name=='Other')document.getElementById('div1').innerHTML='Other: <input type="text" name="other" />';
  else document.getElementById('div1').innerHTML='';
}

onchange="showfield(this.options[this.selectedIndex].value)"