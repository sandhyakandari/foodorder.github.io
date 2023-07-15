const menuitem=document.getElementById("menuitem");

const endpoint='https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json'
  
async function run(){
    try{ 
    const menu=await getMenu();
    console.log(menu);
 const order=await TakeOrder(menu);
 alert("order recived");
  const orderStatus=await orderPrep();
  alert('order ready');
  const payment=await payOrder();
  alert('payment completed');
  if(payment.paid){
    thankyou();
  }   }
catch(err){
    console.log(`the error is ${err}`);
    }
}

async function getMenu(){
    try{ 
    const response=await fetch(endpoint)
     const menu=await response.json()

     menuitem.innerHTML=``;
     for(let i=0;i<menu.length;i++)
     {
         const item=menu[i];
         menuitem.innerHTML+=`<div id="food-item">
         <img src="${item.imgSrc}" class="foodimg">
         <div class="itemdes">
             <div class="nameprice">
                 <h4>${item.name}</h4>
                 <p>${item.price}/-</p>
             </div>
             <div class="add"><img src="img/plusicon.svg"> 
             </div>
         </div>
     </div>`
     }
     console.log(menu);
     const order=await TakeOrder(menu);
     alert("order recived");
      const orderStatus=await orderPrep();
      alert('order ready');
      const payment=await payOrder();
      alert('payment completed');
      if(payment.paid){
        thankyou();
      }
    }
    catch(err){
        console.log(`the error is ${err}`);
        }
    }

function TakeOrder(menu){
    return new Promise(resolve=>{
        setTimeout(()=>{
           let fir=Math.floor(Math.random()*20);
           let first =menu[fir]
           let sec=Math.floor(Math.random()*20);
           let secitem=menu[sec]
           let thir=Math.floor(Math.random()*20);
           let third=menu[thir]
            const item={ fir:first,
                sec:secitem,
                thir:third,
            }
            console.log(item);
         resolve(item);}
    ,2500)
}) }

function orderPrep(){
  return new Promise(resolve=>{
    setTimeout(()=>{
        resolve({order_status:true,paid:false});
    },1500)
  })
}

function payOrder(){
    return new Promise(resolve=>{
        setTimeout(() => {
          resolve({order_status:true,paid:true});  
        },1000);
    })
}

function thankyou(){
    alert('Thank you for eating with us today');
}
getMenu();