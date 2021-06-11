import React from 'react';
import { Route } from 'react-router-dom'
// import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'



import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

// import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
// import CollectionPage from '../collection/collection.component';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';
// import { selectIsCollctionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { useEffect } from 'react';

// WithSpinner will return a spinner if isLoading prop is true or the component itself that we pass if isLoading is false
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const ShopPage = ({ fetchCollectionsStart, match }) => {
   
    useEffect(() => {
        fetchCollectionsStart();
    },[fetchCollectionsStart])

    return (
        <div className='shop-page'>
            {/*<Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>} />*/}
            {/*<Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}/>*/}
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )
}


// const mapStateToProps = createStructuredSelector({
//     isCollectionsLoaded : selectIsCollectionsLoaded
// })

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);