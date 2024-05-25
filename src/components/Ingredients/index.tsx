import { useState } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { styles } from './styles'
import { Ingredient } from '../Ingredient'

export function Ingredients() {
  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
    console.log(selected)
  }
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({ length: 100 }).map((item, index) => (
        <Ingredient
          key={index}
          name="Maça"
          selected={selected.includes(String(index))}
          image="@/assets/images/tomato.png"
          onPress={() => handleToggleSelected(String(index))}
        />
      ))}
    </ScrollView>
  )
}
