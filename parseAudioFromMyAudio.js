{
    let n = document.querySelectorAll('.ai_label');
     i=1;
    n.forEach(e => {
        
  	
  	console.log(i+' '+e.getElementsByClassName('ai_artist')[0].textContent+' - '+e.getElementsByClassName('ai_title')[0].textContent);
        i++});
	
}