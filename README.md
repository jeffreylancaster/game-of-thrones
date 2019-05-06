# _Game of Thrones_ Datasets and Visualizations

## About this Project

- View all visualizations at [jeffreylancaster.github.io/game-of-thrones](https://jeffreylancaster.github.io/game-of-thrones/)

### Articles on Medium

- ["The Ultimate Game of Thrones Dataset"](https://medium.com/@jeffrey.lancaster/the-ultimate-game-of-thrones-dataset-a100c0cf35fb)
- ["32 Game of Thrones Data Visualizations"](https://medium.com/@jeffrey.lancaster/32-game-of-thrones-data-visualizations-f4ab6bc978d8)
- ["19 More Game of Thrones Data Visualizations"](https://medium.com/@jeffrey.lancaster/19-more-game-of-thrones-data-visualizations-bb2d2c0981f9)

### Data Visualization Episode Recaps

- ["Winterfell"](https://medium.com/@jeffrey.lancaster/game-of-thrones-s8-e1-data-visualization-recap-9656a97c3df3) (Season 8, Episode 1)
- ["A Knight of the Seven Kingdoms"](https://medium.com/@jeffrey.lancaster/game-of-thrones-s8-e2-data-visualization-recap-3d7336ca975e) (Season 8, Episode 2)
- ["The Long Night"](https://medium.com/@jeffrey.lancaster/game-of-thrones-s8-e3-data-visualization-recap-7843e1d24282) (Season 8, Episode 3)
- "The Last of the Starks" (Season 8, Episode 4)

## Visualizations

### Narrative Chart (`/map/`)

A visualization of when each character is on-screen throughout the show, where they are, with whom they are, when they die, and more. [Visualization](https://jeffreylancaster.github.io/game-of-thrones/map/) | [Code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/map/index.html)
   
### Costars List

A list of other films in which _Game of Thrones_ costars, well, costar. [Visualization](https://jeffreylancaster.github.io/game-of-thrones/costars-list/) | [Code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/costars-list/index.html)
   
### Costars Matrix

A matrix visualization of frequency of other films in which _Game of Thrones_ costars, well, costar. [Visualization](https://jeffreylancaster.github.io/game-of-thrones/costars-matrix/) | [Code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/costars-matrix/index.html)

### Supercut Duration

   A visualization of how long each character has been on-screen throughout the show
   
   [View](https://jeffreylancaster.github.io/game-of-thrones/duration-character/) | [<>](https://github.com/jeffreylancaster/game-of-thrones/blob/master/duration-character/index.html)

### Character Time Percentage Per Season

   A visualization of how much of a character's time on screen is spent in each season
   
   [View](https://jeffreylancaster.github.io/game-of-thrones/duration-percent/) | [<>](https://github.com/jeffreylancaster/game-of-thrones/blob/master/duration-percent/index.html)

### Force-Directed On-Screen Co-Occurrence (work in progress)

   A force-directed visualization of characters on-screen together throughout the show
   
   [View](https://jeffreylancaster.github.io/game-of-thrones/force-directed/) | [<>](https://github.com/jeffreylancaster/game-of-thrones/blob/master/force-directed/index.html)

### Character Co-Occurrence Matrix

   A matrix visualization of how often characters are on screen together
   
   [View](https://jeffreylancaster.github.io/game-of-thrones/matrix/) | [<>](https://github.com/jeffreylancaster/game-of-thrones/blob/master/matrix/index.html)

### Travelling Characters

   A visualization of the various locations characters visit and how much of their time they spend there
   
   [View](https://jeffreylancaster.github.io/game-of-thrones/region-percent/) | [<>](https://github.com/jeffreylancaster/game-of-thrones/blob/master/region-percent/index.html)

## JavaScript

### js/process.js

Builds `keyValues.json` from `episodes.json` by adding y-values and additional location-specific information.

### js/map.js

Builds the visualization using d3.js.

## HTML

### process.html

Outputs the data for `keyValues.json`.

### map.html

Outputs the _Game of Thrones_ narrative chart.

## Data

### data/episodes.json
```javascript
{
  "episodes": [
    {
      "seasonNum": integer,
      "episodeNum": integer,
      "episodeTitle": "string", // from imdb
      "episodeLink": "string", // endpoint: www.imdb.com
      "episodeAirDate": "string", // from imdb
      "episodeDescription": "string", // from imdb
      "openingSequenceLocations": [
        "string",
        ...
      ],
      "scenes":[
        {
          "sceneStart": "string",
          "sceneEnd": "string",
          "location": "string",
          "subLocation": "string",
          "altLocation": "string",
          "flashback": true,
          "greensight": true,
          "warg": true,
          "characters": [
            {
              "name": "string",
              "title": "Hand | Khal | Khaleesi | King",
              "alive": false,
              "born": false,
              "weapon": [
                {
                  "action": "string",
                  "name": "string"
                }
              ],
              "sex": {
                "with": [
                  "string"
                ],
                "when": "string",
                "type": "string"
              },
              "married": {
                "to": "string",
                "when": "string",
                "type": "string",
                "consummated": true
              },
              "mannerOfDeath": "string",
              "killedBy": [
                "string"
              ]
            },
            ...
          ]
        },
        ...
      ]
    },
    ...
  ]
}
```

### data/characters.json
```javascript
{
  "characters":[
    {
      "characterName": "string",
      "characterLink": "string", // endpoint: www.imdb.com
      "characterImageThumb": "string",
      "characterImageFull": "string",
      "actorName": "string", // OR actors: []
      "actors": [
        {
          "actorName":"Richard Dormer",
          "actorLink":"/name/nm0233807/",
          "seasonsActive":[
            integer,
            ...
          ]
        },
        ...
     ],
      "actorLink": "string", // endpoint: www.imdb.com
      "houseName": [
        "string", // just string if single value
        ...
      ],
      "nickname": "string",
      "royal": true,
      "kingsguard": true,
      "parents": [
        "string",
        ...
      ],
      "parentOf": [
        "string",
        ...
      ],
      "guardianOf": [
        "string",
        ...
      ],
      "guardedBy": [
        "string",
        ...
      ],
      "siblings": [
        "string",
        ...
      ],
      "marriedEngaged": [
        "string",
        ...
      ],
      "allies":[
        "string",
        ...
      ],
      "abducted":[
        "string",
        ...
      ],
      "killed": [
        "string", 
        ...
      ],
      "killedBy": [
        "string",
        ...
      ],
      "serves": [
        "string",
        ...
      ]
      "servedBy": [
        "string",
        ...
      ]
    },
    ...
  ]
}

```

### data/characters-groups.json
```javascript
{
  "group": [
    {
      "name": "string",
      "characters": [
        "string",
        ...
      ]
    },
    ...
  ]
}

```

### data/characters-include.json
```javascript
{
  "include":[
    {
      "name": "string",
      "include": true
    },
    ...
  ]
}

```

### data/locations.json
```javascript
{
  "regions":[
    {
      "location": "string",
      "subLocation": [
        "string",
        ...
      ]
    },
    ...
  ]
}

```
