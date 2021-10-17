import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { StyleSheet,Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Text style={styles.name}>Ｈi, 立才！目前您的積分為：</Text>
      <Text style={styles.score}>1,260</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('QuizIndex')}
      >
        選擇題
      </Button>
      <Button
        mode="contained"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        問答題
      </Button>
      <Button
        mode="contained"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        查看獎牌
      </Button>
      <Button
        mode="contained"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        登出
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontWeight:'bold',
    position: 'absolute',
    top: 48 + getStatusBarHeight(),
  },
  score:{
    color:'#144385',
    fontSize: 48,
    fontWeight:'bold',
    position: 'absolute',
    top: 96 + getStatusBarHeight(),
  },
})
