import React from 'react';
import allContacts from '../contacts.json'

export class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people : allContacts.splice(0, 5)
    }
    this.handleClick = this.handleClick.bind(this)
  }

  
  handleClick () {
    let num = Math.floor(Math.random() * allContacts.length)
    this.setState(prevState => ({ // could be asynchronous
      people : [...prevState.people, allContacts[num]] // ... turns array into series of element without shell of bracket s- independent
    // [71, ...prevState.people] to unshift - i 
    })) // , can add , here to callback in afer it is done
  }

  render () {
  let people = this.state.people
  return (
    <div>
      <button onClick={this.handleClick} >Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>
              Picture
            </th>
            <th>
              Name
            </th>
            <th>
              Popularity
            </th>
          </tr>
        </thead>
        <tbody>
          
        {people.map((person,i) =>    // adding keys means react will optimise some things behind the scene s- importnt          
          <tr key={i}>  
            <td>
              <img className="image" alt="profilePic" src={person.pictureUrl} />
            </td>
            <td>
              {person.name}
            </td>
            <td>
               {person.popularity}
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}
}

//alternative setstate syntax
// this.setState(prevState => {
//   // declare some variables
//   return { // return an object
//     x: variables
//   }
// })