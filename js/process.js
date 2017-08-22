// to convert scene start/end times into seconds
function sec(timeString){
    var sec = 0;
    if (timeString.length == 0) return sec;
    var splitArray = timeString.split(":");
    sec = 3600*parseFloat(splitArray[0])+60*parseFloat(splitArray[1])+parseFloat(splitArray[2]);
    return sec;
}

// to dedpulicate an array
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

// import characters JSON file
$.getJSON( "data/characters.json", function( data ) {
	var list = data.characters;
	for (var i in list) {
  	//console.log(list[i].characterName);
	}
});

// variable for episodes from episodes.json 
var list;
// separator character
var sep = "#";
// estimated height of visualization in pixels
var estimatedHeight = 2000;
// calculated height of visualization in pixels
var height;
// offset for space between lanes in visualization
var offset;
// counter for the total number of seconds elapsed
var totalTime = 0;
// array for the opening locations
var allOpeningLocations = [];
// array for episode and season lengths
var episodeLengths = [];
// array for all characters
var allCharacters = [];
// object for characters with scene information
var charactersScene = {};
var uniqueCharacters = [];
// empty array for scenes/locations/characters
var arraySceLocChar = [];
var arraySceLocCharObj = [];
// object for scene locations
var sceneLocations = [];
var sceneLocSorted = [];
// object for characters to include
var charactersInclude = [];
// object for scene locations with sublocations
var sceneSubLocations = [];
// variable to calculate (or not) maximum number of characters in a location
var countMax = true;
// variable to include subLocations in sceneLocations
var useSubLocation = true;
// variable to show subLocations as their own regions on map
var showSubLocation = false;
// variable to include who is in which location
var includeWhosThere = false; // can delete
// variable to import locations or not, whether or not to get arraySceLocChar
var importLocations = true;
// variable to reduce arraySceLocChar or not
var arraySceLocCharReduce = false;

var keyValues = [];

var maxCharLoc = [];

