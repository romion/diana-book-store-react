import * as BookActionCreators from './book'
import * as BookItemActionCreators from './book-item'

export default {
    ...BookActionCreators,
    ...BookItemActionCreators
}
