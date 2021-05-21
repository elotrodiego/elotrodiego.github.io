$(document).ready(function() {
    $('#pokeboton').click(function(){
        var urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=10'
        $.get({
            url: urlApi,
            success: function(datos) {

                var contenedor = $('#listado')
                contenedor.empty();

                var imagen = 'img/sin-imagen.jpeg'

                $.each(datos.results, function(i, pokemon){

                    $.get({
                        url: pokemon.url,
                        success: function(detalle) {
                            imagen = detalle.sprites.front_default
                            
                            $('#'+ pokemon.name).attr('src', imagen)

                        },
                        error: function(error) {
                            console.error(error);
                        }
                    });

                    contenedor.append(
                        createCard(pokemon.name, imagen, pokemon.name, pokemon.type)
                        );
                })
            },
            error: function(error) {
                console.error(error);
            }
        });
    });

    
    function createCard(id, img, titulo, descripcion) {
        var card = 
        "<div class='card'>"+
        "<img id='" + id + "' src='" + img + "' class='pokeimagen' alt='" + titulo + "'><div class='card-body'>"+
        "<p class='pokenombre'>" + titulo + "</p>" + 
        "<p class='poketipo'>" + descripcion + "</p></div></div>"
    
        return card
    }
});

