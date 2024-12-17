const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

// Add the new TOC positioning code
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.md-sidebar-toc')
    if (sidebar) {
        sidebar.style.right = '0'
        sidebar.style.left = 'auto'
    }
})
