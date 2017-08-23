# Game of Thrones Datasets and Narrative Chart Visualization

I've written a bit about this project on [Medium](https://medium.com/@jeffrey.lancaster/the-ultimate-game-of-thrones-dataset-a100c0cf35fb) and the visualization is here: https://jeffreylancaster.github.io/game-of-thrones/.

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
              "weapon": [ // just object if single value
                {
                  "action": "string",
                  "name": "string"
                }
              ],
              "sex": [
                "with": [ // just string if single value
                  "string"
                ],
                "when": "string",
                "type": "string"
              ],
              "married": {
                "to": "string",
                "when": "string",
                "type": "string",
                "consummated": true
              },
              "mannerOfDeath": "string",
              "killedBy": [ // just string if single value
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
      "parentOf": [ // just string if single value
        "string",
        ...
      ],
      "guardianOf": [ // just string if single value
        "string",
        ...
      ],
      "guardedBy": [
        "string", // just string if single value
        ...
      ],
      "siblings": [ // just string if single value
        "string",
        ...
      ],
      "marriedEngaged": [ // just string if single value
        "string",
        ...
      ],
      "allies":[
        "string", // just string if single value
        ...
      ],
      "abducted":[
        "string", // just string if single value
        ...
      ],
      "killed": [ // just string if single value
        "string", 
        ...
      ],
      "killedBy": [ // just string if single value
        "string",
        ...
      ],
      "serves": [ // just string if single value
        "string",
        ...
      ]
      "servedBy": [ // just string if single value
        "string",
        ...
      ]
    },
    ...
  ]
}

```

### data/characters-houses.json
```javascript
{
  "house": [
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
