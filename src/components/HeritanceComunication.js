import React from 'react';
import { View, Text } from "react-native";

const font = { style: { fontSize: 40} }

const propsOfSons = props => 
    React.Children.map(props.children, c => React.cloneElement(c, { ...props, ...c.props } ));

export const Son = props =>
    <View>
        <Text {...font}>Filho: { props.name } { props.secondName }</Text>
    </View>

export const Father = props =>
    <View>
        <Text {...font}>Pai: { props.name } { props.secondName }</Text>
        {/* { props.children } */}
        {/* { React.Children.map(props.children, c => React.cloneElement(c, { ...props, ...c.props } )) } */}
        {propsOfSons(props)}
    </View>

export const Grandfather = props =>
    <View>
        <Text {...font}>Avô: { props.name } { props.secondName }</Text>
        <Father name='Neto'  secondName={ props.secondName }>
            <Son name='Amora' />
            <Son name='Bento' />
        </Father>

        <Father {...props} name='Ronei'> 
            <Son name='Julia' />
            <Son name='Camila' />
            <Son name='Neto' />
        </Father>
    </View>

export default Grandfather;