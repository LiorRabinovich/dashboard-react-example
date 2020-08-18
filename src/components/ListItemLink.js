import React from 'react';
import { NavLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';

export default function ListItemLink(props) {
    return <ListItem component={NavLink} to={'/'} {...props} />;
}
