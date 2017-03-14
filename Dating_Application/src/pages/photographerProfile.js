import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FilterCategorysPage from '../views/FilterCategorysPage';
import * as CategorysActions from '../actions/categorys';

function mapStateToProps(state, props) {


               return {
                              categorys,
                              categorys_videos: Array.from(categorys_videos),
                              isCategorysLoaded: state.categorys.current.isLoaded,
                              isCategorysLoading: state.categorys.current.isFetching,
               }
}

function mapDispatchToProps(dispatch) {
               return bindActionCreators(
               {
                              ...CategorysActions,
               }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterCategorysPage);
