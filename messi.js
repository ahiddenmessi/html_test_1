var ulcount = 2;

function btn1_onclick(e){

  if(e){
    console.log(e);
  }

  var myul1 = document.getElementById('myul1');

  var mynewli = document.createElement("li");

  ulcount++;

  mynewli.innerText = ulcount;

  myul1.appendChild(mynewli);

}
