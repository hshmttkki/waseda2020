define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
var posWords = API.shuffle([
            'ãPÇ©ÇµÇ¢', 'å≥ãC', 'ç≈çÇ', 'å©éñÇ»', 
            'Ç∑ÇŒÇÁÇµÇ¢', 'ê≥ìñ', 'ó«Ç¢', 'ê≥ÇµÇ¢', 
            'çDÇ´','Ç§ÇÍÇµÇ¢', 'äÏÇ—', 'çKâ^Ç»', 
            'Ç´ÇÍÇ¢', 'Ç†ÇΩÇΩÇ©Ç¢', 'ñæÇÈÇ¢', 'Ç®Ç‡ÇµÇÎÇ¢', 
            'âıÇ¢', 'êœã…ìI', 'óFçDìIÇ»','çKÇπÇ»', 
            'óDèGÇ»', 'âhåı', 'ïΩòa', 'èŒäÁ', 
            'Ç©ÇÌÇ¢Ç¢', 'ñûë´Ç»', 'äyÇµÇ¢', 'ëfìGÇ»', 
            'èjïü', 'à§èÓ', 'ñ£óÕÇ†ÇÈ', 'ä¥ìÆ']);
  var negWords = API.shuffle([
            'à´Ç¢', 'óÚÇ¡ÇƒÇ¢ÇÈ', 'ä‘à·Ç¢', 'ïsâı', 
            'åôÇ¢', 'ïsìñ', 'é∏îs', 'ìfÇ´ãC', 
            'ïsâ^Ç»', 'Ç´ÇΩÇ»Ç¢', 'í…Ç‹ÇµÇ¢', 'ç≈í·', 
            'Ç¬ÇﬂÇΩÇ¢', 'Ç¢Ç∂ÇÌÇÈ', 'Ç¬Ç‹ÇÁÇ»Ç¢', 'à√Ç¢', 
            'ã∞ÇÎÇµÇ¢','Ç™Ç¡Ç©ÇË', 'ì≈', 'îﬂÇµÇ›',  
            'ïsê≥', 'ãÍîY', 'Ç›Ç…Ç≠Ç¢', 'é◊à´Ç»', 
            'ç¢ÇÈ', 'Ç…Ç≠ÇµÇ›', 'Ç¢ÇÁÇ¢ÇÁ', 'ç–ìÔ', 
            'ÇÌÇ¥ÇÌÇ¢', 'é„Ç¢', 'Ç–Ç«Ç¢', 'ì{ÇË']);
	return iatExtension({
		category1 : {
			name : 'Old people', //Will appear in the data.
			title : {
				media : {word : 'Old people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image: 'om1.jpg'},
                {image: 'om2.jpg'},
                {image: 'om3.jpg'},
                {image: 'of1.jpg'},
                {image: 'of2.jpg'},                 
                {image: 'of3.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Young people', //Will appear in the data.
			title : {
				media : {word : 'Young people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image: 'ym1.jpg'},
                {image: 'ym2.jpg'},
                {image: 'ym3.jpg'},
                {image: 'yf1.jpg'},
                {image: 'yf2.jpg'},
                {image: 'yf3.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
	attribute1 :
		{
			name : 'Bad',
			title : {
				media : {word : 'Bad'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: negWords[0]},
				{word: negWords[1]},
				{word: negWords[2]},
				{word: negWords[3]},
				{word: negWords[4]},
				{word: negWords[5]},
				{word: negWords[6]},
				{word: negWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Good',
			title : {
				media : {word : 'Good'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: posWords[0]},
				{word: posWords[1]},
				{word: posWords[2]},
				{word: posWords[3]},
				{word: posWords[4]},
				{word: posWords[5]},
				{word: posWords[6]},
				{word: posWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
