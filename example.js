define(['pipAPI', 'https://raw.githubusercontent.com/saurabhpn86/iat/master/javascript.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Muslims', //Will appear in the data.
			title : {
				media : {word : 'Muslims'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Salman'},
					{word: 'Ahmed'},
					{word: 'Muhammed'},
					{word: 'Zakir'},
					{word: 'Iqbal'},
					{word: 'Asad'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Hindus', //Will appear in the data.
			title : {
				media : {word : 'Hindus'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Amit'},
					{word: 'Sanjay'},
					{word: 'Sunil'},
					{word: 'Ramesh'},
					{word: 'Rakesh'},
					{word: 'Rohit'}		], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		}	
	});
});
