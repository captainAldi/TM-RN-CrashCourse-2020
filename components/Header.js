import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
	header: {
		height: 60,
		padding: 15,
		backgroundColor: 'darkslateblue'
	},
	text: {
		color: '#fff',
		fontSize: 23,
		textAlign: 'center'
	}
})

const Header = (props) => {
	return (
		<View style={style.header}>
			<Text style={style.text}>{props.title}</Text>
		</View>
	)
}

Header.defaultProps = {
	title: 'Shopping List'
}

export default Header
