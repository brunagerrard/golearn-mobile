import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import gerrard from '../../assets/images/teachers/gerrard.png';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={gerrard}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Stevie G</Text>
          <Text style={styles.subject}>Leadership</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Expert in carrying the world on your shoulders. Very familiar with the sensation of accountability to an entire city's worth of hopes and dreams. Former students include Winner of Everything, Jordan Henderson.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          £/hour: {'   '}
          <Text style={styles.priceValue}>1.500</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}

            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Contact me</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;