// import episodes JSON file
$.getJSON( "data/episodes.json", function( data ) {
  console.log("episodes.json loaded.");
	
  list = data.episodes;
	for (var i in list) {

		// act on opening sequence locations
		var openingLocations = data.episodes[i].openingSequenceLocations;
		for (var k in openingLocations){
			// append opening sequence location to array
			allOpeningLocations.push(openingLocations[k]);
		}

    // build the episodeLengths 2D array for seasons...
    if(episodeLengths.length < list[i].seasonNum){
      episodeLengths.push({"seasonNum":list[i].seasonNum, "length":0, "shift":0, "episodes":[]});
    }
    // ... and episodes
    if(episodeLengths[list[i].seasonNum-1].episodes.length < list[i].episodeNum){
      episodeLengths[list[i].seasonNum-1].episodes.push({"episodeNum":list[i].episodeNum, "length":0, "episodeTitle":list[i].episodeTitle});
    }

		// act on scenes
		var scenes = data.episodes[i].scenes;
		for (var j in scenes){
			// calculate length of scene in seconds
			var sceneLength = sec(scenes[j].sceneEnd) - sec(scenes[j].sceneStart);
			// append absolute value of scene start in seconds
			scenes[j].absStartSec = totalTime;
			// append absolute value of scene end in seconds
			scenes[j].absEndSec = totalTime + sceneLength;
			// add scene length to total time
			totalTime += sceneLength;

      // add scene length to correct entry in episodeLengths array
      episodeLengths[list[i].seasonNum-1].episodes[list[i].episodeNum-1].length = parseInt(episodeLengths[list[i].seasonNum-1].episodes[list[i].episodeNum-1].length) + sceneLength;
      // add scene length to overall season length
      episodeLengths[list[i].seasonNum-1].length = parseInt(episodeLengths[list[i].seasonNum-1].length) + sceneLength;

      // add scene location to sceneLocations array
      var locationName = scenes[j].location+sep;
      // if useSubLocation variable is true then include #subLocation
      if(scenes[j].subLocation && useSubLocation){
        locationName += scenes[j].subLocation;
      }
      sceneLocations.push(locationName);

      // add characters in scene to allCharacters array
      for (var k in scenes[j].characters){
        if(scenes[j].characters[k].name.length > 0){
          allCharacters.push(scenes[j].characters[k].name);
        }
      }
		}
		// list all episode titles
  	// console.log(list[i].episodeTitle);
	}

  // generate x-coordinate shift for episodes & seasons
  var episodeShift = 0;
  var seasonShift = 0;
  for(i=0; i<episodeLengths.length; i++){
    episodeLengths[i].shift = seasonShift;
    for(j=0; j<episodeLengths[i].episodes.length; j++){
      episodeLengths[i].episodes[j].shift = episodeShift;
      episodeShift += episodeLengths[i].episodes[j].length;
    }
    seasonShift += episodeLengths[i].length;
  }

	// deduplicate the list of opening locations
	var uniqueOpeningLocations = allOpeningLocations.filter(onlyUnique);
	// console.log('uniqueOpeningLocations:', uniqueOpeningLocations);

  // deduplicate the list of scene locations
  sceneLocations = sceneLocations.filter(onlyUnique).sort();
  //console.log('sceneLocations:', sceneLocations);

	// deduplicate the list of characters from scenes
	uniqueCharacters = allCharacters.filter(onlyUnique).sort();
	//console.log('uniqueCharacters:', uniqueCharacters);

  // list the full episodeLengths array
  //console.log('episodeLengths:', episodeLengths);

	// list the full episodes object
	//console.log('list:', list);
	
	// list the sum of the episodes in seconds
	//console.log('totalTime:', totalTime);

  
  if(countMax){
  /* BUILD 3D ARRAY */
    // iterate over the scenes in the list
    for (var i in list) {
      var scenes = list[i].scenes;
      for (var j in scenes){
        // empty array for locations/characters
        var arrayLocChar = [];
        
        // iterate over the possible locations
        for (k=0; k<sceneLocations.length; k++){
          // make empty array for characters
          var arrayChar = [];
          // fill empty array with placeholders for all characters
          if(j==0 && i==0){
            for(l=0; l<uniqueCharacters.length; l++){
              arrayChar.push(0);
            }
          } else {
            for(l=0; l<uniqueCharacters.length; l++){
              arrayChar.push("");
            }
          }

          var locationName = scenes[j].location+sep;
          // if useSubLocation variable is true then include #subLocation
          if(scenes[j].subLocation && useSubLocation){
            locationName += scenes[j].subLocation;
          }
          
          if(sceneLocations[k] == locationName){
            // is the location of the scene so replace value in array with 1's if the character is there
            var chars = scenes[j].characters;
            for (var l in chars){
              for (m=0; m<uniqueCharacters.length; m++){
                if(chars[l].name == uniqueCharacters[m]){
                  if(chars[l].alive === false){
                    arrayChar[m] = "dead";
                  } else {
                    arrayChar[m] = 1;
                  }
                }
              }
            }
          } else {
            // is not the location of the scene so replace value in array with 0's since character cannot be there
            var chars = scenes[j].characters;
            for (var l in chars){
              for (m=0; m<uniqueCharacters.length; m++){
                if(chars[l].name == uniqueCharacters[m]){
                  arrayChar[m] = 0;
                }
              }
            }
          }
          arrayLocChar.push(arrayChar);
        }
        arraySceLocChar.push(arrayLocChar);
      }
    }
    /* End BUILD 3D ARRAY */

    /* MODIFY 3D ARRAY */
    // arraySceLocChar[scenes][locations][characters]

    // iterate over scenes and if value == "dead" set value = 1 and next scene value of same character in same location = 0
    for(i=0; i<arraySceLocChar.length; i++){
      for(j=0; j<arraySceLocChar[i].length; j++){
        for(k=0; k<arraySceLocChar[i][j].length; k++){
          if(arraySceLocChar[i][j][k] === "dead"){
            arraySceLocChar[i+1][j][k] = 0;
            arraySceLocChar[i][j][k] = 1;
          }
        }
      }
    }

    // forward flesh out - if value == 0, look at same character, same location in next scene - if "", set to 0
    for(i=1; i<arraySceLocChar.length; i++){
      for(j=0; j<arraySceLocChar[i].length; j++){
        for(k=0; k<arraySceLocChar[i][j].length; k++){
          if(arraySceLocChar[i][j][k] === ""){
            if(arraySceLocChar[i-1][j][k] === 0){
              arraySceLocChar[i][j][k] = 0;
            }
          }
        }
      }
    }

    // backward flesh out - if value == 0, look at same character, same location in previous scene - if "", set to 0
    for(i=arraySceLocChar.length-1; i<0; i--){
      for(j=0; j<arraySceLocChar[i].length; j++){
        for(k=0; k<arraySceLocChar[i][j].length; k++){
          if(arraySceLocChar[i][j][k] === 0 && arraySceLocChar[i-1][j][k] === ""){
            arraySceLocChar[i-1][j][k] = 0;
          }
        }
      }
    }

    // replace remaining "" with 1
    for(i=0; i<arraySceLocChar.length; i++){
      for(j=0; j<arraySceLocChar[i].length; j++){
        for(k=0; k<arraySceLocChar[i][j].length; k++){
          if(arraySceLocChar[i][j][k] === ""){
            arraySceLocChar[i][j][k] = 1;
          }
        }
      }
    }
    /* End MODIFY 3D ARRAY */

    /* ANALYZE 3D ARRAY */

    // make an empty array
    //var maxCharLoc = [];
    for (i=0; i<sceneLocations.length; i++){
      var maxChar = 0;
      var whosThere = [];
      // iterate over scenes for each location
      for(j=0; j<arraySceLocChar.length; j++){
        // make a counter = 0
        var numChar = 0;
        // count number of characters at a location in a scene
        for(k=0; k<arraySceLocChar[j][i].length; k++){
          numChar += arraySceLocChar[j][i][k];
          if(includeWhosThere && arraySceLocChar[j][i][k] === 1){
            whosThere.push(uniqueCharacters[k]);
          }
        }

        // if value is more than counter, store as counter
        if(numChar > maxChar){
          maxChar = numChar;
        }
      }
      // push value of location and value of counter to array
      if(includeWhosThere){
        var locationNameMax = {"name":sceneLocations[i], "max":maxChar, "whosThere":whosThere.filter(onlyUnique).sort()};
      } else {
        var locationNameMax = {"name":sceneLocations[i], "max":maxChar};
      }
      maxCharLoc.push(locationNameMax);
    }

    // reduce the array of 1's and 0's to the total number of people there
    if(arraySceLocCharReduce){
      for(i=0; i<arraySceLocChar.length; i++){
        for(j=0; j<arraySceLocChar[i].length; j++){
          var charSum = 0;
          for(k=0; k<arraySceLocChar[i][j].length; k++){
            charSum += arraySceLocChar[i][j][k];
          }
          arraySceLocChar[i][j] = charSum;
        }
      }
    }

    // sum over all max values = total number of 'lanes'
    var totalMax = 0;
    for (var i in maxCharLoc){
      totalMax += maxCharLoc[i].max;
    }

    offset = Math.ceil(estimatedHeight/totalMax);
    height = offset * totalMax;
    /* End ANALYZE 3D ARRAY */
      
  } // end build3Darray, end if(countMax)

  /* End IMPORT SORTED LOCATIONS */
})

