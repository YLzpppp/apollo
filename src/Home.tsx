// // @ts-ignore
// import React, {useState, useEffect } from 'react';
// import {View, StyleSheet, Text,Dimensions} from 'react-native';
// import { useApolloClient } from '@apollo/react-hooks';
// const {width,height} = Dimensions.get('window');
// import GQL from './apollo';
//
// export default function Home() {
//
//     const [data,setData] = useState();
//     const client = useApolloClient();
//
//
//     useEffect(() => {
//         client.query({
//             query: GQL.articlesQuery
//         }).then( value => {
//             console.log(value);
//         }).catch(error => {
//             console.log(error);
//         })
//     },[]);
//
//     return (
//         <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
//             <Text>{data}</Text>
//         </View>
//     )
// }
