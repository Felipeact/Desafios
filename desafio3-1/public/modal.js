const modalOverlay = document.querySelector('.modal-overlayStarter');
const starter = document.querySelector('.starter')
const modal = document.querySelector('.modal-overlayLaunchBase');
const launchbase = document.querySelector('.launchbase')

    starter.addEventListener('click', () => {
        const img = starter.getAttribute('id')
        modalOverlay.classList.add('active')

        modalOverlay.querySelector('img').src = `https://skylab.rocketseat.com.br/static/${img}`
    })

    launchbase.addEventListener('click', () => {
        const img = launchbase.getAttribute('id')
        modal.classList.add('active')

        modal.querySelector('img').src = `https://skylab.rocketseat.com.br/static/${img}`
    })



document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = ""
})

document.querySelector('.close-modal2').addEventListener('click', () => {
    modal.classList.remove('active')
    modal.querySelector('img').src = ""
})