// import characters-include JSON file
.done(function(){
  $.getJSON( "data/characters-include.json", function( data ) {
    console.log("characters-include.json loaded.");
    var list = data.include;
    for (var i in list) {
      if(list[i].include == true){
        charactersInclude.push(list[i].name);
      }
    }
  });
})

// after building array, then import sorted locations */
.done(function(){
  if(importLocations){
    //import locations JSON file
    $.getJSON( "data/locations.json", function( data ) {
      console.log("locations.json loaded.");
      sceneSubLocations = data.regions;
      for(i in data.regions){
        if(!useSubLocation){
          for(k=0; k<maxCharLoc.length; k++){
            if(maxCharLoc[k].name == data.regions[i].location+sep){
              sceneLocSorted.push(maxCharLoc[k]);
            }
          }
        } else if(useSubLocation){
          for(j in data.regions[i].subLocation){
            for(k=0; k<maxCharLoc.length; k++){
              if(maxCharLoc[k].name == data.regions[i].location+sep+data.regions[i].subLocation[j]){
                sceneLocSorted.push(maxCharLoc[k]);  
              }
            }
          }
        }
      }
      console.log(sceneLocSorted);
    }).done(function(){
      buildCharactersScene();
    }); // END import locations.json file
  } else {
    // a static locations file made from the output of the function above to expedite the process
    $.getJSON( "data/locations-alt.json", function( data ) {
      console.log("locations-alt.json loaded.");
      if(!useSubLocation){
        // set location array to be sceneLocSorted
        sceneLocSorted = data.sceneLocSorted;
      } else {
        // set location array to be scenesubLocSorted
        sceneLocSorted = data.scenesubLocSorted;
      }
    }).done(function(){
      buildCharactersScene();
    }); // END import locations-alt.json file
  }
});

