console.log('Site loaded successfully.');

// Close Bootstrap collapse nav when a nav link is clicked (mobile)
(function(){
	document.addEventListener('click', function(e){
		var target = e.target;
		if(target.matches('.navbar-collapse .nav-link')){
			var bsCollapse = document.querySelector('.navbar-collapse');
			if(bsCollapse && bsCollapse.classList.contains('show')){
				var collapse = bootstrap.Collapse.getInstance(bsCollapse);
				if(collapse){ collapse.hide(); }
			}
		}
	});
})();

// Simple lazy-loading: add loading="lazy" to images if not present
(function(){
	document.querySelectorAll('img').forEach(function(img){
		if(!img.hasAttribute('loading')) img.setAttribute('loading','lazy');
	});
})();