Unno.component('Header', ['$react', '$dom', '$router'], function(React, D, Router) {

   var Header,
       Link = React.createFactory(Router.Link),
       RouteHandler = React.createFactory(Router.RouteHandler);

   Header = {
      render: function() {
         return D.div({},
            D.header({ className:'header'},
               D.div({ className:'container' },
                  D.ul({ className:'navigation' },
                     D.li({}, String.fromCharCode(160)),
                     D.li({}, D.img({ src:'../assets/img/unno_150.png', width:'45'})),
                     D.li({}, String.fromCharCode(160)),
                     D.li({}, Link({ to:'/' }, 'Home')),
                     D.li({}, Link({ to:'about'}, 'About'))
                  )
               )
            ),
            D.div({ className:'row'},
               D.div({ className:'col1of12', style:{'padding':'5px'}}, RouteHandler({}))
            )
         )
      }
   };

   return Header;
});