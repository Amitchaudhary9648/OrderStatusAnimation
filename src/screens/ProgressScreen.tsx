import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';

const ProgressScreen = (): JSX.Element => {
    const [currentState, setCurrentState] = useState(0);
    const progress1 = useRef(new Animated.Value(0)).current;
    const progress2 = useRef(new Animated.Value(0)).current;
    const progress3 = useRef(new Animated.Value(0)).current;
    const [shoot, setShoot] = useState(false);

    const startAnimation1 = () => {
        Animated.timing(progress1, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    };

    const startAnimation2 = () => {
        Animated.timing(progress2, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    };

    const startAnimation3 = () => {
        Animated.timing(progress3, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    };
    const styles = getStyles();
    return (
        <View style={styles.container}>
            <View style={styles.dotContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={[
                            styles.dot,
                            { backgroundColor: currentState >= 1 ? 'green' : '#f2f2f2' },
                        ]}>
                        <Text style={styles.numberText}>1</Text>
                    </View>
                    {currentState >= 1 ? (
                        <Text style={{ marginLeft: 10 }}>Order Placed.</Text>
                    ) : null}

                </View>
                <View style={[styles.line, { backgroundColor: '#f2f2f2' }]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={[
                            styles.dot,
                            { backgroundColor: currentState >= 2 ? 'green' : '#f2f2f2' },
                        ]}>
                        <Text style={styles.numberText}>2</Text>
                    </View>
                    {currentState >= 2 ? (
                        <Text style={{ marginLeft: 10 }}>Order Dispatched from Surat, Gujarat.</Text>
                    ) : null }
                </View>
                <View style={[styles.line, { backgroundColor: '#f2f2f2' }]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={[
                            styles.dot,
                            { backgroundColor: currentState >= 3 ? 'green' : '#f2f2f2' },
                        ]}>
                        <Text style={styles.numberText}>3</Text>
                    </View>
                    {currentState >= 3 ? (
                        <Text style={{ marginLeft: 10 }}>Order is Out for Delivery.</Text>
                    ) : null}
                </View>
                <View style={[styles.line, { backgroundColor: '#f2f2f2' }]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={[
                            styles.dot,
                            { backgroundColor: currentState >= 4 ? 'green' : '#f2f2f2' },
                        ]}>
                        <Text style={styles.numberText}>4</Text>
                    </View>
                    {currentState >= 4 ? (
                        <Text style={{ marginLeft: 10 }}>Your Order is Delivered.</Text>
                    ) : null}
                </View>
            </View>

            <View style={styles.dotOverContainer}>
                <Animated.View
                    style={[
                        styles.lineOver,
                        { backgroundColor: 'green', height: progress1 },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.lineOver,
                        { backgroundColor: 'green', height: progress2 },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.lineOver,
                        { backgroundColor: 'green', height: progress3 },
                    ]}
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (currentState == 1) {
                        startAnimation1();
                    } else if (currentState == 2) {
                        startAnimation2();
                    } else if (currentState == 3) {
                        startAnimation3();
                    }

                    if (currentState == 0) {
                        setCurrentState(prev => prev + 1);
                    } else if (currentState >= 4) {
                        setCurrentState(1)
                        progress1.setValue(0)
                        progress2.setValue(0)
                        progress3.setValue(0)
                        setShoot(false)
                    } else {
                        setTimeout(() => {
                            if (currentState == 3) {
                                setShoot(true)
                            }
                            setCurrentState(prev => prev + 1);
                        }, 3000);
                    }
                }}>
                <Text style={styles.buttonText}>Next Step</Text>
            </TouchableOpacity>
            {shoot ?
                <ConfettiCannon
                    count={200}
                    origin={{ x: -10, y: 0 }}
                    fadeOut={true}
                />
                : null
            }
        </View>
    );
};

const getStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
        },
        dotContainer: {
            width: '100%',
            //alignItems: 'center',
            padding: 50,
        },
        dotOverContainer: {
            width: '100%',
            //alignItems: 'center',
            padding: 50,
            position: 'absolute',
            top: 0,
        },
        dot: {
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
        },
        numberText: {
            color: '#fff',
        },
        line: {
            width: 6,
            height: 100,
            backgroundColor: 'green',
            marginLeft: 13
        },
        lineOver: {
            width: 6,
            backgroundColor: 'green',
            marginTop: 30,
            marginLeft: 12
        },
        button: {
            width: '90%',
            backgroundColor: 'orange',
            marginTop: 70,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            borderRadius: 10,
        },
        buttonText: {
            color: '#fff',
            fontWeight: '600',
            fontSize: 20,
        },
    });

export default ProgressScreen;
