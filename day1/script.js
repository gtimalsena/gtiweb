const panels = document. querySelectorAll('.panel')
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        noActiveClasses()
        panel.classList.add('active')
    })    
});

function noActiveClasses() {
    panels.forEach ((panel) => {
        panel.classList.remove('active')
    })

}