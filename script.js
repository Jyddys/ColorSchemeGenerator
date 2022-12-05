const colorPickValue = document.getElementById('color-pick')
const colorPickBtn = document.getElementById('get-color')
const color1 = document.getElementById('color-1')
colorPickBtn.addEventListener('click', getColor)

function getColor() {
console.log(colorPickValue)
color1.style.backgroundColor = colorPickValue.value
}


fetch("https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome&image&bare")
  .then(res => res.json())
  .then(data => {
    console.log(data[1])
  
  }
    )