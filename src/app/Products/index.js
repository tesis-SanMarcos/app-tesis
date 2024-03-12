import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WContainerCard from "../../components/hocs/container/containerHome";
import { FAB, Searchbar } from "react-native-paper";
import { globalStyles } from "../../shared/configuration/global-styles";
import WProduct from "../../components/molecules/Product";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../shared/utils/constant";
import WBarScanner from "../../components/molecules/BarScanner";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../shared/configuration/routes";

const Products = () => {
    const navigateHook = useNavigation()

    
    return (
        <>
            <WContainerCard>
                <Searchbar                
                    inputStyle={styles.searchbar}
                    placeholder="Codigo"
                    icon={{ uri: "https://cdn-icons-png.flaticon.com/128/3031/3031293.png" }} />
                <ScrollView>
                    <WProduct />
                    <WProduct />
                    <WProduct />
                </ScrollView>

            </WContainerCard>
            <FAB
                color="white"
                icon={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1550/1550324.png",
                }}
                style={globalStyles.fab}
                onPress={()=> navigateHook.navigate(Routes.Scanner)}
            />
        </>
    );
};

export default Products;

const styles = StyleSheet.create({
    searchbar: {
        width: "100%",
        color: COLORS.white,
        maxHeight: 20
        
    }
})
