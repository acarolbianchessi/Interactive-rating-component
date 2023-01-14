var rate

function onRateButtonClick(element) { 
    var submit = document.querySelector('.submit')
    submit.disabled = false
    var botaoAntigo = document.querySelector('.selected')
    botaoAntigo?.classList.remove('selected')
    element.classList.add('selected')
    rate = element.innerHTML
}

function onSubmit() {
    document.querySelector('.first').style.display = 'none'
    document.querySelector('.thankyou').style.display = 'block'
    document.querySelector('.rate').innerHTML = `You selected ${rate} out of 5`
}

