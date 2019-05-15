var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i =1; i<=5;i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/imagegallery/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", function(e){
    var getSrc = e.target.getAttribute('src');
    displayedImage.setAttribute('src', getSrc);
  });
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function(){
  var getBtn  = btn.getAttribute('class');
  if(getBtn == 'dark'){
     btn.setAttribute('class', 'light');
     btn.textContent = 'Lighten';
     overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  }
  else{
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
