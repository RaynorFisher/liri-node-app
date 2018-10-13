js
require("dotenv").config();
/* Pseudo-code

Essentially this little app is a command line application for pulling info from spotify, omdb and twitter. 

We need to get and establish our API keys from our desired locations like spotify, omdb and twitter if needed and make them usable in the app 
with variables.

With omdb we have to tune the API request so that it spits out certain information about a movie that we want. 
             * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.   
       * 
    Like this info. And to do that we would have to tailor our request to the API. 

 The same goes for the spotify API request portion of this little LIRI app, in this case we are in search of the following info
 :
    * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from.
     * 

Again this requires a bit of tailoring to our API request and formatting to our data so that it spits out in our terminal 
in this orderly fashion. \

For the bonus, Twitter can also be accessed with an API with a similar request system. 