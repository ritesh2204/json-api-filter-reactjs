
import React from 'react';
import axios from 'axios';


// function searchingFor(term){
//     console.log(term)
//     return function(text){
//         )}
//     }
    export class PersonList extends React.Component {
        
        constructor(props) {
            super(props);
            this.state = {   persons: [], term: '', };
           }
        
        searchHandler=(event)=>{
            this.setState({term: event.target.value})
        }
        
        componentDidMount(){
            axios.get(`https://jsonplaceholder.typicode.com/users?person=name,username`)
            .then(res =>{
                this.setState({ persons: res.data});
            })
        }
        
        render(){
            const {term, persons} = this.state;
            console.log(persons)
            const filteredPerson = persons.filter((person)=>{
            return  person.name.toLowerCase().includes(term.toLowerCase())
    })
            console.log(filteredPerson)
    return(
        <div>
            <form>
                <input type="text" onChange={this.searchHandler} value={term} />
            </form>
        <ul>
            {filteredPerson.map(person =>
            <div>
            <li key={person.id}><b>Name: </b>{person.name}
            
            
            </li>
           <b>Username:</b> {person.username}
            </div>
            )}
        </ul>
        </div>
    )
}
}

