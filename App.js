import { useState } from 'react';
import {
	Button,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

export default function App() {
	const [item, setItem] = useState('');
	const [todos, setTodos] = useState([]);

	const addItem = () => {
		if (item === '') return;
		setTodos([...todos, item]);
		setItem('');
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Ingresa un Item"
					style={styles.textInput}
					placeholderTextColor={'#efefef'}
					value={item}
					onChangeText={(text) => setItem(text)}
				/>
				<Button title="ADD" color={'#01baef'} onPress={addItem} />
			</View>
			<View style={styles.listContainer}>
				<Text style={styles.listTitle}>Todo List</Text>

				{todos.map((todo, index) => (
					<View key={index} style={styles.todoContainer}>
						<Text style={styles.todoItem}>{todo}</Text>
					</View>
				))}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#040f16',
		paddingVertical: 50,
	},
	text: {
		color: '#fbfbff',
	},
	textInput: {
		borderBottomWidth: 3,
		borderColor: '#fbfbff',
		color: '#fbfbff',
		flex: 1,
		marginRight: 20,
	},
	inputContainer: {
		flexDirection: 'row',
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	listContainer: {
		width: '90%',
		borderWidth: 2,
		borderRadius: 8,
		borderColor: '#0b4f6c',
		alignSelf: 'center',
		marginVertical: 20,
		padding: 10,
		flex: 1,
	},
	listTitle: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 20,
		marginBottom: 10,
		textAlign: 'center',
	},
	todoContainer: {
		backgroundColor: '#01baef',
		padding: 10,
		borderRadius: 5,
		marginVertical: 7,
	},
	todoItem: {
		fontWeight: '700',
		fontSize: 15,
	},
});
