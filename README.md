[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React

React is a JavaScript library for making richly interactive front-end
applications. There are many front-end frameworks & libraries, but React is
perhaps the most prominent in front-end development today. Vue.js and
Angular are very popular as well.

## Prerequisites

- Familiarity with the DOM
- Experience with JavaScript
- [react-study](https://git.generalassemb.ly/ga-wdi-boston/react-study)
- [react-components-study](https://git.generalassemb.ly/ga-wdi-boston/react-components-study)

## Objectives

By the end of this, developers should be able to:

- Evaluate and write simple JSX
- Explain and build React components
- Explain props and state and how they are used in React
- Pass props to and from components
- Set up and update state using lifecycle methods

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Discussion: Front-end Frameworks & Libraries

Take a few minutes with your team to research and discuss the following
questions:

- What is a framework in programming?
- How is a framework different from a library?
- What are some frameworks and libraries that we've used in SEI?
- What are some popular front-end frameworks and libraries?
- What problems do they attempt to solve?

## Discussion: React Basics Review

The `react-study` and `react-components-study` discussed some of the basics of
React and how we can break down and plan a React application.

Let's refresh our memory by answering the following:

- What is React?
- What are components in React?
- What are elements in React?
- What is JSX?

## Running the Server

Alright, enough talk! Let's dive in to creating a React app.

Turns out, there's already one in this repo. To see it,
use `npm start` to start a server that will serve your new React application!

After running `$ npm start`, you can view the app at `http://localhost:7165`.

Most of the important files are in the `src` directory. Specifically, we'll
be using `src/App.js` and `src/index.js` in this lesson.

## Directory Structure

Almost all the work we'll do on a React app will be in the `src` directory. This
directory contains all our components (both their markup and JavaScript), all
our styles, and the layout and structure of application. Here, we have two very
important files: `index.js` and `App.js`.

We won't usually modify `index.js`.
The `index.js` file is the entry point to our application. The purpose of this file is to bundle up our
dependencies, and render our `App` component to the DOM. Typically, the `App` component is
the component at the very top of our application. Any other components (and indeed, anything
at all) that we add to our app will be nested inside this `App` component. In
React, all our code and all our markup live in components!

Let's take a look at what's in `App.js`. See this?

```jsx
const App = () => (
  <div>
    <h1>Welcome to React!</h1>
  </div>
)
```

That's a component! For components that just render static HTML, like this one,
we can define them as arrow functions that return JSX (basically, HTML with
JavaScript in it). If we wanted our component to do anything, like make an AJAX
request or respond to user interaction, we'd need a different syntax.

The other way to define components is with the ES6 `class` syntax. Let's see an
example of that now.

## Building Components

### Code Along: A Very Basic Component

Create a new file in `src` called `Movie.js`, and we will add a simple component
to it. Then, we can use that component in `App.js`.

### Annotate Along: A Very Basic Component Breakdown

#### `import React, { Component } from 'react'`

This imports `React` and the `Component` class from the 'react' library.

#### `class Movie`

This is the component we're creating. In this example, we are creating a
component and calling it "Movie."

#### `extends Component`

We inherit from the `Component` React library class to create our component
definitions. Here, we are creating a new `Component` subclass called `Movie`.

Note: Because it extends (*inherits from*) `Component`, our `Movie` class gets
to reuse code and capabilities from `React.Component`.

#### `render()`

Every component has a `render` method. The `render` method is what renders the
component to the screen, so it controls what is displayed for this component.
From this function, we return what we want to display.

- In our case, we are rendering a movie heading: `<h1>Movie!</h1>`.

> Note! That heading tag above looks like it's straight out of HTML, but it's
> actually a  language called JSX. For now, know that JSX will act like HTML
> when it's rendered to the screen.

#### `export default Movie`

This exposes the `Movie` class to other files. This means that other files can
`import` from the `App.js` file in order to use the `Movie` class.

```js
import Movie from './Movie.js'
```

Then, we can render our movie component, like this:

```jsx
const App = () => (
  <div>
    <h1>Welcome to React!</h1>
    <Movie />
  </div>
)
```

Every module (file) can have one default export. A default export can be imported with any name, we chose the name `Movie` since it is the name of the component we are importing.


#### Check it out

If you switch to your browser and navigate to `http://localhost:7165`, you can
see your movie heading. This app dynamically reloads each time you save, so you
can check your changes at any point.

### Code Along: Displaying Data with JSX

Let's slightly modify the contents of our `src/Movie.js` file so we can display
some data.

Instead of hard coding the `return` value, we can interpolate using
`{movie.title}` (a variable local to the component).

So, JSX allows us to write code that strongly resembles HTML and can use
variable interpolation. It is eventually compiled to lightweight JavaScript
objects.

Remember, our `Movie` component's `render` method:

- Currently returns JSX, not HTML.
- Creates a DOM element with whatever you put in the `return ()` statement.
- Tells your component what to render. In this case it's our movie's heading.

### Code Along: Display Multiple Movies

Our movie component isn't very dynamic. It can still only render a
pre-determined movie. Let's change that.

First, let's hard code an array of movie titles in `App.js`.

Then, we'll iterate through our array, and render one `Movie` component
for each title.

To pass the title into the `Movie` component, we'll need to use
something called "props". We'll learn more about them next.

> Note: By default the return statement in `render` can only return one
> React element!

## Component Data with Props

> **props** are inputs to a React component. They are data passed down from a parent component to a child component. - [React](https://reactjs.org/docs/glossary.html#props)

What are props? Props are simply arguments passed into a component, as though
they were arguments to a function. The component can then use this data to
render something or pass the data on to another component.

The React library was built to handle data that changes over time. Props allow
data to flow downward into components from a central source (generally, an API),
without needing any code inside the components that receive props to handle
changes in this data.

Components that just render data based on their props are known as "stateless" components. Stateless components are commonly created with "function" components, which prior to 2019 were stateless. They're very easy to reason about, because they take
data and produce markup, without any side effects or internal state. In React,
we should aim to make as many of our components stateless as possible.

### Code Along: Passing Multiple Props to a Component

Right now, `Movie` just expects one prop, and that's all we're giving it.
We often want components to display more complex information. To do so,
we can pass multiple props to our component! Let's expand on our movies array
to add directors and a cast list.

Find the expanded array in [`./src/data/movies.js`](./src/data/movies.js).
We can either copy that array into our `App.js` file, or import it since the
data is exported with `module.exports`.

Now that we have additional information, let's use it! We'll pass the
director and entire array of actors through to the `Movie` component by adding
additional props in `App`.

We'll also define a *unique* `key` *attribute*, which is required by React whenever you
are displaying an array of JSX elements. The `key` attribute is not a `prop`, so it will never be accessible
to us. The `key` attribute helps React to identify which items in a list have changed when updates to the list occur.

```js
<Movie
  key={movie.id}
  title={movie.title}
  cast={movie.cast}
  director={movie.director}
/>
```

> Note: We typically want to pass our props individually, instead of as an
> object. This helps keep our components consistent and specific. It also
> prevents us from referring to our props in a manner like
> `this.props.movie.title` where `this` already refers to an instance of a
> `Movie` component.

If you check your application afterwards, nothing has changed. Remember, a
component will just ignore any props it receives that it doesn't use. But, we
want to use the props!

We'll also have to change the `Movie` component definition so that it is using
the new props we passed to it in it's `render` method.

Remember, we have to *return a single element from the `render` method*, but
you can always wrap multiple elements in a `div` tag.

```jsx
<div>
  <h1>{this.props.title}</h1>
  <p>Directed by {this.props.director}</p>
  <p>Starring: {this.props.cast}</p>
</div>
```

If you check the page now, you'll see React prints the entire `cast` array, as
that's what was passed in. It's a start, but we can improve upon this.

Next, we will try to iterate through that `cast` array and display each actor
individually.

## Nested Components with Props

Since we're going to be rendering many actors and they will all share common
properties, it would be a great time to make another component!

### Using props in a function component

Our `Actor` component will be pretty simple; it will receive a couple of props
to render, but won't need any interactivity or logic. That means it's a great
use case for a function component!

Function components are defined with function syntax, usually with fat arrows.
We need to use make sure our functions use parentheses `()` instead of curly
braces `{}` so they can properly render our JSX.

We haven't seen an example yet of passing props into a function
component. To do this, we need to make sure we understand "destructuring", a
feature added to JS in ES6. Here's an example.

```js
const me = {
  name: 'Caleb',
  favoriteFood: 'Tacos'
}

// isolating object properties the old way
const name = me.name
const favoriteFood = me.favoriteFood

// isolating object properties with destructuring
const { name } = me
const { favoriteFood } = me

// you can also do multiple isolations in one line
const { name, favoriteFood } = me
```

These two methods of pulling properties out of an object produce the
same result. When writing function components in React, parameters are often
defined using destructuring.

So, instead of this:

```jsx
const Developer = (props) => ( // We use parentheses to render JSX
  <p>My name is {props.name}</p>
)
```

We typically do this:

```jsx
const Developer = ({ name }) => ( // We use parentheses to render JSX
  <p>My name is {name}</p>
)
```

Getting comfortable with this pattern will make it easier to read React
documentation and tutorials.

### Lab: Create an `Actor` component

Create an `Actor` component that will receive two props: `name`,
a string representing the actor's full name, and `role`, a string describing
the character that actor plays in the film. Your component should display this
information like this:

```text
Peter Sellers as President Merkin Muffley
George C. Scott as General Buck Turgidson
```

Find the updated data in [`./src/data/moviesCast.js`](./src/data/moviesCast.js).

Create an `Actor` component, and use it render each actor inside the
`Movie` component.

## State in React Components

> A component needs **state** when some data associated with it changes over time. - [React](https://reactjs.org/docs/glossary.html#state)

At this point, we know that we can pass data into a React component by providing
props. This allows data to flow "downwards", from parent component to child
component. Where does this data originate from, though? What if we need to
frequently update that data?

So far, that data has just been an array or object in the global scope of
`App.js`. This is not ideal for dynamic data -- if the data changes, every
component needs to know that, so that it can decide whether it needs to
re-render anything that's changed. To achieve this, React components keep track
of data in an object called "state".

## State vs. Props

`state` and `props` have a lot in common:

- Both are POJOs.
- Changes to a component's props or state cause the component's `render`
   method to be called.
- Neither should be modified directly. (e.g. no `this.props.foo = 'bar'`)
- Both are optional. A React component doesn't need props or state to render
   markup to the DOM (it wouldn't be very useful with neither, though).

They are also different in a few key ways:

- Props are passed into a component _from its parent_. State is determined
   _within_ a component.
- Props are initalized by adding attributes in JSX,
  e.g. `<MyComponent coolProp="radical!" />`. State is declared in a component's
  [`constructor`](https://reactjs.org/docs/react-component.html#constructor)
  method or as a local variable with `state = {...}`.
- Props can only be modified in the parent component. While, state can only be modified with a call to the special `this.setState` method.

### Annotate Along: A Simple Stateful Component

Let's take a look at a very simple example of a React component that keeps
track of its own state. You can follow along and add comments in
 `src/StateDemo.js`.

To render this component, instead of the contents of `App.js`, I'll just switch
out the `import` in `src/index.js`. Don't worry too much about this, it's just
a way to have multiple React apps in one repo for demonstration purposes.

I'll walk you through what's happening line by line, and show you the result
in the browser. Then, let's see if we can avoid having to use `.bind` on all
our component methods.

### Code Along: Adding State to the Movie Component

Now that we know how to update state in a component, let's modify our `Movie`
component to allow us to "like" a movie and keep track of our opinions.

To add this functionality, we'll need to do the following:

1. Give our `Movie` component a constructor, so that we can initialize a `state`
   object. The component should store just one property in its state: a boolean
   called `liked`.
1. Create a function that toggles that `liked` property on the state object.
1. Render a "like" button.
1. Give some visual indication when a `Movie` is liked.

There are a few things we'll need to keep in mind:

- `this.setState` is asynchronous, so any `this.setState` calls where the new
  state depends on the old state need to use [a slightly different syntax](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous).
- Event listeners in React are attached with the syntax
  `onChange={this.funcName}`. Note that this is different from the `onchange`
  attribute built into HTML.
- Similarly, classes are added to elements in React with the syntax
  `className="foo"`, **NOT** the familiar `class="foo"`.

### Lab: Toggle Actors Display

For some practice with state, add another method to our `Movie` component that
toggles a `showActors` boolean on the state object. Only display information
about actors when the `showActors` boolean is true.

**HINT:** You can use ternaries or `if` statements in JSX to display different
markup depending on whether a variable or expression is truthy.

## Additional Resources

### React Basics

- [React Crash Course Video](https://www.youtube.com/watch?v=sBws8MSXN7A)
- [ReactJS Koans](https://github.com/arkency/reactjs_koans)
- [React Developer Roadmap](https://github.com/adam-golab/react-developer-roadmap)
- [Thinking in React - Steps 1 and 2](https://reactjs.org/docs/thinking-in-react.html)

### JSX and the Virtual DOM

- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Intro to JSX | Codecademy](https://www.codecademy.com/courses/react-101/lessons/react-jsx-intro/exercises/why-react)
- [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [React Internals: Virtual DOM](https://reactjs.org/docs/faq-internals.html)

### Components, Props, and State

- [React Components | Codecademy](https://www.codecademy.com/courses/react-101/lessons/your-first-react-component)
- [Intro to Components](https://generalassembly.wistia.com/medias/h64z7lp1ir)
- [Returning multiple elements from a single Component using React.Fragment](https://reactjs.org/docs/fragments.html)
- [React Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Component Props | Codecademy](https://www.codecademy.com/courses/react-101/lessons/this-props)
- [React Docs - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [CSS Tricks - React State From the Ground Up](https://css-tricks.com/react-state-from-the-ground-up/)
- [Component State | Codecademy](https://www.codecademy.com/courses/react-101/lessons/this-state)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
