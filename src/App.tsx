// @ts-ignore
import React, {useState, useEffect } from 'react';
import {View, StyleSheet, Text,Dimensions} from 'react-native';
import {server as serverName} from '../app.json';

import {ApolloClient,InMemoryCache} from 'apollo-boost';
import gql from 'graphql-tag';
// import Home from './Home';

const {width,height} = Dimensions.get('window');

export default function App(props){

    // @ts-ignore
    const [client,setClient] = useEffect();

    let article = gql`
        query articlesQuery($page: Int) {
            articles(page: $page) {
                data {
                    id
                }
            }
        }
    `;

    useEffect( () => {
        let uri = serverName+"/gql";
        let client = new ApolloClient({
            uri: uri,
            cache: new InMemoryCache()
        });
        setClient(client);

        client.query({
            query: article
        }).then( v => {
            console.log(v);
        }).catch(e => {console.log(e)});

    },[]);


    return (
            <View style={styles.container}>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:width,
        height:height,
        backgroundColor: '#f1f1f1'
    }
});
