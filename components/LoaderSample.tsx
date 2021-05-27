import * as React from 'react'
import Loader from 'react-ts-loaders'
import { BlockPicker, SketchPicker, ChromePicker } from 'react-color'

interface LoaderSampleProps {
   title: string
   type: string
}

const LoaderSample = ({ title, type }: LoaderSampleProps) => {
   const [showAltColor, setShowAltColor] = React.useState(false)
   const [colorOne, setColorOne] = React.useState({
      color: '#4682b4',
      displayPicker: false,
   })

   const [colorTwo, setColorTwo] = React.useState({
      color: '#4682b4',
      displayOption: false,
      displayPicker: false,
   })

   const handleColorOneChange = (color: any) => {
      console.log('some change happened')
      setColorOne({ ...colorOne, color: color.hex })
   }
   const handleColorTwoChange = (color: any) => {
      console.log('some change happened')
      setColorTwo({ ...colorTwo, color: color.hex })
   }

   const handleClick = (target: string) => {
      switch (target) {
         case 'colorOne':
            setColorOne({ ...colorOne, displayPicker: !colorOne.displayPicker })
            break
         case 'colorTwo':
            setColorTwo({ ...colorTwo, displayPicker: !colorTwo.displayPicker })
         default:
            break
      }
   }

   const handleClose = (target: string) => {}

   return (
      <div>
         <h2>{title}</h2>
         <Loader type={type} color={colorOne.color} altColor={colorTwo.color} />

         <button
            id="colorOneButton"
            className="pickerButton"
            onClick={() => handleClick('colorOne')}
            style={{ backgroundColor: colorOne.color }}
         >
            <div className="pickerButtonSwatch"></div>
         </button>
         {colorOne.displayPicker ? (
            <div className="popover">
               <div className="cover" onClick={handleClose} />

               <ChromePicker
                  color={colorOne.color}
                  onChange={handleColorOneChange}
               />
            </div>
         ) : null}

         <button
            id="colorTwoButton"
            className="pickerButton"
            onClick={() => handleClick('colorTwo')}
            style={{ backgroundColor: colorTwo.color }}
         >
            <div className="pickerButtonSwatch"></div>
         </button>
         {colorTwo.displayPicker ? (
            <div className="popover">
               <div className="cover" onClick={handleClose} />

               <ChromePicker
                  color={colorTwo.color}
                  onChange={handleColorTwoChange}
               />
            </div>
         ) : null}

         {/* <ChromePicker color={colorTwo.color} onChange={handleColorTwoChange} /> */}
      </div>
   )
}

export default LoaderSample
