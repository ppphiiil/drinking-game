(this["webpackJsonpdrinking-game"]=this["webpackJsonpdrinking-game"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var i,r=n(0),c=n(10),a=n(33),s=n(9),o=n(16),d=n(64),l=n.n(d),j=n(67),b=n.n(j),h=n(11),x=n(1),u=Object(r.createContext)(null),p={players:[{name:"Spieler 1",gender:"male",activeCards:[],cardHistory:[]},{name:"Spieler 2",gender:"male",activeCards:[],cardHistory:[]}],gameSettings:{},cardHistoryAll:[],round:0},g=function(e){var t=e.children,n=Object(r.useState)(0),i=Object(h.a)(n,2),c=i[0],a=i[1],s=Object(r.useState)(null),o=Object(h.a)(s,2),d=o[0],l=o[1],j=Object(r.useState)(p),b=Object(h.a)(j,2),g=b[0],O=b[1],m=Object(r.useState)(!1),f=Object(h.a)(m,2),y=f[0],v=f[1],k=p.players[0],w=Object(r.useState)(k),C=Object(h.a)(w,2),S=C[0],z=C[1];return Object(x.jsx)(u.Provider,{value:{page:c,setPage:a,displayedCard:d,setDisplayedCard:l,gameInfos:g,setGameInfos:O,currentPlayer:S,setCurrentPlayer:z,skip:y,setSkip:v},children:t})},O=o.a.div(i||(i=Object(c.a)(["\n   \n     display:flex;\n     justify-content: space-between;\n     padding:10px 15px 5px 10px;\n   \n    "])));function m(){var e=Object(r.useContext)(u),t=e.currentPlayer;e.setCurrentPlayer;return Object(x.jsxs)(O,{children:[Object(x.jsx)(l.a,{}),Object(x.jsx)("span",{children:t&&t.name}),Object(x.jsx)(b.a,{})]})}var f,y=n(123),v=n(125),k=n(126),w=n(69),C=n.n(w),S=n(71),z=n.n(S),L=n(70),P=n.n(L),M=n(68),D=n.n(M),I=o.a.div(f||(f=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    background-color: white;\n  "])));function A(){var e=Object(r.useContext)(u),t=e.page,n=e.setPage,i=Object(r.useContext)(u),c=i.skip,a=i.setSkip;return Object(x.jsx)(I,{children:Object(x.jsx)(y.a,{sx:{width:375},children:Object(x.jsxs)(v.a,{showLabels:!0,value:t,onChange:function(e,t){n(t)},children:[Object(x.jsx)(k.a,{label:"Game",icon:Object(x.jsx)(D.a,{})}),Object(x.jsx)(k.a,{label:"History",icon:Object(x.jsx)(C.a,{})}),Object(x.jsx)(k.a,{label:"Settings",icon:Object(x.jsx)(P.a,{})}),Object(x.jsx)(k.a,{label:"Skip",onClick:function(){a(!c)},icon:Object(x.jsx)(z.a,{})})]})})})}var B=n(124);function H(){return Object(x.jsx)("div",{children:Object(x.jsxs)(a.b,{to:"/game",children:[" ",Object(x.jsx)(B.a,{variant:"contained",children:"Start Game"})]})})}console.log(" startpage process.env.PUBLIC_URL","");var W,F,G,T,U,J,K=[{rating:1,description:"Stehe ab jetzt auf einem Bein",tagLocation:["home"]},{rating:1,description:"Wiederhole ab jetzt immer das letzte Wort deines Satzes.",tagLocation:["home"]},{rating:1,description:"Sei ein Luder! Flirte ab jetzt mit deinem rechten Nachbarn. Bis er dir einen kuss auf die Wange gibt.",tagLocation:["home"]},{rating:1,description:"Ab jetzt versuche immer zweideutig zu sprechen.",tagLocation:["home"]},{rating:3,description:"Ziehe deinem rechten Nachbarn ein Kleidungsst\xfcck mit dem Mund aus.",tagLocation:["home","erotic"]},{rating:1,description:"Mache 10 Liegest\xfctze",tagLocation:["home"]},{rating:1,description:"Wechsle ein Kleidungsst\xfcck mit jemandem deiner Wahl, der jenige muss mitmachen oder f\xfcr dich trinken.",tagLocation:["home"]},{rating:1,description:"Sprich ab jetzt mit einem Akzent",tagLocation:["home"]},{rating:1,description:"Ziehe ein Kleidungsst\xfcck aus.",tagLocation:["home"]}],E=[{rating:1,description:"Trinke 1 Schluck"},{rating:1,description:"Trinke 2 Schlucke"}],N=[{rating:1,description:"Jeder trinkt ab jetzt mit der linken Hand"},{rating:1,description:"Trinkbuddy",longDescription:"Dein linker Partner ist ab jetzt dein Trinkbuddy und trinkt immer wenn du trinken musst "},{rating:1,description:"Flirtalarm",longDescription:"Der beste Anmach-Spruch verteilt 5 Schlucke. "}],R=n(75),Z=n.n(R),_=n(73),q=n(74),Q=o.a.div(W||(W=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  width: 100vw;\n  max-width: 500px;\n  height: 100%;\n  padding: 0px 10px 10px 10px;\n"]))),V=o.a.div(F||(F=Object(c.a)(["\n  background-color: #0b132b;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  box-shadow: #0000006f 0px 10px 10px -4px;\n  padding: 30px;\n  color: white;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n"]))),X=o.a.div(G||(G=Object(c.a)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  width: 100%;\n"]))),Y=o.a.span(T||(T=Object(c.a)(["\n  font-size: 2rem;\n"]))),$=o.a.span(U||(U=Object(c.a)(["\n  width: 60%;\n  padding-top: 20px;\n  font-size: 1rem;\n  line-height: 1.5rem;\n"]))),ee=o.a.div(J||(J=Object(c.a)(["\n  margin-bottom: 20px;\n"])));function te(){var e=Object(r.useContext)(u),t=e.displayedCard,n=e.setDisplayedCard,i=Object(r.useContext)(u),c=i.currentPlayer,a=i.setCurrentPlayer,s=Object(r.useContext)(u),o=s.gameInfos,d=(s.setGameInfos,Object(r.useContext)(u)),l=d.skip,j=(d.setSkip,function(){n(h(b[Math.floor(Math.random()*b.length)],1))});Object(r.useEffect)((function(){n(j)}),[l]);var b=["doOrDrink","rules"],h=function(e,t){if("rules"===e){var n=N[Math.floor(Math.random()*N.length)];return Object(x.jsxs)(X,{children:[Object(x.jsx)(ee,{children:Object(x.jsx)(_.a,{icon:q.a,size:"4x"})}),Object(x.jsx)(Y,{children:n.description}),Object(x.jsx)($,{children:n.longDescription})]})}if("doOrDrink"===e)return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(X,{children:Object(x.jsx)("span",{children:K[Math.floor(Math.random()*K.length)].description})}),Object(x.jsx)("h2",{children:"Oder"}),Object(x.jsx)(X,{children:Object(x.jsx)("span",{children:E[Math.floor(Math.random()*E.length)].description})})]})};return Object(x.jsx)(Q,{children:Object(x.jsx)(V,{children:Object(x.jsxs)(x.Fragment,{children:[t,Object(x.jsx)("div",{style:{textAlign:"right",cursor:"pointer"},onClick:function(){console.log("last currentPlayer",c),a(function(e){console.log("next Player should be",o.players.indexOf(e)+2);var t=o.players.indexOf(e);return t<o.players.length-1?o.players[t+1]:o.players[0]}(c)),console.log("new currentPlayer",c),j()},children:Object(x.jsx)(Z.a,{})})]})})})}function ne(){var e=Object(r.useContext)(u);e.page,e.setPage;return Object(x.jsx)("div",{children:Object(x.jsx)(te,{})})}var ie,re,ce;n(95);n(96).config(),console.log("app process.env.PUBLIC_URL","/");var ae=o.a.div(ie||(ie=Object(c.a)(["\n  height: 100%;\n  font-size: 2rem;\n  width: 100vw;\n"]))),se=o.a.div(re||(re=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  font-size: 1rem;\n  position: relative;\n  width: 100%;\n"]))),oe=o.a.div(ce||(ce=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  flex-grow: 1;\n \n  width: 100%;\n"])));var de=function(){return Object(x.jsx)(a.a,{children:Object(x.jsx)(ae,{children:Object(x.jsxs)(se,{children:[Object(x.jsx)(m,{}),Object(x.jsx)(oe,{children:Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{exact:!0,path:"/",children:Object(x.jsx)(H,{})}),Object(x.jsx)(s.a,{path:"/game",children:Object(x.jsx)(ne,{})})]})}),Object(x.jsx)(A,{})]})})})},le=n(76);n.n(le).a.render(Object(x.jsx)(g,{children:Object(x.jsx)(de,{})}),document.getElementById("root"))},95:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.e066575c.chunk.js.map