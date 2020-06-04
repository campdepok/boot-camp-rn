import React, {useEffect} from 'react';
import {Container, Header, Content, Button} from 'native-base';
import {View, Text} from 'react-native';
import Axios from 'axios';

import styles from '../styles/Profile';

const Profile = ({navigation}) => {
  useEffect(() => {
    //componentDidMount & componentDidUpdate
    Axios.get('http://192.168.100.10:8080/')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <Container style={styles.containerProfile}>
      <Header style={styles.headerProfile} />
      <Content>
        <View style={styles.viewProfile}>
          <Text style={styles.textProfile}>Halaman Profile</Text>
        </View>
        <Button onPress={() => navigation.navigate('List')} dark>
          <Text style={styles.textProfile}>Go To List</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Profile;
