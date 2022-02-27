import React, { Component } from 'react';
// import { TweetBody } from './components/tweet.js'
import { TweetBody } from './tweet';

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      joke: "",
      isLoaded: false,
      quote: "",
      isQuote: false,
      author: ""
    }
  }

  componentWillMount() {
    console.log("TEST")
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
        .then(response => response.json())
        .then(data => {
          this.setState({
            joke: data.joke,
            isLoaded: true
          })
          console.log(data.joke)
          console.log("asdasd", this.state)
        });
  }

  render() {
    return (
      <div className="main-body">
        {console.log("AAAAAAA", this.state)}
        <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Hello Visitor. Before I show you one-way tweets meant for only my mind and me, here's a dad joke to cheer up.</p>
            <p><i>{ this.state.isQuote && this.state.quote}</i></p>
            <p>I know I could have used little pick-me-ups like these during the week. Refresh the page to get a new one! :)</p>
            </>
          }          
          image="https://mlndshh.github.io/images/avatar.jpg"/>
        <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Friday, Midnight</p>
            Going for a Dua Lipa concert out of nowhere! Time to binge her album on Spotify.
            <iframe style={{display:"block"}} src="https://open.spotify.com/embed/album/0JeyP8r2hBxYIoxXv11XiX?utm_source=generator" width="350" height="315" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </>
          }          
          image="https://mlndshh.github.io/images/avatar.jpg"/>
        <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Friday, Afternoon</p>
            Grabbing lunch before my long bus ride to Boston!
            <img className='tweet-body-image' src="images/wrap.jpeg" />
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
        <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Friday, Afternoon</p>
            Okay time to study a bit, to Echo360 we go!
            <img className='tweet-body-image' src="images/echo360.png" />
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Friday, Evening</p>
            Alright alright brain, I get it, here you go you can watch ONE YouTube Short, but that's it!
            <iframe style={{display:"block"}}  width="350" height="315" src="https://www.youtube.com/embed/r4cCLHlsXao" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Friday, Evening</p>
            Okay now, how exactly do I get to the hotel?
            <img className='tweet-body-image' src="images/maps.jpeg" />
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Friday, Night</p>
            AAAAAAAAA THIS IS AMAZING
            <img className='tweet-body-image' src="images/duaLipa.jpeg" />
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Saturday, Morning</p>
            <p>Really need to work right now. Time to play the only thing I ever listen to while studying!</p>
            <iframe style={{display:"block"}}  width="350" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Saturday, Evening</p>
            <p>Glad to be living the cable TV life again! Using one of these after forever.</p>
            <img className='tweet-body-image' src="images/remote.jpeg" />
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Sunday, Morning</p>
            <p>Time to do Wordle! The words have been SO unpredictable since NYT bought it.</p>
            <img className='tweet-body-image' src="images/wordle.png" />
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Sunday, Evening</p>
            <p>Okay I'm not sure what's being spoken about here, let me just browse through Reddit.</p>
            <img className='tweet-body-image' src="images/reddit.png" />
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Monday, Morning</p>
            UGHH Time to study again.
            <iframe style={{display:"block"}}  width="400" height="315" src="https://www.youtube.com/embed/P6RZZMu_maU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Monday, Afternoon</p>
            Okay I'm done, I NEED a break. NVM time to cook, I'll watch this alongside.
            <iframe style={{display:"block"}}  width="400" height="315" src="https://www.youtube.com/embed/rXHSbIS2lLs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Tuesday, Morning</p>
              <p>WHat do I even DO THE DEADLINE'S IN AN HOUR</p>
              <img className='tweet-body-image' src="images/debug.png" />
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Tuesday, Evening</p>
              <p>Awwww 🥺</p>
              <img className='tweet-body-image' src="images/wholesome.jpeg" />
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Wednesday, Evening</p>
              <p>Another minute of studying algorithms and my head will explode. Time for PnR!</p>
              <img className='tweet-body-image' src="images/ron.webp" />
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Thursday, Afternoon</p>
              <p>Interview Time!</p>
              <img className='tweet-body-image' src="images/meet.png" />
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Thursday, Evening</p>
              <p>Okay that went well I think! Let me go for a quick walk.</p>
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
          <TweetBody 
          name="Milind Shah"
          handle="@mlndshh"
          tweet={
            <>
            <p>Thursday, Night</p>
              <p>Time to not look at my phone for a while. See you tomorrow phone!</p>
            </>
          }
          image="https://mlndshh.github.io/images/avatar.jpg"/>
      </div>
    );
  }
}

export default Feed
