import React, {useState, Fragment, useEffect} from 'react'

//useState & useEffect = Hooks
export default function PersonViewer({name, age}) {
    const [nameState, setNameState] = useState(name); //Initial value from props (Parameteren)
    const [ageState, setAgeState] = useState(age);
    const [users, setUsers] = useState([{name: "John", email: "John@mail.dk"}, {name: "Jane", email:"Jane@mail.dk"}, {name: "Joe", email:"Joe@mail.dk"}]);

    useEffect(() => {
        const myPromise = fetch('https://jsonplaceholder.typicode.com/users');
        myPromise.then(response => response.json()).then(data => setUsers(data)); //then returns a promise.
    }, []); //on mount, happens when the personviewer hits the dom for the first time.
    
  return (
    <>
        {users.map((user, index) => (
            <>
                <ShowName name={user.name} />
                <div>{user.email}</div>
                <div>{user.username}</div>
                <div>{user.phone}</div>
                <div>{ageState}</div>
                <button onClick={() => setAgeState(ageState +1 )}>Get Older!</button>
            </>
        ))}
    </>
   
  )
}


const ShowName = ({name}) => {return <h3>{name}</h3>};


/* function ShowName({name}){
    return <h3>{name}</h3>
} */