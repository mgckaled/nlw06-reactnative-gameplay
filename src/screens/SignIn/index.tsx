import React from "react";
import { View, Text, Image, StatusBar } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
	return (
		<View style={styles.container}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent // icones da barra de status sobrepoem o background
			/>

			<Image
				source={IllustrationImg}
				style={styles.image}
				resizeMode="stretch"
			/>

			{/* {`\n`} => quebra de linha */}
			<View style={styles.content}>
				<Text style={styles.title}>
					Organize {`\n`}
					suas jogatinas {`\n`}
					facilmente
				</Text>

				<Text style={styles.subtitle}>
					Crie grupos para jogar seus games {`\n`}
					favoritos com seus amigos
				</Text>

				{/* activeOpacity entre .7 e .9 é ideal para botões*/}
				<ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
			</View>
		</View>
	);
}
