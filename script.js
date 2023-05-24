let body = document.querySelector("body");
let main = document.querySelector(".main");
let pdrc = document.querySelector(".profileDrc");
let projects = document.querySelector(".projects");
let profileDrc = document.querySelector(".profileDrc");

function project() {
 if(profileDrc.style.display==="block"){
   profileDrc.style.display="none"
 }
   projects.style.display="grid";
   
}
function profile() {
   if(projects.style.display==="grid"){
     projects.style.display="none";
   }
  profileDrc.style.display="block"
}


