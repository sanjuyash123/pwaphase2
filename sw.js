var cache="c1";
this.addEventListener("install",function(event){
	event.waitUntil(
		caches.open(cache1).then(cache=>{
			cache.addAll([
				])
		})
		);
});



this.addEventListener('fetch',function(event){
	event.respondWidth(
		caches.open(cache1).then(cache=>{
        return cache.match(evet.request).then(function(res){
        	return res || fetch(event.request).then(function(reqres){
        		cache.put(event.request,reqres.clone());
        	})
        }) 
		})
		)
})