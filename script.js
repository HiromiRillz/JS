const pullDownButton = document.getElementById("lists")
console.log(pullDownButton)

window.addEventListener('mouseover', function(){
     const pullDownButton = document.getElementById("lists")
     console.log("乗る")
 })
 window.addEventListener('mouseout', function(){
    const pullDownButton = document.getElementById("lists")
    console.log("外れる")
})
window.addEventListener('click', function(){
    const pullDownButton = document.getElementById("lists")
    console.log("クリック")
})
pullDownButton.addEventListener('mouseover', function(){
    pullDownButton.setAttribute("style","background-color:blue;")
})
pullDownButton.addEventListener('mouseout', function(){
    pullDownButton.removeAttribute("style","background-color:red;")
})
pullDownButton.addEventListener('click', function(){
    pullDownButton.setAttribute("style","background-color:green;")
})