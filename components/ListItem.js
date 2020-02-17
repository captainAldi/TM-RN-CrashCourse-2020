import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const style = StyleSheet.create({
	listItem: {
		padding: 15,
		backgroundColor: '#f8f8f8',
		borderBottomWidth: 1,
		borderColor: '#eee'
	},
	listItemView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	listItemText: {
		fontSize: 18
	}
})

const ListItem = (props) => {
	return (
		<TouchableOpacity style={style.listItem}>
			<View style={style.listItemView}>
				<Text style={style.listItemText}>{props.item.text}</Text>
				<Icon name="remove" size={20} color="firebrick" onPress={() => props.deleteItem(props.item.id)}/> 
			</View>
		</TouchableOpacity>
	)
}

export default ListItem
