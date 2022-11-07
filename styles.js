import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		color: '#fff',
	},
	subtitle: {
		fontSize: 20,
		color: '#efefef',
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
		alignSelf: 'center',
	},
	createAccount: {
		marginTop: 50,
		flexDirection: 'row',
		alignSelf: 'center',
	},
	create: {
		fontWeight: 'bold',
		color: '#fff',
	},
	image: {
		flex: 1,
		justifyContent: 'center',
		width: Dimensions.get('window').width,
		paddingHorizontal: 20,
	},
});
