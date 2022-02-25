import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './avatar.scss'
 
export function getInitialOfName(text) {
 return text
   .split(' ')
   .map(x => x.charAt(0))
   .join('')
   .substr(0, 2)
   .toUpperCase()
}
 
function Avatar({
 size,
 src,
 title,
 onClick,
 bgColor,
 className,
 fontSize,
 fontColor,
 lineHeight
}) {
 const [imgSrc, setImgSrc] = useState(src)
 console.log(title)
 return (
   <div
     className={`avatar ${className}`}
     style={{
       width: `${size}px`,
       height: `${size}px`,
       backgroundColor: bgColor
     }}
     onClick={onClick}
   >
     {imgSrc ? (
       <img
         src={imgSrc}
         alt="avatar"
         onError={e => {
           setImgSrc(null)
           e.target.onError = null
         }}
       />
     ) : (
       <span
         style={{
           color: fontColor,
           fontSize: fontSize,
           lineHeight
         }}
>
         {getInitialOfName(title)}
       </span>
     )}
   </div>
 )
}
 
export default Avatar
 
Avatar.defaultProps = {
 size: 50,
 src: '',
 title: '',
 onClick: () => {},
 bgColor: '#ccc',
 className: '',
 fontSize: '1rem',
 fontColor: '--avatar-text-color',
 lineHeight: '1rem'
}
 
Avatar.propTypes = {
 size: PropTypes.number,
 src: PropTypes.string,
 title: PropTypes.string,
 onClick: PropTypes.func,
 bgColor: PropTypes.string,
 className: PropTypes.string,
 fontSize: PropTypes.string,
 fontColor: PropTypes.string,
 lineHeight: PropTypes.string
}