import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux';

import { selectIsCollctionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollctionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);


export default CollectionsOverviewContainer;

// const CollectionsOverViewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

