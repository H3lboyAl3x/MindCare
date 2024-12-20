import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function TelaInicio01()
{
    return(
        <View>
            <View style={styles.container}></View>
            <View style={styles.image}>
                <View style={styles.image1}>
                    <Image source={{ uri: 'https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg'}}></Image>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'red',
    },
    image: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: 400,
        width: '96%',
        marginTop: 130,
        marginLeft: 8,
        borderRadius: 200,
        borderWidth: 2,
        borderColor: '#34C759'
    },
    image1: {
        marginTop: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        height: 320,
        width: '80%',
        borderRadius: 200,
        borderWidth: 2,
        borderColor: '#40C900'
    }
});