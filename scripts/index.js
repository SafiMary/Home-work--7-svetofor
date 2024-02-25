// red.addEventListener('click',()=>{
//  red.style.backgroundColor = `rgb(231, 15, 15)`;
//  yellow.style.backgroundColor = `rgb(246, 251, 251)`;
//  green.style.backgroundColor = `rgb(246, 251, 251)`;
// });
// yellow.addEventListener('click',()=>{
// yellow.style.backgroundColor = `rgb(239, 218, 31)`;
// red.style.backgroundColor = `rgb(246, 251, 251)`;
// green.style.backgroundColor = `rgb(246, 251, 251)`;
//    });
// green.addEventListener('click',()=>{
// green.style.backgroundColor = `rgb(21, 103, 10)`;
// red.style.backgroundColor = `rgb(246, 251, 251)`;
// yellow.style.backgroundColor = `rgb(246, 251, 251)`;
//        });

const btn = document.getElementById("btn");
btn.addEventListener('click',()=>{
    if( btn.textContent == "OFF"){
   btn.textContent = "ON";
   red.addEventListener('click',()=>{
    red.style.backgroundColor = `rgb(231, 15, 15)`;
    yellow.style.backgroundColor = `rgb(246, 251, 251)`;
    green.style.backgroundColor = `rgb(246, 251, 251)`;
   });
   yellow.addEventListener('click',()=>{
   yellow.style.backgroundColor = `rgb(239, 218, 31)`;
   red.style.backgroundColor = `rgb(246, 251, 251)`;
   green.style.backgroundColor = `rgb(246, 251, 251)`;
      });
   green.addEventListener('click',()=>{
   green.style.backgroundColor = `rgb(21, 103, 10)`;
   red.style.backgroundColor = `rgb(246, 251, 251)`;
   yellow.style.backgroundColor = `rgb(246, 251, 251)`;
          });
 }

else
if( btn.textContent == "ON"){
    btn.textContent = "OFF";
   red.style.backgroundColor = `rgb(246, 251, 251)`;
   yellow.style.backgroundColor = `rgb(246, 251, 251)`;
   green.style.backgroundColor = `rgb(246, 251, 251)`;
   red.addEventListener('click',()=>{
    red.style.backgroundColor = `rgb(246, 251, 251)`;
    yellow.style.backgroundColor = `rgb(246, 251, 251)`;
    green.style.backgroundColor = `rgb(246, 251, 251)`;
   });
   yellow.addEventListener('click',()=>{
    yellow.style.backgroundColor = `rgb(246, 251, 251)`;
    red.style.backgroundColor = `rgb(246, 251, 251)`;
    green.style.backgroundColor = `rgb(246, 251, 251)`;
       });
    green.addEventListener('click',()=>{
    green.style.backgroundColor = `rgb(246, 251, 251)`;
    red.style.backgroundColor = `rgb(246, 251, 251)`;
    yellow.style.backgroundColor = `rgb(246, 251, 251)`;
           });
        }
});
