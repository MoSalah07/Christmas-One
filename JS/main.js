window.addEventListener( 'DOMContentLoaded', header );

function header() {
    const header = document.querySelector( '.header' );
    const searchBtn = document.querySelector( '#search-btn' );
    const form = document.querySelector( '.header .search-from' );
    const menuBtn = document.querySelector( '#menu-btn' );
    const navbar = document.querySelector( '.header .navbar' );
    // For Search
    searchBtn.addEventListener( 'click', function() {
        this.classList.toggle( 'fa-times' );
        form.classList.toggle( 'active' );
        menuBtn.classList.remove( 'fa-times' );
        navbar.classList.remove( 'active' );
    });
    window.addEventListener('scroll', function () {
        searchBtn.classList.remove( 'fa-times' );
        form.classList.remove( 'active' );
        menuBtn.classList.remove( 'fa-times' );
        navbar.classList.remove( 'active' );
        window.scrollY > 650 ? header.classList.add( 'active' ) : header.classList.remove( 'active' );
        let value = window.scrollY / 10;
        const home = document.querySelector( '.home' );
        home.querySelector( '.mount' ).style.bottom = `${ -value }%`;
        home.querySelector( '.content' ).style.bottom = `${ value }%`;
        home.querySelector( '.moon' ).style.marginTop = `${ -value }%`;
        home.querySelector( '.cloud-1' ).style.left = `${ -value }%`;
        home.querySelector( '.cloud-2' ).style.right = `${ -value }%`;
    });
    
    // For Navbar
    menuBtn.addEventListener('click', function () {
        this.classList.toggle( 'fa-times' );
        navbar.classList.toggle( 'active' );
        searchBtn.classList.remove( 'fa-times' );
        form.classList.remove( 'active' );
    });
}

AOS.init( {
    duration: 600,
});

