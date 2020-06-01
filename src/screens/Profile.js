import React from 'react';
import {Container, Header, Content, Button, Text} from 'native-base';
import {View} from 'react-native';

import styles from '../styles/Profile';

const Profile = ({navigation}) => {
  return (
    <Container style={styles.containerProfile}>
      <Header style={styles.headerProfile} />
      <Content>
        <View style={styles.viewProfile}>
          <Text style={styles.textProfile}>Halaman Profile</Text>
        </View>
        <Button onPress={() => navigation.navigate('Home')} dark>
          <Text style={styles.textProfile}>Go To Home</Text>
        </Button>
      </Content>
    </Container>
  );
};

// const styles = StyleSheet.create({
//   textProfile: {
//     fontSize: 40,
//     textAlign: 'center',
//   },
// });

export default Profile;
