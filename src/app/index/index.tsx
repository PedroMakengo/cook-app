import { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './styles'

// COMPONENTS
// import { Ingredients } from '@/components/Ingredients'
import { Ingredient } from '@/components/Ingredient'
export default function Index() {
  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
    console.log(selected)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descobra as receitas baseadas nos produtos que você escolheu.
      </Text>

      <ScrollView
        contentContainerStyle={styles.ingredients}
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
    </View>
  )
}
