# _Game of Thrones_ Datasets and Visualizations

1. [About this Project](#about-this-project)
2. [Visualizations](#visualizations)
    1. [Interfaces](#interfaces)
    1. [Narrative Charts](#narrative-charts)
    2. [Screen Time](#screen-time)
    3. [Cumulative Time](#cumulative-time)
    4. [Wordcount & Language](#wordcount--language)
    5. [Co-Occurrence](#co-occurrence)
    6. [Relationships](#relationships)
    7. [Actor Relationships](#actor-relationships)
    8. [Lands of Ice and Fire Geography](#lands-of-ice-and-fire-geography)
    9. [Prediction](#prediction)
    10. [Other People's](#other-peoples)
3. [Data](#data)

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

## Interfaces

#### Episode Viewer: `episode/`

- A compilation of episode-specific data visualizations, including aggregate character time on screen, wordcount, languages, locations, and more.<br>[View the visualizations](https://jeffreylancaster.github.io/game-of-thrones/episode/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/episode/index.html)

#### Script Search: `search/mongodb/`

- A simple search interface to explore the words spoken on _Game of Thrones_, including who says each line and text and translations in Dothraki, Valyrian, etc.<br>[Search the database](https://game-of-thrones-script.herokuapp.com) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/search/mongodb/)

## Visualizations

### Narrative Charts

#### Narrative Chart: `map/`

- A visualization of when each character is on-screen throughout the show, where they are, with whom they are, when they die, and more.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/map/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/map/index.html):
  - `process.html`: Builds `keyValues.json` from `episodes.json` by adding y-values and additional location-specific information and outputs the data for `keyValues.json`.
  - `index.html`: Builds the visualization using d3.js and outputs the _Game of Thrones_ narrative chart.

![Game of Thrones Narrative Chart](/map/game-of-thrones-map.png)

---

#### Heatmap / Flattened Narrative Chart: `heatmap/`

- A visualization of how many characters are in locations throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/heatmap/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/heatmap/index.html):
  - includes a `calcData` parameter that pre-processes the data for `data/heatmap.json`.

![Game of Thrones Heatmap](/heatmap/game-of-thrones-heatmap.png)

---

### Screen Time

#### Characters On Screen: `scenes-character/`

- A visualization of when each character is on screen throughout the entire show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/scenes-character/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/scenes-character/index.html)

![Game of Thrones Characters On Screen](/scenes-character/game-of-thrones-scenes-character.png)

---

#### Locations On Screen: `scenes-location/`

- A visualization of when each location is shown on screen throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/scenes-location/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/scenes-location/index.html)

![Game of Thrones Locations On Screen](/scenes-location/game-of-thrones-scenes-location.png)

---

#### More-Specific Locations On Screen: `scenes-sublocation/`

- A visualization of when each more-specific location is shown on screen throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/scenes-sublocation/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/scenes-sublocation/index.html)

![Game of Thrones Sublocations On Screen](/scenes-sublocation/game-of-thrones-scenes-sublocation.png)

---

#### Special Scenes On Screen: `scenes-special/`

- A visualization of when special scenes (death, sex, flashback, warging, greensight, etc.) are shown on screen throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/scenes-special/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/scenes-special/index.html)

![Game of Thrones Special Scenes On Screen](/scenes-special/game-of-thrones-scenes-special.png)

---

#### Deaths On Screen: `bubble-death/`

- A visualization of when deaths happen throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/bubble-death/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/bubble-death/index.html)

![Game of Thrones Deaths On Screen](/bubble-death/game-of-thrones-bubble-death.png)

---

#### Weapons On Screen: `scenes-weapons/`

- A visualization of when weapons show up on screen throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/scenes-weapons/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/scenes-weapons/index.html)

![Game of Thrones Weapons On Screen](/scenes-weapons/game-of-thrones-scenes-weapons.png)

---

#### Houses On Screen: `scenes-house/`

- A visualization of when various Houses are represented throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/scenes-house/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/scenes-house/index.html)

![Game of Thrones Houses On Screen](/scenes-house/game-of-thrones-scenes-house.png)

---

#### Number of Characters Per Scene: `characters-per-scene/`

- A visualization of how many characters are on-screen at one time.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/characters-per-scene/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/characters-per-scene/index.html)

![Game of Thrones Number of Characters Per Scene](/characters-per-scene/game-of-thrones-characters-per-scene.png)

---

#### Continuous Screen Time: `bubble-character/`

- A visualization where each bubble represents a character and the size of the bubble is continuous time on screen.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/bubble-character/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/bubble-character/index.html)

![Game of Thrones Continuous Screen Time](/bubble-character/game-of-thrones-bubble-character.png)

---

### Cumulative Time

#### Supercut Duration: `duration-character/`

- A visualization of how long each character has been on-screen throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/duration-character/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/duration-character/index.html)

![Game of Thrones Supercut Duration](/duration-character/game-of-thrones-duration-character.png)

---

#### Screen Time Per Season: `duration-per-season/`

- A visualization of how long each character has been on-screen in each season of the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/duration-per-season/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/duration-per-season/index.html)

![Game of Thrones Screen Time Per Season](/duration-per-season/game-of-thrones-duration-per-season.png)

---

#### Character On Screen Time Per Episode: `episode-character/`

- A visualization of how long each character has been on-screen in each episode throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/episode-character/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/episode-character/index.html)

![Game of Thrones Character On Screen Time Per Episode](/episode-character/game-of-thrones-episode-character-tyrion-lannister.png)

---

#### Screen Time Per Location: `duration-per-location/`

- A visualization of how long has been spent in each location throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/duration-per-location/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/duration-per-location/index.html)

![Game of Thrones Screen Time Per Location](/duration-per-location/game-of-thrones-duration-per-location.png)

---

#### Screen Time Per More-Specific Location: `duration-per-sublocation/`

- A visualization of how long has been spent in each more-specific location throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/duration-per-sublocation/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/duration-per-sublocation/index.html)

