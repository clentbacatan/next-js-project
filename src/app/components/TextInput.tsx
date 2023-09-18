import React from 'react'




export interface profile {

    inputBox(): any
          
}

function inputBox () {
    // let input = document.getElementById('textBox')

    console.log('Test')

}

// deconstructuring the props will pass the component to other component
const textInput: React.FC<profile> = ({inputBox} : profile) => {

  return (
    <div>
        <form>
            <input id="textBox"> </input>
            
        </form>
      
    </div>
    
  )
}

export default textInput