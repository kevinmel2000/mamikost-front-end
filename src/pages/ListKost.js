import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as rentlist from '../_actions/rentlist'
import { Button } from 'native-base'
import Spinner from './Spinner'
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage'

class ListKost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            love: []
        }
    }

    addLove = (rentId) => {
        love = this.state.love
        if (love.length > 0) {
            for (var i = 0; i < love.length; i++) {
                if (love[i] == rentId) {
                    this.setState({ love })
                } else if (i == love.length - 1) {
                    love.push(rentId)
                    this.setState({ love })
                }
            }
        } else {
            love.push(rentId)
            this.setState({ love })
        }
        AsyncStorage.setItem('love', JSON.stringify(love));
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

    checkAsyn = () => {
        AsyncStorage.getItem('love', (error, result) => {
            if (result) {
                      // We have data!!
                      console.log(JSON.parse(result));
                      this.setState({love:JSON.parse(result)})
                // console.log(result)
            }else{
                null
            }
        })
    }

    cekLove = (rentId) => {
        love = this.state.love
        console.log(love)
        if (love.length > 0) {
            for (var i = 0; i < love.length; i++) {
                if (love[i] == rentId) {
                    return (
                        <TouchableOpacity style={styles.containerHeart} onPress={() => { this.minLove(rentId) }}>
                            <Icon size={30} style={{color:'red'}} name='heart' />
                        </TouchableOpacity>
                    )
                } else if (i == love.length - 1) {
                    return (
                        <TouchableOpacity style={styles.containerHeart} onPress={() => { this.addLove(rentId) }}>
                            <Icon size={30} style={styles.heart} name='heart' />
                        </TouchableOpacity>
                    )
                }
            }
        } else {
            return (
                <TouchableOpacity style={styles.containerHeart} onPress={() => { this.addLove(rentId) }}>
                    <Icon size={30} style={styles.heart} name='heart' />
                </TouchableOpacity>
            )
        }
    }

    componentDidMount() {
        
        //AsyncStorage.removeItem('love')
         this.checkAsyn()
        // this.props.getRentlist()
        //axios.get('http://localhost:5000/api/v1/categories').then(result=>console.log(result)).catch(r=>console.log(r))   
    }


    render() {
        const love = this.state.love
        console.log(love)
        const rentlist = this.props.rentlist.data
        if (this.props.rentlist.isLoading == true) {
            return (
                <Spinner />
            )
        } else {
            return (
                <ScrollView>
                    {rentlist.map((item, index) => (

                        <View style={{ flex: 1, marginTop: 10 }} key={index}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('ViewDetail',{back:'PopularCity'})
                                this.props.getRentListById(item.rentlists.id)
                            }}>
                                <View style={{ borderWidth: 2, borderColor: 'white' }}>
                                    <ImageBackground
                                        style={{ height: 150 }}
                                        source={{ uri: item.image }} >
                                        {this.cekLove(item.rentlists.id)}
                                        {/* <TouchableOpacity style={styles.containerHeart} onPress={() => { this.minLove(item.rentlists.id) }}>
                                                    <Icon size={30} style={styles.heart} name='heart' />
                                                </TouchableOpacity> */}
                                    </ImageBackground>
                                </View>
                                <View><Text style={styles.gender}>{item.rentlists.rentname}</Text></View>
                                <View><Text style={styles.price} >Rp. {item.rentlists.price}</Text></View>
                                <View><Text>{item.rentlists.rentaddress}</Text></View>
                                <View><Button rounded success style={styles.button}><Text>Bisa Booking</Text></Button></View>
                            </TouchableOpacity>
                        </View>
                    ))}

                </ScrollView>
            )
        }
    }
}


const mapStateToProps = state => {
    return {
        rentlist: state.rentlist
    }
}

const mapStateToDispatch = dispatch => {
    return {
        getRentListById: (id) => dispatch(rentlist.get_rent_list_by_id(id))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(withNavigation(ListKost))
const styles = StyleSheet.create({
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
        color: 'white'
    }
})