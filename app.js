let aboutBtn=document.getElementById('aboutButton')
let timeToVisitBtn=document.getElementById('timeToVisitButton')
let attractionsBtn=document.getElementById('attractionsButton')

let aboutElement=document.getElementById('aboutTab')
let timeToVisitElement=document.getElementById('timeToVisitTab')
let attractionsElement=document.getElementById('attractionsTab')

aboutBtn.onclick=function() {
    aboutElement.style.display='block'
    timeToVisitElement.style.display='none'
    attractionsElement.style.display='none'
}
timeToVisitBtn.onclick=function() {
    timeToVisitElement.style.display='block'
    aboutElement.style.display='none'
    attractionsElement.style.display='none'
}
attractionsBtn.onclick=function() {
    attractionsElement.style.display='block'
    aboutElement.style.display='none'
    timeToVisitElement.style.display='none'
}