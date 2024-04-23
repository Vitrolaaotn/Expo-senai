import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import  useTheme from "../temas/Temas";



type ItensProps = {
    id: string,
    item: string,
    href: string,

}

const Itens = ({id, item }: ItensProps) => {
    return(
        <View style={styles.display}>
            <Text style={styles.text}>{id}</Text>
            <Text style={styles.item}>{item}</Text>
        </View>
    );
};

export default Itens;

const cores = useTheme()
const styles = StyleSheet.create({
    display: {
        borderBottomColor: cores.bgprimaryvariant,
        borderBottomWidth: 2,
    },
    text : {
        fontSize: 20,
        fontWeight: '500',
        color: cores.textcolorvariant,
        alignContent: 'center',
        marginTop: 20,
        marginLeft: 25,
    },
    item: {
        fontSize: 15,
        fontWeight: '500',
        color: 'lightgray',
        alignContent: 'center',
        marginLeft: 25,
        marginBottom: 20,
    },
});