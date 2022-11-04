import { Text, TextInput, View } from 'react-native';
import GradientButton from './components/GradientButton';
import { styles } from './styles';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Hello</Text>
				<Text style={styles.subtitle}>Sign In to your account</Text>
			</View>

			<View style={styles.inputsContainer}>
				<TextInput style={styles.input} placeholder="Enter your email" />
				<TextInput
					style={styles.input}
					placeholder="Enter your password"
					secureTextEntry={true}
				/>
				<Text style={{ alignSelf: 'flex-end', paddingBottom: 50 }}>
					Forgot your password?
				</Text>
				<GradientButton />
			</View>
			<View style={styles.createAccount}>
				<Text>Dont have an account?</Text>
				<Text style={styles.create}>Create</Text>
			</View>
		</View>
	);
}
