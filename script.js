const colorPickValue = document.getElementById('color-pick')
const colorPickBtn = document.getElementById('get-color')

colorPickBtn.addEventListener('click', getColor)
window.addEventListener('load',getColor)



function getColor() {

  // Haetaan hex-arvo
const hexValue = colorPickValue 

const hexArvo = hexValue.value.slice(1,)

 // Haetaan color Scheme arvo
const themePick = document.getElementById('theme-pick').value

// API
fetch("https://www.thecolorapi.com/scheme?hex=" + hexArvo + "&mode=" + themePick + "&count=5")
  .then(res => res.json())
  .then(data => {
    // const array = data.image.bare

    const hexValue1 = data.colors[0].hex.value
    const hexValue2 = data.colors[1].hex.value
    const hexValue3 = data.colors[2].hex.value
    const hexValue4 = data.colors[3].hex.value
    const hexValue5 = data.colors[4].hex.value


    document.getElementById('hex-1').innerHTML = hexValue1
    document.getElementById('hex-2').innerHTML = hexValue2
    document.getElementById('hex-3').innerHTML = hexValue3
    document.getElementById('hex-4').innerHTML = hexValue4
    document.getElementById('hex-5').innerHTML = hexValue5

    document.getElementById('color-1').style.backgroundColor = hexValue1
    document.getElementById('color-2').style.backgroundColor = hexValue2
    document.getElementById('color-3').style.backgroundColor = hexValue3
    document.getElementById('color-4').style.backgroundColor = hexValue4
    document.getElementById('color-5').style.backgroundColor = hexValue5
  }
    )
}




   