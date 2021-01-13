import React from 'react';
import PropTypes from "prop-types";


const hashtags = [
  'react',
  'draft-js',
  'component'
];

const onMatch = (text) => hashtags.filter(hashtag => hashtag.indexOf(text) !== -1);

const Hashtag = (props) => (
  <span className="Hashtag">{props.children}</span>
);

Hashtag.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

const List = ({ children }) => {
  return (
    <ul className="HashtagList">{children}</ul>
  );
};

List.propTypes = {
  display: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element)
}

const Item = ({ item, current, onClick }) => {
  let classNames = "HashtagListItem";
  classNames+= current ? " current" : "";
  return (
    <li className={classNames} onClick={onClick}>
      {item}
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.string,
  current: PropTypes.bool,
  onClick: PropTypes.func
}

const hashtag = {
  prefix: '#',
  type: 'HASHTAG',
  mutability: 'IMMUTABLE',
  onMatch: onMatch,
  component: Hashtag,
  listComponent: List,
  itemComponent: Item,
  format: (item) => `#${item}`
};

export default hashtag;