![Game of Thrones Screen Time Per More-Specific Location](/duration-per-sublocation/game-of-thrones-duration-per-sublocation.png)

---

#### Character Time Percentage Per Season: `duration-percent/`

- A visualization of how much of a character's time on screen is spent in each season.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/duration-percent/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/duration-percent/index.html)

![Game of Thrones Character Time Percentage Per Season](/duration-percent/game-of-thrones-duration-percent.png)

---

#### Overall Character Time (Treemap): `duration-treemap/`

- A visualization of how long each character has been on screen throughout the show in proportion to all other characters.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/duration-treemap/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/duration-treemap/index.html)

![Game of Thrones Overall Character Time (Treemap)](/duration-treemap/game-of-thrones-duration-treemap.png)

----

#### Screen Time Per House: `duration-house/`

- A visualization of how long each House has been on screen throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/duration-house/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/duration-house/index.html)

![Game of Thrones Screen Time Per House](/duration-house/game-of-thrones-duration-house.png)

---

#### Travelling Characters: `region-percent/`

- A visualization of the various locations characters visit and how much of their time they spend there.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/region-percent/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/region-percent/index.html)

![Game of Thrones Travelling Characters](/region-percent/game-of-thrones-region-percent.png)

---

#### Screen Time in Locations Per Episode: `location-per-episode/`

- A visualization of how long is spent in each location during each episode.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/location-per-episode/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/location-per-episode/index.html)

![Game of Thrones Screen Time in Locations Per Episode](/location-per-episode/game-of-thrones-location-per-episode.png)

---

#### Screen Time Per Gender By Season: `duration-gender-season/`

- A visualization of how much time women and men are on screen during each season.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/duration-gender-season/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/duration-gender-season/index.html)

![Game of Thrones Screen Time Per Gender By Season](/duration-gender-season/game-of-thrones-duration-gender-season.png)

---

#### Screen Time Per Gender By Episode: `duration-gender-episode/`

- A visualization of how much time women and men are on screen during each episode.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/duration-gender-episode/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/duration-gender-episode/index.html)

![Game of Thrones Screen Time Per Gender By Episode](/duration-gender-episode/game-of-thrones-duration-gender-episode.png)

---

#### Screen Time Per Gender By Episode (Percent): `duration-gender-percent/`

- A visualization of how much time women and men are on screen during each episode as percentages of the episode length.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/duration-gender-percent/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/duration-gender-percent/index.html)

![Game of Thrones Screen Time Per Gender By Episode (Percent)](/duration-gender-percent/game-of-thrones-duration-gender-percent.png)

---

### Wordcount & Language

#### Character Wordcount: `wordcount-character/`

- A visualization of how many words each character says throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/wordcount-character/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/wordcount-character/index.html)

