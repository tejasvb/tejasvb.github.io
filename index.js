function navbar_on_focus(e){

	$( '#topheader #navbar_ul' ).find( '.active' ).removeClass( 'active' );
	//console.log(this)
	$(e).addClass("nav-item active");
}
