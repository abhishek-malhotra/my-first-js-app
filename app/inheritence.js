import Ember from 'ember';

export default function(){
	//using plain js.
	console.log('using plain java script!');

	var base = {
		baseProperty : true;
	};

	var derived = Object.create(base);
	console.log(derived.baseProperty);

	//using ember.js
	console.log('Using ember java script');

	var base = Ember.Object.extend({
		baseProperty : true;
	});

	var derived = base.extend({
		derivedProperty : false;
	});

	var derivedObject = derived.create();


	console.log(derivedObject.get('baseProperty'));
	console.log(derivedObject.get('derivedProperty'));

}
