import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import {
  Card,
  Header,Divider
} from 'react-native-elements'
export default class App extends React.Component {
  constructor() {
    super()
    this.state =
    {
      data: null,
    }
  }
  renderItem = ({ item }) => {
    return (
      <Card>
      <View style = {styles.View}>
        <Image style={styles.image} source={{uri:item.urlToImage}} />
        <Text style={styles.title}>{item.title} </Text>
        <Text style={styles.description}>{item.description}</Text>
        <Divider style={styles.Divider} />
         </View>
      </Card>
    )
  }
  componentDidMount() {
    this.callApiOfNews();
  }
  callApiOfNews = async () => {
    let response = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=29833d2b4c054614815491bcd1f56927');
    let convertResponseIntoJson = await response.json()
    this.setState({ data: convertResponseIntoJson })
  }
  render() {
    return (
     <SafeAreaView style={styles.SafeAreaView}>
        <Header
          placement=" center"

          centerComponent={{
            text: 'News App', style: {
              textAlign: 'center', color: 'white', fontSize: 20,
              fontWeight: 'bold'
            }
          }}
          backgroundColor="#FE9B02"
        />
         
        
        {this.state.data != null && (
          
          <FlatList
            data={this.state.data.articles}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          //   extraData={selectedId}
          />

        )
        
        }
        
      </SafeAreaView>
     
    )
  }
}
const styles = StyleSheet.create({
image :
{
  height:118,
  width:310,
},
SafeAreaView:
{
  backgroundColor:'white',
},
title:
{
  marginTop:-100,
  color:'white',
  fontSize:20,
  fontWeight:'bold'
},
description:
{
  marginTop:85,

},Divider:
{
  backgroundColor: '#dfe6e9',
  marginTop:40, 
}
})

