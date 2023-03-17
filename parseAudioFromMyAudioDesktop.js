{
    let n = document.querySelectorAll('.audio_row__performer_title');
     i=1;
    n.forEach(e => {
        
  	
  	console.log(i+' '+e.getElementsByTagName('a')[0].textContent+' - '+e.getElementsByTagName('a')[1].textContent);
        i++});
	
}