import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native'
import { uuid } from 'uuidv4'

import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const style = StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: 30
		},
	})

const App = () => {
	const [items, setItems] = useState([
		{id: uuid(), text: 'milk'},
		{id: uuid(), text: 'bread'},
		{id: uuid(), text: 'banana'},
		{id: uuid(), text: 'juice'},
	])

	const deleteItem = (id) => {
		setItems(prevItems => {
			return prevItems.filter(item => item.id !== id)
		})
	}

	const addItem = (item) => {
		if (!item) {
			Alert.alert('Error', 'Please enter an Item', [
				{text: 'Ok'}
			], {cancelable: false})
		} else {
				setItems(prevItems => {
				return [{id: uuid(), text: item}, ...prevItems]
			})
		}
	}

	return (
		<View style={style.container}>
			<Header />
			<AddItem addItem={addItem}/>
			<FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}/>
		</View>
	)
}

export default App
