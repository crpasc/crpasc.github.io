var j = 0;
var i = 0;
var school = 'Arizona State University';
var exp = 'hello';
var speed = 50;
var x = document.getElementById("demo");


function typeWriter() {

  // if (j < school.length) {
  //   x.innerHTML += school.charAt(j);
  //   j++;
  //   setTimeout(typeWriter, speed);


  // }
 // x.innerHTML = school;
  if (x.innerHTML === '') {
    x.innerHTML = school;
  } else if(x.innerHTML === exp)
  {
    x.innerHTML = school;
  }else {
    x.innerHTML = '';
  }


}





// x.innerHTML = "";






function experience() {

  // if (i < exp.length) {
  //     x.innerHTML += exp.charAt(i);
  //     i++;
  //     setTimeout(experience, speed);
  //   }  
  if (x.innerHTML === '' ) {
    x.innerHTML = exp;
  } else {
    x.innerHTML = '';
  }
}