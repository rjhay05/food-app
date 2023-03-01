import React from 'react'
import style from './Menu.module.css'
import Card from '../UI/Card'
import MenuList from './MenuList'
function Menu(props) {

  const foodData = [
    {
      id: 'm1',
      foodName: 'Caldereta',
      description: 'Beef with peanut butter and tomate sauce',
      price: 50

    },
    {
      id: 'm2',
      foodName: 'Sisig',
      description: 'Crispy pork sizling added with onion and green pepper',
      price: 75

    },
    {
      id: 'm3',
      foodName: 'Chopsuey',
      description: 'Fresh graden vegatables seasoned and saute',
      price: 45

    },
    {
      id: 'm4',
      foodName: 'Bulalo',
      description: 'Stew beef tender loin ',
      price: 100
    }
  ]


  return (
    <Card className={style[ 'menu-container' ]}>
      <ul>
        {foodData.map((item) => {
          return <MenuList key={item.id}
          id={item.id}
          name={item.foodName}
          description={item.description}
          price={item.price}
          />
        })}

      </ul>
    </Card>
  )
}

export default Menu