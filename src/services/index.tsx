import * as ingredients from './ingredientsService'
import * as recipes from './recipesService'
import * as preparations from './preparationsService'

export const services = {
  ingredients,
  recipes,
  preparations,

  storage: {
    imagePath:
      'https://fawsebglgnsqjpwbihov.supabase.co/storage/v1/object/public/ingredients',
  },
}
