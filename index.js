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
const toggleInput = document.querySelector(".toggle input");

function setDarkMode(isDark) {
  if (isDark) {
    themeStyle.setAttribute('href', './index_dark_mode.css');
    wave.innerHTML = darkmodewave;
  } else {
    themeStyle.setAttribute('href', './index.css');
    wave.innerHTML = lightmodewave;
  }
  localStorage.setItem('darkMode', isDark);
}

toggleInput.addEventListener("change", (evt) => {
  // Set dark mode or light mode based on the checkbox state
  setDarkMode(evt.target.checked);
});

// On page load, apply saved mode from localStorage
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
toggleInput.checked = savedDarkMode;
setDarkMode(savedDarkMode);


