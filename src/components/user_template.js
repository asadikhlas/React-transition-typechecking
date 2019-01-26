import React from 'react'
import PropsTypes from 'prop-types';

const UserTemplate = (props) => {
    console.log(props)
    return (
      <div>
        TEMPLATES
      </div>
    )
  }
UserTemplate.PropsTypes = {
    name:PropsTypes.oneOfType([
        PropsTypes.string,
        PropsTypes.number,
        PropsTypes.oneOf(['asad','ikhlas'])
    ]),
    lastname:PropsTypes.string,
    age:PropsTypes.number,
    hobbies:PropsTypes.arrayOf(PropsTypes.string),
    spanish:PropsTypes.bool,
    message:PropsTypes.func,
    car:PropsTypes.object,
    mother:PropsTypes.isRequired

}

export default UserTemplate;
