{
    let n = document.querySelectorAll('.audio_row__performer_title');
     i=1;
    n.forEach(e => {
        
  	//console.log(e);
  	console.log(i+' '+e.getElementsByClassName('artist_link')[0].textContent+' - '+e.getElementsByClassName('audio_row__title_inner _audio_row__title_inner')[0].textContent);
        i++});
	
}