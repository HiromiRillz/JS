function pullDown() {
    
}
const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")
const pullDownChild = document.querySelectorAll(".pull-down-list")
const currentList = document.getElementById("current-list")
console.log(pullDownButton)

pullDownButton.addEventListener('mouseover', function(){
     const pullDownButton = document.getElementById("lists")
     this.setAttribute("style","background-color:blue;")
     console.log("乗ったら青")
 })
pullDownButton.addEventListener('mouseout', function(){
    const pullDownButton = document.getElementById("lists")
    this.removeAttribute("style","background-color:red;")
    console.log("外れたら赤")
})
pullDownButton.addEventListener('click', function(){
    const pullDownButton = document.getElementById("lists")
    this.setAttribute("style","background-color:green;")
    console.log("クリックしたら緑")
})

pullDownButton.addEventListener('click', function(){
    if (pullDownParents.getAttribute("style") == "display:block;"){
        pullDownParents.removeAttribute("style", "display:block;")
        console.log("非表示")
    } else {
        pullDownParents.setAttribute("style", "display:block;")
        console.log("表示")
    }
})

pullDownChild.forEach(function(list){
    list.addEventListener('click', function(){
        const value = list.innerHTML
        currentList.innerHTML = value
        console.log(value)
    })
})

window.addEventListener('load', pullDown)