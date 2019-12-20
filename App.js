import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Counter from './Counter.js';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.timer1 = React.createRef();
    this.timer2 = React.createRef();
    this.state={
      working: true
    }
  }

  resume = () => {
    if(this.state.working==true)
      this.timer1.current.resumeTimer();
    else
      this.timer2.current.resumeTimer();
  }

  pause = () =>{
    if(this.state.working==true)
    this.timer1.current.pauseTimer();
  else
    this.timer2.current.pauseTimer();
  }

  restart = () =>{
    if(this.state.working==true)
    this.timer1.current.resetTimer();
  else
    this.timer2.current.resetTimer();
  }

  toggle = () =>{
    this.setState({
      working: !this.state.working
    })
    this.restart()
  }

  render(){
    return(
      <View style={styles.container}>
      <View>

        <Counter starttime={1} type={"Work"} ref = {this.timer1} active={true} toggle = {this.toggle}/>
      
      </View>
      <View style={styles.bcontainer}>
        <TouchableOpacity style={styles.bstyle} onPress = {this.pause}>
          <Text style={styles.btext}>Pause</Text>
        </TouchableOpacity >
        
        <TouchableOpacity style={styles.bstyle} onPress = {this.resume}>
            <Text style={styles.btext}>Resume</Text>
        </TouchableOpacity >
      
        <TouchableOpacity style={styles.bstyle} onPress = {this.restart}>
          <Text style={styles.btext}>Reset</Text>
        </TouchableOpacity >
      </View>
      <View>

        <Counter starttime={1} type={"Play"} ref={this.timer2} active={false} toggle = {this.toggle}/>
      
      </View>
    </View>
    );
  }


}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    paddingTop: 100,
},
lineStyle: {
    borderWidth: 0.4,
    borderColor: 'black',
    margin: 20,
    padding: 20,
    width: 170
},
bstyle: {
    backgroundColor: '#2e9fe6',
    padding: 5,
    borderWidth: 0.5,
    borderColor: 'black',
    width: 70,
    alignItems: 'center',
    margin: 3,
    height: 30
},
btext: {
    color: 'white',
    fontWeight: '500',
},
bcontainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
}



});
