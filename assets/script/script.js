console.log('Bisa Jalan...')

let isDisplay = false

const hamburger = document.getElementById('hamburger')
const listNav = document.getElementById('listNav')

hamburger.addEventListener('click', () => {
    console.log(listNav)
    if (isDisplay) {
        listNav.style.display = 'none'
        isDisplay = false
    } else {
        listNav.style.display = 'flex'
        isDisplay = true
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
        listNav.style.display = 'flex'
        isDisplay = true
    }
})

git add .
git commit -m "init: initial commit"
git branch -M main