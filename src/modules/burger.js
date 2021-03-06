const burger = () => {
    const burgerBtn = document.querySelector('.mob-menu-btn')
    const mobileMenu = document.querySelector('.mobile-menu')

    burgerBtn.addEventListener('click', () => {
        mobileMenu.style.right = '0px'
    })

    document.addEventListener('click', (e) => {
        
        if (!(e.target.closest('.mobile-menu') || e.target.closest('.mob-menu-btn')) || e.target.closest('.mobile-menu-close') || e.target.closest('.callback-btn')) {
            mobileMenu.style.right = '-400px'
        }
    })
}

export default burger