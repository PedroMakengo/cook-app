import { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import { styles } from './styles'
import { Recipe } from '@/components/Recipe'
import { services } from '@/services'
import { Ingredients } from '../../components/Ingredients'

export default function Recipes() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
  const [recipes, setRecipes] = useState<RecipeResponse[]>([])

  const params = useLocalSearchParams<{ ingredientsIds: string }>()

  const ingredientsIds: any = params.ingredientsIds?.split(',')

  useEffect(() => {
    services.ingredients.findByIds(ingredientsIds).then(setIngredients)
  }, [])

  useEffect(() => {
    services.recipes.findByIngredientsIds(ingredientsIds).then(setRecipes)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />
        <Text style={styles.title}>Ingredientes {recipes.length}</Text>
      </View>

      <Ingredients ingredients={ingredients} />

      {recipes.length > 0 ? (
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Recipe
              recipe={item}
              onPress={() => router.navigate('/recipe/' + item.id)}
            />
          )}
          style={styles.recipes}
          contentContainerStyle={styles.recipesContent}
          columnWrapperStyle={{ gap: 16 }}
          numColumns={2}
        />
      ) : (
        <View>
          <Text>Não existe receitas</Text>
        </View>
      )}
    </View>
  )
}
