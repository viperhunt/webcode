 let division = document.createElement('div')
 division.innerHTML=`<input type="text"  id="txt"> 
<button type="button"  class = 'search' onclick="foo()">search</button>
 <h1 class="heading">Make U Beauty</h1>
 <div id ="cards">
</div>`
document.body.append(division)

alert('this is public api you should wait atleast 2minutes for your result')



 async function foo(){
    var result = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`).then((data) =>{
       
      return data.json();
   
    }).then((completeddata)=>{
        // console.log(completeddata)
      let data1="";
          completeddata.map((values)=>{
          data1+= `<div class="card">
          <h2 class ="title">${"Brand:" + values.brand}</h2>
          <h2 class ="name">${"Name:" + values.name}</h2>
          
          <img src="${values.image_link}"
                alt="img" class="img">

              <p class="plink">${"Link:" + values.product_link}</p>
              <p class = "price">${"Price:" + values.price + "$"}</p>
              <p class = "description">${"Description:" + values.description}</p>
              </div>`
     });
     document.getElementById("cards").innerHTML=data1
     data1.values = document.getElementById('txt').addEventListener
     


    }).catch((err)=>
    console.log(err))
}


