import React from "react";
import { View, Text, StyleSheet,useColorScheme } from "react-native";
import InventoryInput from "../components/invinput";
import useTheme from "../temas/Temas";
import { StatusBar } from "react-native";

export default function AddItens() {
    const cores = useTheme();
        
    const styles = StyleSheet.create({
        paddingtop: {
        paddingTop: 60,
    }});

    return (
        <View style={{
            backgroundColor: cores.bgPrimary,
            height: "100%",
           
        }}>
        <StatusBar backgroundColor={cores.bgPrimaryVariant} barStyle="light-content" />
    <View>
        <View style={styles.paddingtop}>
        <InventoryInput label='N inventario'/>
        <InventoryInput label='Descrição' />
        <InventoryInput label='Local'/>
        <InventoryInput label='Responsavel'/>
        <InventoryInput label='Data de registro'/>
        </View>
        </View>
    </View>
    );
} 