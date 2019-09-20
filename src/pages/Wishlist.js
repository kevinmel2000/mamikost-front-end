import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground,YellowBox } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage'
import *  as rentlist from '../_actions/rentlist'
import Spinner from './Spinner'

YellowBox.ignoreWarnings(['ViewPagerAndroid']);

class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            love: []
        }
        this.asyn()
    }

    asyn = () => {
        AsyncStorage.getItem('love', (error, result) => {
            if (result) {
                this.setState({ love: JSON.parse(result) })
            }
        })
    }

    componentDidMount() {
        // this.asyn(),
        this.props.getRentList()
    }

    minLove = (rentId) => {
        love = this.state.love
            for (var i = 0; i < love.length; i++) {
                if (love[i] == rentId) {
                    love.splice(i,1)
                    this.setState({ love })
                }
            } 
       AsyncStorage.setItem('love', JSON.stringify(love));
    }

    render() {
        const rentlist = this.props.rentlist.data
        const love = this.state.love
        if (rentlist.isLoading == true) {
            return (
                <Spinner />
            )
        } else {
            if (this.state.love.length > 0) {
                return (
                    <ScrollView>
                        {rentlist.map((item, index) => (
                            love.map((e, i) => {
                                if (e == item.rentlists.id) {
                                    return (
                                        <View style={{ flex: 1, marginTop: 10 }} key={index}>
                                            <TouchableOpacity onPress={() => {
                                                this.props.navigation.navigate('ViewDetail',{back:'Wishlist'})
                                                this.props.getRentListById(item.rentlists.id)
                                            }}>
                                                <View style={{ borderWidth: 2, borderColor: 'white' }}>
                                                    <ImageBackground
                                                        style={{ height: 150, resizeMode:'stretch' }}
                                                        source={{ uri: item.image }} >
                                                        <TouchableOpacity style={styles.containerHeart} onPress={() => { this.minLove(item.rentlists.id) }}>
                                                            <Icon size={30} style={styles.heart} name='heart' />
                                                        </TouchableOpacity>
                                                    </ImageBackground>
                                                </View>
                                                <View><Text style={styles.gender}>{item.rentlists.rentname}</Text></View>
                                                <View><Text style={styles.price} >Rp. {item.rentlists.price}</Text></View>
                                                <View><Text>{item.rentlists.rentaddress}</Text></View>
                                                <View><Button rounded success style={styles.button}><Text>Bisa Booking</Text></Button></View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }
                            })

                        ))}

                    </ScrollView>
                )
            } else {
                
                return (
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <Text style={styles.h1}>Belum ada favorit</Text>
                        </View>
                    </View>
                )
            }
        }
    }
}

mapStateToProps = state => {
    return {
        rentlist: state.rentlist
    }
}

mapDispatchToProps = dispatch => {
    return {
        getRentList: () => dispatch(rentlist.get_rentlist()),
        getRentListById: (id) => dispatch(rentlist.get_rent_list_by_id(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)

styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    h1: {
        fontSize: 25
    },
    price: {
        fontSize: 20
    },
    gender: {
        color: 'pink'
    },
    button: {
        width: 90,
        height: 30,
        marginTop: 10
    },
    containerHeart: {
        alignItems: 'flex-end'
    },
    heart: {
        color: 'red'
    }
})