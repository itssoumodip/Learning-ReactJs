import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp () {
    return (
        <div>
            <h1>custom app!!Hi</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a', 
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }


const anotherElement = (
    <a href="https://google.com" target='_blank'>Vist Google</a>
)

const anotherUser = "Soumodip"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google',
    anotherElement
)
createRoot(document.getElementById('root')).render(

    //<App/>
//    MyApp()
    // <MyApp/>
    reactElement
    // anotherElement

)
