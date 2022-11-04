import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function GradientButton() {
	return (
		<TouchableOpacity>
			<LinearGradient
				// Button Linear Gradient
				colors={['#FFB677', '#FF3CBD']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={styles.button}
			>
				<Text style={styles.text}>Sign in with Facebook</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingVertical: 10,
		borderRadius: 30,
		textAlign: 'center',
	},
	text: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