// execute after bringing in location file
function buildCharactersScene(){
  // add in middle value to sceneLocSorted
  var baseline = 0;
  for(i=0; i<sceneLocSorted.length; i++){
    var mid = baseline + Math.ceil(sceneLocSorted[i].max/2);
    sceneLocSorted[i].middle = mid;
    baseline += sceneLocSorted[i].max;
  }

  /* arraySceLocChar[scenes][locations][characters] */

  // make an object that has all scenes, locations, characters in it
  for(a=0; a<list.length; a++){
    for(b=0; b<list[a].scenes.length; b++){
      arraySceLocCharObj.push(list[a].scenes[b]);
    }
  }

  /* make an object that includes who is present in the location of each scene */
  
  // go through the scenes...
  for(a=0; a<arraySceLocCharObj.length; a++){
    // ... and determine the location of each scene
    var location = arraySceLocCharObj[a].location+sep;
    if(useSubLocation){
      if(arraySceLocCharObj[a].subLocation){
        location += arraySceLocCharObj[a].subLocation;
      }
    }
    // find the index of that location in sceneLocations - same index as in arraySceLocChar
    for(i=0; i<sceneLocations.length; i++){
      if(location == sceneLocations[i]){
        var charactersInScene = [];
        for(k=0; k<arraySceLocChar[a][i].length; k++){
          if(arraySceLocChar[a][i][k] === 1){
            charactersInScene.push({"name":uniqueCharacters[k]});
          }
        }
        arraySceLocCharObj[a].allCharacters = charactersInScene;
      }
    }

    // find the index of that location in sceneLocSorted
    var loc;
    for(k=0; k<sceneLocSorted.length; k++){
      if(location == sceneLocSorted[k].name){
        loc = k;
      }
    }

    //console.log(arraySceLocCharObj);

    // determine which characters from allCharacters are actually in the scene
    for(i=0; i<arraySceLocCharObj[a].allCharacters.length; i++){
      for(j=0; j<arraySceLocCharObj[a].characters.length; j++){
        if(arraySceLocCharObj[a].allCharacters[i].name == arraySceLocCharObj[a].characters[j].name){
          // adds the y-coordinate
          arraySceLocCharObj[a].allCharacters[i].y = sceneLocSorted[loc].middle - arraySceLocCharObj[a].allCharacters.length/2 + i;
          // add title if present
          if(arraySceLocCharObj[a].characters[j].title){
            arraySceLocCharObj[a].allCharacters[i].title = arraySceLocCharObj[a].characters[j].title;
          }
          // add "alive":false if present and has mannerOfDeath or killedBy
          if(arraySceLocCharObj[a].characters[j].alive == false && (arraySceLocCharObj[a].characters[j].mannerOfDeath || arraySceLocCharObj[a].characters[j].killedBy)){
            arraySceLocCharObj[a].allCharacters[i].alive = false;
          }
          // add "born":false if present
          if(arraySceLocCharObj[a].characters[j].born == false){
            arraySceLocCharObj[a].allCharacters[i].born = false;
          }
          // add "greensight":true
          if(arraySceLocCharObj[a].greensight){
            arraySceLocCharObj[a].allCharacters[i].greensight = true;
          }
          // add "flashback":true
          if(arraySceLocCharObj[a].flashback){
            arraySceLocCharObj[a].allCharacters[i].flashback = true;
          }
          // add "warg":true
          if(arraySceLocCharObj[a].warg){
            arraySceLocCharObj[a].allCharacters[i].warg = true;
          }
        }
      }
    }
  }
  
  // go through the scenes...
  for(a=0; a<arraySceLocCharObj.length; a++){
    // if not yet in charactersScene
    for(b=0; b<arraySceLocCharObj[a].allCharacters.length; b++){
      // if the character isn't yet in the object...
      if(charactersScene.hasOwnProperty(arraySceLocCharObj[a].allCharacters[b].name) == false){
        // ... add it with an object having a key called 'inScene' and an empty array for scene times
        charactersScene[arraySceLocCharObj[a].allCharacters[b].name] = {'inScene':[]};
        // also create a key 'name' with property of the character's name
        charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['name'] = arraySceLocCharObj[a].allCharacters[b].name;
        // also create a key 'totalTime' with value 0
        charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['totalTime'] = 0;
      }
      if(arraySceLocCharObj[a].allCharacters[b].y){
        // add the absolute start (s) and end (e) time to a new object in that array along with the location and y value (y)
        charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'].push({'s':arraySceLocCharObj[a].absStartSec, 'e':arraySceLocCharObj[a].absEndSec, /*'l':arraySceLocCharObj[a].location, */'y':arraySceLocCharObj[a].allCharacters[b].y});
        
        // add in additional variables: title (t), alive (a), born (b), greensight (g), flashback (f), warg (w)
        if(arraySceLocCharObj[a].allCharacters[b].title){
          charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'][charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'].length-1].t = arraySceLocCharObj[a].allCharacters[b].title;
        }
        if(arraySceLocCharObj[a].allCharacters[b].alive == false){
          charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'][charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'].length-1].a = false;
        }
        if(arraySceLocCharObj[a].allCharacters[b].born == false){
          charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'][charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'].length-1].b = false;
        }
        if(arraySceLocCharObj[a].allCharacters[b].greensight){
          charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'][charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'].length-1].g = arraySceLocCharObj[a].allCharacters[b].greensight;
        }
        if(arraySceLocCharObj[a].allCharacters[b].flashback){
          charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'][charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'].length-1].f = arraySceLocCharObj[a].allCharacters[b].flashback;
        }
        if(arraySceLocCharObj[a].allCharacters[b].warg){
          charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'][charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['inScene'].length-1].w = arraySceLocCharObj[a].allCharacters[b].warg;
        }

        // add the scene length to the totalTime
        charactersScene[arraySceLocCharObj[a].allCharacters[b].name]['totalTime'] += arraySceLocCharObj[a].absEndSec - arraySceLocCharObj[a].absStartSec;
      }
    }
  }

  // make keyValues array for d3
  for(i in charactersScene){
    keyValues.push({"key":charactersScene[i].name, "values":charactersScene[i].inScene});
  }

  // make the sceneLocSorted data if showSubLocation is false
  if(showSubLocation == false){
    var compiledLocations = [];
    var compiledSubLocations = [];
    // split location names into location and subLocation
    for(i=0; i<sceneLocSorted.length; i++){
      sceneLocSorted[i].location = sceneLocSorted[i].name.split("#")[0];
      sceneLocSorted[i].subLocation = sceneLocSorted[i].name.split("#")[1];
    }
    // build the array of objects with location names and max numbers
    for(i=0; i<sceneLocSorted.length; i++){
      if(i == 0){
        compiledLocations.push({"name":sceneLocSorted[i].location, "max":sceneLocSorted[i].max});
      } else if(sceneLocSorted[i].location == sceneLocSorted[i-1].location){
        for(j=0; j<compiledLocations.length; j++){
          if(compiledLocations[j].name == sceneLocSorted[i].location){
            compiledLocations[j].max += sceneLocSorted[i].max;
          }
        }
      } else {
        compiledLocations.push({"name":sceneLocSorted[i].location, "max":sceneLocSorted[i].max});
      }
    }
    // add the middle value for each location
    var baseline = 0;
    for(i=0; i<compiledLocations.length; i++){
      var mid = baseline + Math.ceil(compiledLocations[i].max/2);
      compiledLocations[i].middle = mid;
      baseline += compiledLocations[i].max;
    }
    // make the sceneSubLocSorted array
    for(i=0; i<sceneLocSorted.length; i++){
      compiledSubLocations.push({"name":sceneLocSorted[i].subLocation, "max":sceneLocSorted[i].max, "middle":sceneLocSorted[i].middle});
      if(sceneLocSorted[i].subLocation == ""){
        compiledSubLocations[i].name = sceneLocSorted[i].location;
      }
    }
    // make the keyValues.json file which goes into map.js
    $("body").append('{"keyValues":'+JSON.stringify(keyValues)+',"episodeLengths":'+JSON.stringify(episodeLengths)+',"sceneLocSorted":'+JSON.stringify(compiledLocations)+',"sceneSubLocSorted":'+JSON.stringify(compiledSubLocations)+'}');
  } else {
  // make the keyValues.json file which goes into map.js
  $("body").append('{"keyValues":'+JSON.stringify(keyValues)+',"episodeLengths":'+JSON.stringify(episodeLengths)+',"sceneLocSorted":'+JSON.stringify(sceneLocSorted)+'}');
  }
  $("#loading").hide();
};