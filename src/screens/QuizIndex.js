import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import BlueButton from '../components/BlueButton'
import Paragraph from '../components/Paragraph'
import { View } from 'react-native'
import { ScrollView, StatusBar, SafeAreaView, StyleSheet, Text} from "react-native"
import BackButton from '../components/BackButton'
import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";
import { RowItem } from '../components/RowItem'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function QuizIndex({ navigation }) {
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
        <SafeAreaView style={styles.container}>   
        <ScrollView>
        <StatusBar barStyle="dark-content" />
        <RowItem
        name="1.高血脂"
        color="#799496"
        onPress={() => navigation.navigate('Story')}
        />
        <RowItem
        name="2.高血脂"
        color="#799496"
        onPress={() =>
        navigation.navigate('StartScreen', {
        title: "高血脂",
        questions: '問題',
        color: "#799496"
          })
        }
        />
        <RowItem
        name="3.高血脂"
        color="#799496"
        onPress={() =>
        navigation.navigate('StartScreen', {
        title: "高血脂",
        questions: '問題',
        color: "#799496"
          })
        }
        />
        <RowItem
        name="4.高血脂"
        color="#799496"
        onPress={() =>
        navigation.navigate('StartScreen', {
        title: "高血脂",
        questions: '問題',
        color: "#799496"
          })
        }
        />
        <RowItem
        name="5.高血脂"
        color="#799496"
        onPress={() =>
        navigation.navigate('StartScreen', {
        title: "高血脂",
        questions: '問題',
        color: "#799496"
          })
        }
        />
        <RowItem
        name="6.高血脂"
        color="#799496"
        onPress={() =>
        navigation.navigate('StartScreen', {
        title: "高血脂",
        questions: '問題',
        color: "#799496"
          })
        }
        />
        <RowItem
        name="7.高血脂"
        color="#799496"
        onPress={() =>
        navigation.navigate('StartScreen', {
        title: "高血脂",
        questions: '問題',
        color: "#799496"
          })
        }
        />
        <RowItem
        name="8.高血脂"
        color="#799496"
        onPress={() =>
        navigation.navigate('StartScreen', {
        title: "高血脂",
        questions: '問題',
        color: "#799496"
          })
        }
        />
        <RowItem
        name="9.高血脂"
        color="#799496"
        onPress={() =>
        navigation.navigate('StartScreen', {
        title: "高血脂",
        questions: '問題',
        color: "#799496"
          })
        }
        />
        <RowItem
        name="10.高血脂"
        color="#799496"
        onPress={() =>
        navigation.navigate('StartScreen', {
        title: "高血脂",
        questions: '問題',
        color: "#799496"
          })
        }
        />
        <RowItem
        name="高血脂"
        color="#799496"
        onPress={() =>
        navigation.navigate('StartScreen', {
        title: "高血脂",
        questions: '問題',
        color: "#799496"
          })
        }
        />
        <RowItem
        name="高血脂"
        color="#799496"
        onPress={() =>
        navigation.navigate('StartScreen', {
        title: "高血脂",
        questions: '問題',
        color: "#799496"
          })
        }
        />
        
        </ScrollView>
        </SafeAreaView>
    </Background>
  )
}

const styles = StyleSheet.create({
    container: {
        top: 24 + getStatusBarHeight()
    }
  });