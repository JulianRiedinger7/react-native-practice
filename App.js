import { ImageBackground, Text, TextInput, View } from 'react-native';
import GradientButton from './components/GradientButton';
import { styles } from './styles';
import { StatusBar } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle={'white'} />
			<ImageBackground
				source={{
					uri: 'https://cdn.wallpapersafari.com/62/93/7TzcaL.jpg',
				}}
				resizeMode="cover"
				style={styles.image}
			>
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
					<Text
						style={{ alignSelf: 'flex-end', paddingBottom: 50, color: '#fff' }}
					>
						Forgot your password?
					</Text>
					<GradientButton />
				</View>
				<View style={styles.createAccount}>
					<Text style={{ color: '#fff' }}>Dont have an account? </Text>
					<Text style={styles.create}>Create</Text>
				</View>
			</ImageBackground>
		</View>
	);
}
