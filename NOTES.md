
# Notes

## Inversion of Control

When discussing the difference between framework's and libraries. You could discuss the idea of inversion of control and show this diagram.

![inversion](https://media.git.generalassemb.ly/user/16320/files/ca954e80-b499-11ea-8862-fad2bbf2cb24)


## Solution code for code-alongs and labs below:

### Intro...

#### Code Along: A Very Basic Component
#### Annotate Along: A Very Basic Component Breakdown

```jsx
// bring in React and Component from React
import React, { Component } from 'react';

// define our Movie component
class Movie extends Component {
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <h1>
        /*add the name of your favorite movie here!*/
        My Favorite Movie
      </h1>
    )
  }
}

export default Movie
```

#### Code Along: Displaying Data with JSX

`src/Movie.js`:

```jsx
import React, { Component } from 'react'

// Define some local data our component can use
const movie = {
  title: 'My Favorite Movie'
}

class Movie extends Component {
  render () {
    return (
      <div>
        <h2>Movie Information:</h2>
        // Display data in JSX by surrounding the variable in curly brackets
        <h4>Title: {movie.title}</h4>
      </div>
    )
  }
}

export default Movie
```

#### Code along: Display Multiple Movies

`src/Movie.js`:

```jsx
import React, { Component } from 'react'

class Movie extends Component {
  render () {
    return (
      <div>
        <h2>Movie Information:</h2>
        // We are accepting a "prop" called `title` to display
        <h4>Title: {this.props.title}</h4>
      </div>
    )
  }
}

export default Movie
```

`src/App.js`:

```jsx
import React, { Fragment } from 'react'

import Movie from './Movie'

const movies = [
  { title: 'Eraserhead', id: 1 },
  { title: 'Dr. Strangelove', id: 2 },
  { title: 'Fantastic Mr. Fox', id: 3 }
]

const App = () => (
  <Fragment>
    <h1>Welcome to the movie app!</h1>
    {movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
      />
    ))}
  </Fragment>
)

export default App
```

---

### Props Begins

#### Code-along: Passing multiple props to a component

`src/App.js`:

```jsx
const App = () => (
  <div>
    <h1>Welcome to React!</h1>
    {movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
        cast={movie.cast}
        director={movie.director}
      />
    ))}
  </div>
)
```

`src/Movie.js`:

```jsx
import React, { Component } from 'react'

class Movie extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Directed by {this.props.director}</p>
        <p>Starring: {this.props.cast}</p>
      </div>
    )
  }
}

export default Movie
```

#### Lab: Create an `Actor` component

`src/Actor.js`:

```js
import React from 'react'

const Actor = ({ name, role }) => (
  <p>{name} as {role}</p>
)

export default Actor
```

Movie.js:

```jsx
import React, { Component } from 'react'
import Actor from 'Actor.js'

class Movie extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Directed by {this.props.director}</p>
        <p>Starring: {this.props.cast.map(member => (
          <Actor
            name=member.name
            role=member.role
          />
        ))}</p>
      </div>
    )
  }
}

export default Movie
```

---

### State Begins

#### Annotate Along: A Simple Stateful Component

Annotated solution files are on the `solution` branch.

#### Code Along: Adding State to the Movie Component

```js
import React, { Component } from 'react'
import Actor from './Actor'

class Movie extends Component {
  constructor () {
    super()

    this.state = {
      liked: false
    }
  }

  toggleLike = () => this.setState(prevState => {
    console.log('liked is currently', prevState.liked)
    return { liked: !prevState.liked }
  })

  render () {
    return (
      <div>
        <h4 className={this.state.liked ? 'liked' : ''}>Title: {this.props.title}</h4>
        <p>Director: {this.props.director}</p>
        <p>Starring: {this.props.cast.map(member => (
          <Actor
            name=member.name
            role=member.role
          />
        ))}</p>
        <button onClick={this.toggleLike}>
          {this.state.liked ? 'Unlike' : 'Like'}
        </button>
      </div>
    )
  }
}

export default Movie
```

#### Lab: Toggle Actors Display

Solution code for the lab can be found in the `solution` branch.
