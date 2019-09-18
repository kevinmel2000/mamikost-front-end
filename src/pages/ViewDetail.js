import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import Spinner from './Spinner'


class ViewDetail extends Component {
    
    render() {
        const rent = this.props.rent.data[0]
        console.log(rent)
        if (this.props.rent.isLoading == true) {
            return (
                <Spinner />
            )
        } else {
            return (

                <View style={styles.container} >
                   
                    <ScrollView style={{ flex: 1 }}>

                        <View style={styles.topHeader} >
                            <View style={styles.image}>
                                
                                <ImageBackground style={{ height: '100%' }} source={{ uri: rent.image }} />

                            </View>

                            <View style={styles.menu}>

                                <TouchableOpacity style={styles.case}>
                                    <Ionicons name='ios-analytics' size={35} color='green' style={{ paddingRight: 10 }} />
                                    <Text style={styles.whiteText}>Foto</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.case}>
                                    <Ionicons name='ios-pin' size={35} color='white' style={{ paddingRight: 10 }} />
                                    <Text style={styles.whiteText}>Peta</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.case}>
                                    <Ionicons name='ios-compass' size={35} color='white' style={{ paddingRight: 10 }} />
                                    <Text style={styles.whiteText}>360</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.topContent} >
                                <View style={styles.page1}>
                                    <View><Text style={styles.gender}>{rent.rentlists.rentname}</Text></View>
                                    <View><Text style={styles.description}>{rent.rentlists.rentaddress}</Text></View>
                                    <View><Text style={styles.update} >Update 28 Juli 2019</Text></View>
                                </View>
                                <View style={styles.page2}>
                                    <Ionicons name='ios-star' size={35} color='pink' />
                                </View>
                            </View>
                            <View style={styles.centerContent} >

                                <View style={styles.case}>
                                    <Ionicons name='ios-flash' size={20} color='black' />
                                    <Text>Tidak termasuk listrik</Text>
                                </View>
                                <View style={styles.case}>
                                    <Ionicons name='logo-usd' size={20} color='black' />
                                    <Text>Tidak ada min.bayar</Text>
                                </View>

                            </View>
                            <View style={styles.bottomContent} >
                                <View style={{ flex: 1 }} >
                                    <Text style={{ paddingLeft: 10, fontWeight: 'bold', fontSize: 15 }} >Luas kamar</Text>
                                    <Text style={{ paddingLeft: 10 }}> <Ionicons name='ios-qr-scanner' size={20} color='black' /> 5 X 4</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={styles.case}>
                                        <Text>Fasilitas kost dan kamar</Text>
                                    </View>
                                    <TouchableOpacity style={styles.case}>
                                        <Text style={{ color: 'green' }}>Lihat semua</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </ScrollView>
                    
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PopularCity')}}  style={{position:'absolute'}} >
                        <Ionicons name='md-arrow-back' size={35} color='white' />
                    </TouchableOpacity>   
                    <View style={{ borderWidth: 1, borderColor: '#ddd', flexDirection: 'row', flex: 0.1, alignItems: 'center' }} >
                        <View style={{ flex: 1 }}>
                            <Text style={styles.price} >Rp. {rent.rentlists.price} / bulan </Text>
                            <TouchableOpacity>
                                <Text style={{ color: 'green', fontSize: 15 }} >Lihat semua harga</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.buttonWhite}>
                                <Text style={{ alignSelf: 'center', color: 'orange' }} >Hubungi Kost</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonOrange}>
                                <Text style={{ alignSelf: 'center', color: 'white' }} >Booking</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        rent: state.viewDetailRentlist
    }
}

export default connect(mapStateToProps)(ViewDetail)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topHeader: {
        flex: 1,
    },
    image: {
        flex: 6,
        height: 250
    },
    menu: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    case: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: 'white'
    },
    content: {
        flex: 1,
    },
    topContent: {
        flex: 3,
        flexDirection: 'row',
        height: 150
    },
    centerContent: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        height: 50
    },
    bottomContent: {
        flex: 2,
        backgroundColor: 'white',
        height: 150
    },
    page1: {
        flex: 4,
        padding: 10
    },
    page2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gender: {
        color: 'pink'
    },
    description: {
        fontWeight: 'bold',
        fontSize: 25
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonWhite: {
        height: 40,
        width: 90,
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'coral',
        marginRight: 2
    },
    buttonOrange: {
        height: 40,
        width: 90,
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'coral',
        backgroundColor: 'coral'
    }
})