function navbar_on_focus(e){

	$( '#topheader #navbar_ul' ).find( '.active' ).removeClass( 'active' );
	//console.log(this)
	$(e).addClass("nav-item active");
}
functon change_mode(e){

   var element = document.body;
   element.classList.toggle("dark-mode");

}
