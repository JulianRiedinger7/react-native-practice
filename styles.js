import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1f1f1',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	titleContainer: {
		alignSelf: 'flex-start',
	},
	title: {
		fontSize: 70,
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: 20,
		color: 'gray',
	},
	inputsContainer: {
		marginTop: 20,
	},
	input: {
		paddingVertical: 15,
		paddingStart: 20,
		backgroundColor: '#fff',
		borderRadius: 30,
		fontSize: 16,
		marginVertical: 10,
		width: 300,
	},
	createAccount: {
		marginTop: 50,
		flexDirection: 'row',
	},
	create: {
		fontWeight: 'bold',
	},
});
