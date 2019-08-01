import { React } from 'react';
import { PropTypes } from 'prop-types';
import { Text } from 'react-native';

const ValidateProps = props =>
    <Text style={{fontSize : 40}}>
        {props.label}
        {props.year+2000}
    </Text>

ValidateProps.defaultProps = {
    label: 'Ano: '
}

ValidateProps.PropTypes = {
    year: PropTypes.number.isRequiresd
}

export default ValidateProps;