import React from "react";

import CollectionItem from '../../components/collection-item/collection-item.component'

import "./collection-preview.style.scss";

const CollectionPreview = ({ items, title }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps}></CollectionItem>
        ))}
    </div>
  </div>
);

export default CollectionPreview;

// Mỗi khi Component CollectionPreview được render hoặc re render thì sẽ call đến function
