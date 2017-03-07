import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FilterCategorysPage from '../views/FilterCategorysPage';
import * as CategorysActions from '../actions/categorys';

function mapStateToProps(state, props) {
               const
                    {
                        channel,
                              }    = props,
                              filter_categorys = channel.categorys || [],
                              categorys                                          = state.categorys.current.items
                                             .filter(category => filter_categorys.indexOf(category.key) != -1)
                              ,
                              categorys_videos             = categorys
                                             .reduce((videos, category) =>
                                             {
                                                            if (!category.videos)
                                                                           return videos;

                                                            category.videos.forEach(video => videos.add(video));

                                                            return videos;
                                             }, new Set())
               ;

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
