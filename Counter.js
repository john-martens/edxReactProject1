import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            workmin: this.props.time,
            playmin: 5,
            worksec: 0,
            playsec: 0,
            working: true
        }
        globalThis.second = 0
        globalThis.minute = this.props.time;
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }

    pauseTimer = () => {
        clearInterval(this.timer);
    }

    startTimer = () => {
        this.timer = setInterval(this.tick, 1000);
    }

    resetTimer = () => {
        clearInterval(this.timer);
        second = 0;
        minute = 20;
        this.setState({
            working: true,
            worksec: 0,
            workmin: 20
        });
    }

    tick = () => {
        second = this.state.worksec;
        second--;
        if (second == -1) {
            second = 59;
            minute--;
            if (minute == -1) {
                minute = this.state.working ? 5 : 20;
            }
        }
        if (this.state.working) {
            this.setState({
                worksec: second,
                workmin: minute,
            });
        }
        else {
            this.setState({
                playsec: second,
                playmin: minute,
            });
        }
    }

    timeText = (val) => {
        return val >= 10 ? val : "0" + val;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.lineStyle}>
                    Work Time: {this.timeText(this.state.workmin)}:{this.timeText(this.state.worksec)}
                </Text>
                <View style={styles.bcontainer}>
                    <TouchableOpacity style={styles.bstyle} onPress={this.pauseTimer}>
                        <Text style={styles.btext}>
                            Pause
                </Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.bstyle} onPress={this.startTimer}>
                        <Text style={styles.btext}>
                            Resume
                </Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.bstyle} onPress={this.resetTimer}>
                        <Text style={styles.btext}>
                            Reset
                </Text>

                    </TouchableOpacity >
                </View>
                <Text style={styles.lineStyle}>
                    Play Time: {this.timeText(this.state.playmin)}:{this.timeText(this.state.playsec)}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        height: 300
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }


});