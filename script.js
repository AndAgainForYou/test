const Butt = document.getElementById('add');
console.log("headers", Butt);
const app = document.querySelector('.app');

Butt.addEventListener("click", function(){
    
    const title = document.createElement(sectionO);
    app.appendChild(title)

  });



//
  const del = document.getElementById('delete');
console.log("headers", del);

del.addEventListener("click", function(){

    let newDiv = document.createElement('div');
    let script = document.getElementsByTagName('script')[0];
    document.body.deleteBefore(newDiv, script);

  });

