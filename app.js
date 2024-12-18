const userCharge = document.querySelector(`#userCharge`)
const testCharge = document.querySelector(`#testCharge`)

window.navigator.getBattery().then(function(data){
    const btrLevel = Math.round(data.level * 100)

    userCharge.style.width = `${btrLevel}%`
    userCharge.textContent = `${btrLevel}%`

    if(data.charging){
        userCharge.classList.add(`progress-bar-striped` , `progress-bar-animated` , `bg-success`) 
        testCharge.textContent = "Your device is charging..."
    }
})