import * as React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

SyntaxHighlighter.registerLanguage('javascript', js)

const Installation = () => {
   const stepOne = 'npm install react-ts-loader'
   const stepTwo = "import Loader from 'react-ts-loaders'"
   const stepThree = '<Loader />'

   const code = `import * as React from 'react'
import Loader from 'react-ts-loaders'

const MyComponent = () => {
   return (
      <Loader />
   )
}

export default MyComponent`

   const fullCode = `import * as React from 'react'
import Loader from 'react-ts-loaders'

const MyComponent = () => {
   return (
      <Loader
         type="ripple"
         color="#ec18dd"
         altColor="#7b1a83"
         size={300}
         className="alt-loader"
      />
   )
}

export default MyComponent`

   return (
      <div className="installation">
         <h2>Getting Started</h2>
         <p>Install the package via npm:</p>
         <SyntaxHighlighter
            showLineNumbers={true}
            wrapLines={true}
            language="javascript"
            style={a11yDark}
         >
            {stepOne}
         </SyntaxHighlighter>

         <p>
            Import into your project. There is no need to import the CSS -- it
            is included via Styled Components
         </p>
         <SyntaxHighlighter
            showLineNumbers={true}
            wrapLines={true}
            language="javascript"
            style={a11yDark}
         >
            {stepTwo}
         </SyntaxHighlighter>

         <p>
            Drop the Loader component into your application wherever you need
            it. This will use the default Loader, a Spinner, and the foreground
            colour for the element where you placed it.
         </p>
         <SyntaxHighlighter
            showLineNumbers={true}
            wrapLines={true}
            language="jsx"
            style={a11yDark}
         >
            {stepThree}
         </SyntaxHighlighter>

         <p>The whole thing looks something like this: </p>
         <SyntaxHighlighter
            showLineNumbers={true}
            wrapLines={true}
            language="javascript"
            style={a11yDark}
         >
            {code}
         </SyntaxHighlighter>

         <p>
            You can configure every aspect of the Loader via the following
            props. See the README or the{' '}
            <a
               target="_blank"
               href="https://github.com/royanger/react-ts-loaders"
            >
               GitHub page
            </a>{' '}
            for more details.
         </p>
         <SyntaxHighlighter
            showLineNumbers={true}
            wrapLines={true}
            language="javascript"
            style={a11yDark}
         >
            {fullCode}
         </SyntaxHighlighter>
      </div>
   )
}

export default Installation
