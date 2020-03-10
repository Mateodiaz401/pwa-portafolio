
//Guardar en el cache dinamico
function actualizaCacheDinamico(dynamicCahce, req, res){

    if( res.ok ){
        return caches.open(dynamicCahce).then(cache => {
            cache.put( req, res.clone());
            return res.clone();
        });
    }else
    {
        return res;
    }
}