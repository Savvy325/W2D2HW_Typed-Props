import React from 'react'
import UserInfo from './components/UserInfo'
import Card from './components/Card'
import Image from './images/smiley.png'

const App = () => {
  return (
    <><div>
      <UserInfo name={'Savvy'} age={100} email={'Savvy@yahoo.com'} />
    </div>
     <div>
        <Card>
          <img src={Image} alt="An image" />
          <div>
            <h3>Card Title</h3>
            <p>card description</p>
            <button>Click me</button>
          </div>
        </Card>
        <Card>
          <h2>Title</h2>
          <p>This is a paragraph.</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
</Card>
      </div>
    </>
  )
}

export default App
