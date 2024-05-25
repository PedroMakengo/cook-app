import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {},
  header: {
    paddingHorizontal: 32,
    paddingTop: 62,
    marginBottom: 12,
  },
  title: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
    marginTop: 32,
  },
})
