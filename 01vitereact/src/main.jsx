import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <>
    <h1>Custom APP</h1>
    </>
  )
}

const Element = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}

const anotherElement = (
	<a href='https://google.com' target='_blank'>Visit google</a>
)

const anotherUser = ' chai aur code';

const reactElement = React.createElement(
	'a',
	{
		href : 'https://google.com',
		target: '_blank'
	},
	'click me to visit google',
	anotherElement

)

ReactDOM.createRoot(document.getElementById('root')).render(
	reactElement
)
