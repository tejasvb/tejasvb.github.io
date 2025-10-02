function navbar_on_focus(e){

	$( '#topheader #navbar_ul' ).find( '.active' ).removeClass( 'active' );
	//console.log(this)
	$(e).addClass("nav-item active");
}
const toggleButton = document.getElementById('toggle');
const themeStyle = document.getElementById('theme-style');
const wave = document.querySelector('.parallax');
const darkmodewave = `  <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(000,000,000,0.7" />
<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(000,000,000,0.5)" />
<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(000,000,000,0.3)" />
<use xlink:href="#gentle-wave" x="48" y="7" fill="#1a1a1a"/>`
const lightmodewave = ` <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"/>`
document.querySelector(".toggle input").addEventListener("change", (evt) => {
	if (themeStyle.getAttribute('href') === './index.css') {
        themeStyle.setAttribute('href', './index_dark_mode.css');
        wave.innerHTML = darkmodewave;
  

       
        
    } else {
        themeStyle.setAttribute('href', './index.css');
        wave.innerHTML = lightmodewave;
    }
  });