![Game of Thrones Character Wordcount](/wordcount-character/game-of-thrones-wordcount-character.png)

---

#### Character Wordcount By Season: `wordcount-per-season/`

- A visualization of how many words each character says during each season.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/wordcount-per-season/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/wordcount-per-season/index.html)

![Game of Thrones Character Wordcount By Season](/wordcount-per-season/game-of-thrones-wordcount-per-season.png)

---

#### Wordcount Per House: `wordcount-house/`

- A visualization of how many words members of each House say throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/wordcount-house/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/wordcount-house/index.html)

![Game of Thrones Wordcount Per House](/wordcount-house/game-of-thrones-wordcount-house.png)

---

#### Wordcount Per Gender By Season: `wordcount-gender-season/`

- A visualization of how many words women and men say during each season.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/wordcount-gender-season/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/wordcount-gender-season/index.html)

![Game of Thrones Wordcount Per Gender By Season](/wordcount-gender-season/game-of-thrones-wordcount-gender-season.png)

---

#### Wordcount Per Gender By Episode: `wordcount-gender-episode/`

- A visualization of how many words women and men say during each episode.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/wordcount-gender-episode/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/wordcount-gender-episode/index.html)

![Game of Thrones Wordcount Per Gender By Episode](/wordcount-gender-episode/game-of-thrones-wordcount-gender-episode.png)

---

#### Wordcount Per Gender By Episode (Percent): `wordcount-gender-percent/`

- A visualization of how many words women and men say during each episode as a percentage of the total words spoken per episode.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/wordcount-gender-percent/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/wordcount-gender-percent/index.html)

![Game of Thrones Wordcount Per Gender By Episode (Percent)](/wordcount-gender-percent/game-of-thrones-wordcount-gender-percent.png)

---

#### Languages Spoken Per Character: `language-character/`

- A visualization of the languages spoken by characters throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/language-character/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/language-character/index.html)

![Game of Thrones Languages Spoken Per Character](/language-character/game-of-thrones-language-character.png)

---

#### Languages Spoken Per Episode: `language-episode`

- A visualization of the languages spoken by characters throughout each episode.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/language-episode/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/language-episode/index.html)

![Game of Thrones Languages Spoken Per Episode](/language-episode/game-of-thrones-language-episode.png)

---

### Co-Occurrence

#### Character Co-Occurrence Matrix: `matrix/`

- A matrix visualization of how often characters are on screen together.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/matrix/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/matrix/index.html)

![Game of Thrones Co-Occurrence Matrix](/matrix/game-of-thrones-matrix.png)

---

#### Force-Directed On-Screen Co-Occurrence: `force-directed/`

- A force-directed visualization of characters on-screen together throughout the show.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/force-directed/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/force-directed/index.html)

![Game of Thrones Force-Directed On-Screen Co-Occurrence](/force-directed/game-of-thrones-force-directed.png)

---
   
#### Chord Diagram of On-Screen Co-Occurrence: `matrix-chord/`

- A chord diagram visualization where chord width represents time spent on-screen together by the conected characters.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/matrix-chord/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/matrix-chord/index.html)

![Game of Thrones Chord Diagram of On-Screen Co-Occurrence](/matrix-chord/game-of-thrones-matrix-chord.png)

---

### Relationships

#### Force-Directed Relationships: `relations-force/`

- A force-directed visualization of various relationships between characters (e.g. parents, spouses, who killed whom).<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/relations-force/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/relations-force/index.html)

![Game of Thrones Force-Directed Relationships](/relations-force/game-of-thrones-relations-force.png)

---

#### Circle-based Relationships: `relations-circle/`

- A circle-based visualization of various relationships between characters (e.g. parents, spouses, who killed whom).<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/relations-circle/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/relations-circle/index.html)

![Game of Thrones Circle-based Relationships](/relations-circle/game-of-thrones-relations-circle.png)

---

#### Force-Directed Sexual Relationships: `relations-force-sex/`

- A force-directed visualization of sexual relationships between characters.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/relations-force-sex/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/relations-force-sex/index.html)

![Game of Thrones Force-Directed Sexual Relationships](/relations-force-sex/game-of-thrones-relations-force-sex.png)

---

### Actor Relationships

#### Costars List: `costars-list/`

