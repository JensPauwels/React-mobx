import React from 'react';
import {observer} from 'mobx-react'
import User from './User';


const TestComponent = observer(({store}) => {
  return (
    <div>
      <div>
        <h1 onClick={store.log}>{store.total}</h1>

        <ul>
          {store.getUsers.map((user, index) => (
            <User key={index} name={user} />
          ))}
        </ul>

        <input type="text" value={store.newUser} onChange={e => store.update(e.target.value)}/>
        <input type="submit" value="add" onClick={store.add}/>
      </div>
    </div>
  )
});

export default TestComponent;