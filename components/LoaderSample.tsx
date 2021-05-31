import * as React from 'react'
import Loader from 'react-ts-loaders'
import Modal from './Modal'
import { ChromePicker } from 'react-color'

// TODO figure out what to use instead of any
interface LoaderSampleProps {
   title: string
   type: string
   index: number
   handleUpdateModalPosition: any
}

interface handleClickProps {
   (target: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

const LoaderSample = ({
   title,
   type,
   index,
   handleUpdateModalPosition,
}: LoaderSampleProps) => {
   const [showAltColor, setShowAltColor] = React.useState(false)
   const [size, setSize] = React.useState(150)
   const [modalTop, setModalTop] = React.useState()
   const [modalLeft, setModalLeft] = React.useState()
   const [colorOne, setColorOne] = React.useState({
      color: '#4682b4',
      displayPicker: false,
   })

   const [colorTwo, setColorTwo] = React.useState({
      color: '#4682b4',
      displayOption: false,
      displayPicker: false,
   })

   const handleOptionChange = () => {
      setShowAltColor(prevState => !prevState)
   }
   const handleColorOneChange = (color: any) => {
      setColorOne(prevState => ({ ...prevState, color: color.hex }))
   }
   const handleColorTwoChange = (color: any) => {
      setColorTwo(prevState => ({ ...colorTwo, color: color.hex }))
   }
   const handleClick: handleClickProps = (target, e) => {
      const el = e.currentTarget as HTMLInputElement
      handleUpdateModalPosition(
         el.offsetLeft - el.scrollLeft + el.clientLeft,
         el.offsetTop - el.scrollTop + el.clientTop
      )

      // TODO: refactor now that I am getting event from click??
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
   const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSize(parseFloat(e.target.value))
   }

   const handleClose = (target: string) => {
      console.log('try to close Modal')

      // TODO: refactor now that I am getting event from click??
      switch (target) {
         case 'colorOne':
            setColorOne({ ...colorOne, displayPicker: false })
            break
         case 'colorTwo':
            setColorTwo({ ...colorTwo, displayPicker: false })
         default:
            break
      }
   }

   return (
      <div>
         <h2>{title}</h2>
         <Loader
            type={type}
            color={colorOne.color}
            altColor={colorTwo.color}
            size={size}
            className="container"
         />

         <div className="customization">
            <h3>Customize</h3>

            <div className="colors">
               <div className="swatch">
                  <button
                     id={`colorOneButton-${index}`}
                     className="pickerButton"
                     onClick={e => handleClick('colorOne', e)}
                     style={{ backgroundColor: colorOne.color }}
                  >
                     <div className="pickerButtonSwatch"></div>
                  </button>
                  {colorOne.displayPicker ? (
                     <Modal>
                        <div className="popover">
                           <div
                              className="cover"
                              onClick={() => handleClose('colorOne')}
                           />

                           <ChromePicker
                              color={colorOne.color}
                              onChange={handleColorOneChange}
                           />
                        </div>
                     </Modal>
                  ) : null}
               </div>
               <div className="label">Primary Color</div>
               <div>
                  <form>
                     <input
                        id={`altColorOption-${index}`}
                        type="checkbox"
                        onChange={handleOptionChange}
                     ></input>
                  </form>
               </div>
               <div>
                  <label htmlFor="altColorOption">Make Duotone</label>
               </div>
               <div className={`swatch ${showAltColor ? '' : 'hidden'}`}>
                  <button
                     id={`colorTwoButton-${index}`}
                     className="pickerButton"
                     onClick={e => handleClick('colorTwo', e)}
                     style={{ backgroundColor: colorTwo.color }}
                  >
                     <div className="pickerButtonSwatch"></div>
                  </button>
                  {colorTwo.displayPicker ? (
                     <Modal>
                        <div className="popover">
                           <div
                              className="cover"
                              onClick={() => handleClose('colorTwo')}
                           />

                           <ChromePicker
                              color={colorTwo.color}
                              onChange={handleColorTwoChange}
                           />
                        </div>
                     </Modal>
                  ) : null}
               </div>
               <div className={`label ${showAltColor ? '' : 'hidden'}`}>
                  Primary Color
               </div>
               <div>
                  <form>
                     <input
                        type="number"
                        id={`size-${index}`}
                        name="Size"
                        min="1"
                        max="300"
                        value={size}
                        onChange={e => handleSizeChange(e)}
                     />
                  </form>
               </div>
               <div>
                  <label htmlFor={`size-0${index}`}>Loader Size</label>
               </div>
            </div>
         </div>
         <div className="copyandpaste code">
            <span className="sample opening">{`<Loader `}</span>
            <span className="sample prop">{`type="${type}" `}</span>
            <span className="sample prop">{`color="${colorOne.color}" `}</span>
            <span className="sample prop">{`${
               showAltColor ? `altColor="${colorTwo.color}" ` : ``
            }`}</span>
            <span className="sample prop">{`size={${size}} `}</span>
            <span className="sample closing">{`/>`}</span>
         </div>
      </div>
   )
}

export default LoaderSample
