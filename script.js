var start = document.getElementById("start");
document.getElementById("main").style.visibility ="hidden";
start.addEventListener("click",function()
{
  swal("Hooray!","Here you go!", "success");
  document.getElementById("start").style.visibility ="hidden";
  document.getElementById("main").style.visibility ="visible";
})

for(let i=1;i<=7;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        var buttonHTML = this.id;
        console.log(buttonHTML);
        makeSound(buttonHTML);
    });
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);
  
  
  });

  function makeSound(key) {

    switch (key) {
      case "Tom-1":
        var tom1 = document.getElementById("audio4");
        tom1.play();
        break;
  
      case "Tom-2":
        var tom2 = document.getElementById("audio5");
        tom2.play();
        break;
  
      case "Tom-3":
        var tom3 = document.getElementById("audio6");
        tom3.play();
        break;
  
      case "Tom-4":
        var tom4 = document.getElementById("audio7");
        tom4.play();
        break;
  
      case "Snare":
        var snare = document.getElementById("audio3");
        snare.play();
        break;
  
      case "Crash":
        var crash = document.getElementById("audio1");
        crash.play();
        break;
  
      case "Kick-bass":
        var kick = document.getElementById("audio2");
        kick.play();
        break;
  
  
      default: console.log(key);
  
    }
  }
  
