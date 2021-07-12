var config = {
    content: [{
        type: 'row',
        isClosable: false,
        content:[{
            type: 'column',
            content:[{
                type: 'component',
                componentName: 'example',
                componentState: { text: 'Controles' }
            },{
                type: 'component',
                componentName: 'example',
                componentState: { text: 'Parametros' }
            }]
        },{
            type: 'row',
            content:[{
                type: 'component',
                componentName: 'example',
                componentState: { text: 'Mapa' }
            }]
        }]
    }]
};

var myLayout = new window.GoldenLayout( config, $('#layoutContainer') );


myLayout.registerComponent( 'example', function( container, state ){
    container.getElement().html( '<h2>' + state.text + '</h2>' );
});


myLayout.init();


var addMenuItem = function(title, text) {
    var element = $( '<li>' + text + '<li>');
    $( '#menuContainer' ).append( element );

    var newItemConfig = {
        title: title,
        type: 'component',
        componentName: 'example',
        componentState: { text: 'Mapa' }
    };

    element.click(function(){
        myLayout.root.contentItems[ 0 ].addChild( newItemConfig );
    });

};

addMenuItem( 'example', 'Agregar MAPA' );
