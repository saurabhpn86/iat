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
{word: 'Muhammad'},
					{word: 'Saleem'},
					{word: 'Asad'},
					{word: 'Ahmed'},
					{word: 'Bilal'},
					{word: 'Hamza'}
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
					{word: 'Aakash'},
					{word: 'Rohit'},
					{word: 'Abhishek'},
					{word: 'Sunil'},
					{word: 'Amit'},
					{word: 'Sanjay'}		], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		}
	});
});