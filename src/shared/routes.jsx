import React from "react";
import {browserHistory, Router, Route, IndexRoute} from "react-router";

/* 
	Les containers sont assimilé à un structure commune à plusieurs pages 
*/


/* 
	Les pages sont des éléments de contenu qui seront injectées dans
	le container parent, définit dans la route associée (cf. ci-dessous).
*/



export default (
	/*
	<Router history={browserHistory}>
	permet de gérer les url plus proprement (i.e sans les références du style ?_k=nt2q3u
	mais le serveur doit supporter history location.
	Or http-server ne le supporte pas, du coup react-router n'est pas appelé lors
	du refresh d'une route en dehors de la racine.
	Il faut configurer le serveur pour accepter history location (recoder un server avec express par exemple):
	
	On ajouter onUpdate pour scrollé au Top de la page au changement de route.
	*/
	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>


	</Router>




);
