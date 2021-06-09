import React from 'react';
import {connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionPageContainer, ItemsContainer, Title } from './collection.styles';


const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    
    return(
    <CollectionPageContainer>
        <Title >{title}</Title>
        <ItemsContainer>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </ItemsContainer>
    </CollectionPageContainer>
)}

// the ownProps is the actual props of the component (CollectionPage) in this case the only prop is "match"
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);