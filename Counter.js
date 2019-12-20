import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            min: this.props.starttime,
            resetmin: this.props.starttime,
            active: this.props.active,
            sec: 0,
            on: false,
        }
        this.s = 0;
        this.m = this.props.starttime;
    }

    componentDidMount() {
        if (this.state.active) {
            this.timer = setInterval(this.countDown, 1000);
            this.setState({
                on: true
            })
        }
    }

    switchOver = () => {
        this.props.toggle()
    }

    pauseTimer = () => {
        if (this.state.on) {
            clearInterval(this.timer);
            this.setState({
                on: false
            })
        }
    }

    resumeTimer = () => {
        if (this.state.on == false) {
            this.timer = setInterval(this.countDown, 1000);
            this.setState({
                on: true
            })
        }
    }

    resetTimer = () => {
        this.m = this.state.resetmin
        this.s = 0
        if (this.state.on == false) {
            this.timer = setInterval(this.countDown, 1000);
            this.setState({
                on: true,
                sec: 0,
                min: this.m,
                active:true
            })
        }
        else {
            this.setState({
                min: this.m,
                sec: 0
            })
        }
    }

    countDown = () => {
        this.s -= 1;
        if (this.s == -1) {
            this.s = 59;
            this.m--;
        }
        // we are out of time
        if (this.m == -1) {
            this.switchOver()
            this.m = this.state.resetmin
            this.s = 0
            clearInterval(this.timer)
            this.setState({
                active: false,
                on: false,
                sec: 0,
                min: 0
            })
             //call to run parent function
        }
        //just updating time
        else {
            this.setState({
                sec: this.s,
                min: this.m,
            })
        }
    }

    timeText = (val) => {
        return val >= 10 ? val : "0" + val;
    }

    render() {
        return (
            <View >
                <Text style={this.state.active? styles.isOn:styles.isOff}>
                    {this.props.type} Time: {this.timeText(this.state.min)}:{this.timeText(this.state.sec)}
                </Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    isOn: {
      color: 'green',
      fontWeight: 'bold',
      fontSize: 18
  },
  isOff: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14
}


});