- A list of other films in which _Game of Thrones_ costars, well, costar.<br>[View the list](https://jeffreylancaster.github.io/game-of-thrones/costars-list/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/costars-list/index.html)

![Game of Thrones Costars List](/costars-list/game-of-thrones-costars-list.png)

---
   
#### Costars Matrix: `costars-matrix/`

- A matrix visualization of frequency of other films in which _Game of Thrones_ costars, well, costar.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/costars-matrix/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/costars-matrix/index.html)

![Game of Thrones Costars Matrix](/costars-matrix/game-of-thrones-costars-matrix.png)

---

### Lands of Ice and Fire Geography

#### Force-Directed Network of Opening Sequence Locations: `opening-locations-force/`

- A force-directed network visualization of the _Game of Thrones_ opening sequence locations.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/opening-locations-force/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/opening-locations-force/index.html)

![Game of Thrones Force-Directed Network of Opening Sequence Locations](/opening-locations-force/game-of-thrones-opening-locations-force.png)

---

#### Geographic Network of Opening Sequence Locations: `opening-locations-fixed/`

- A geographic network visualization of the _Game of Thrones_ opening sequence locations.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/opening-locations-fixed/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/opening-locations-fixed/index.html)

![Game of Thrones Geographic Network of Opening Sequence Locations](/opening-locations-fixed/game-of-thrones-opening-locations-fixed.png)

---

#### Locations on a Globe: `geography-locations/`

- Various _Game of Thrones_ locations displayed on a globe.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/geography-locations/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/geography-locations/index.html)

![Game of Thrones Locations on a Globe](/geography-locations/game-of-thrones-geography-locations.png)

---

#### Opening Sequence Locations: `opening-seq-arcs/`

- A geographic visualization of the _Game of Thrones_ opening sequence locations on a globe.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/opening-seq-arcs/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/opening-seq-arcs/index.html)

![Game of Thrones Opening Sequence Locations](/opening-seq-arcs/game-of-thrones-opening-seq-arcs.png)

---

#### Opening Sequence Locations (with Underlying Matrix): `opening-seq-matrix/`

- A geographic visualization of the _Game of Thrones_ opening sequence locations on a globe with an underlying matrix showing the frequency of opening sequence paths between locations.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/opening-seq-matrix/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/opening-seq-matrix/index.html)

![Game of Thrones Opening Sequence Locations (with Underlying Matrix)](/opening-seq-matrix/game-of-thrones-opening-seq-matrix.png)

---

#### Character Travel Paths: `character-arcs/`

- A geographic visualization of the paths characters have travelled in the Lands of Ice and Fire.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/character-arcs/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/character-arcs/index.html)

![Game of Thrones Character Travel Paths](/character-arcs/game-of-thrones-character-arcs.png)

---

### Prediction

#### Simple Cluster Analysis (for Prediction?): `episode-character-scatter/`

- A simple cluster analysis plotting the slope and y-intercept of the linear regression of time spent on-screen in each episode. We'll see whether it's predictive at all.<br>[View the visualization](https://jeffreylancaster.github.io/game-of-thrones/episode-character-scatter/) || [Explore the code](https://github.com/jeffreylancaster/game-of-thrones/blob/master/episode-character-scatter/index.html)

![Game of Thrones Simple Cluster Analysis (for Prediction?)](/episode-character-scatter/game-of-thrones-episode-character-scatter.png)

---

### Other People's

- [Timelapse animation](https://www.youtube.com/watch?v=6dUjMo5LOgc) from [Type A Media](https://typeamedia.net/)
- [Viz of Thrones](http://www.vizofthrones.com/): a single interface by [Adam Groner](https://medium.com/@adamgroner), including a geographic map with characters in locations, sex count, death count, scenes in which characters show up, and more
- [GraphXR demo](https://www.youtube.com/watch?v=ZXxBDPPWwYc) from [Kineviz](https://www.kineviz.com/)
- [Character travels through various regions](https://news.northeastern.edu/2019/04/10/the-many-travels-of-jon-snow-tyrion-lannister-and-the-rest-of-hbos-game-of-thrones-characters/) by Lia Petronio
- [Character Social Network](https://news.northeastern.edu/2019/04/11/the-game-of-thrones-social-network/) by Lia Petronio


## Data

#### `data/episodes.json`
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

#### `data/characters.json`
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

#### `data/characters-groups.json`
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

#### `data/characters-include.json`
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

#### `data/locations.json`
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
