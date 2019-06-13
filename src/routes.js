import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import welcome from './pages/welcome'
import organizations from './pages/organizations'
import repositories from './pages/repositories'

const Routes = createAppContainer(createSwitchNavigator({
    welcome,
    repositories
}))

export default Routes