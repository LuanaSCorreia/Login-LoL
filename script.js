let [input1, input2] = document.querySelectorAll('input')
let btn = document.querySelector(".seta")
function handleChange(){
    if(input1.value && input2.value.length >= 7){
      btn.style.background= '#FF002E' 
    }else{
      btn.style.background='lightpink'
    }
}

input1.addEventListener('input', handleChange)
input2.addEventListener('input', handleChange)