import React, { useState } from 'react'
import Background from '../components/Background'
import TextInput from '../components/TextInput'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'
import spaceQuestions from '../data/space'
import Title from '../components/Title'
import CardView from 'react-native-cardview'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import questions from '../data/space'
import { codeValidator } from '../helpers/codeValidator'




export default function Story({ navigation }) {
  const [code, setCode] = useState({ value: '', error: '' })
  const onCodePressed = () => {
  const codeError = codeValidator(code.value)
    if (codeError) {
      setCode({ ...code, error: codeError })
      return
    }
    navigation.navigate("Quiz", {
      title: "高血壓",
      questions: spaceQuestions,
      color: "#36b1f0"
    })
   }



    return (
      <Background>
      <BackButton goBack={navigation.goBack} />
      <Title>失憶症</Title>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Card>
              {/*react-native-elements Card*/}
              <Paragraph style={styles.paragraph}>
              徒弟追隨著神醫的腳步來到天空第一個村落，發現這個城鎮的老年人口比例非高。此時，迎面走來了一個光著腳丫亂逛的婆婆。{"\n"}
              {"\n"}
              徒弟：「婆婆，您怎麼沒穿鞋子？{"\n"}
              婆婆：「你說甚麼，我聽不懂？」{"\n"}
              徒弟：「您迷路了嗎？」{"\n"}
              婆婆：「我不知道我住在哪裡！」{"\n"}{"\n"}
              徒弟詢問了其他的村民，好不容易才幫婆婆找到家的路。
              </Paragraph>
            </Card>
          </View>
        </SafeAreaView>

        <TextInput
        label="驗證碼"
        returnKeyType="next"
        value={code.value}
        onChangeText={(text) => setCode({ value: text, error: '' })}
        error={!!code.error}
        errorText={code.error}
        autoCapitalize="none"
        keyboardType="numeric"
      />

        <Button 
        mode="contained" 
        style={styles.button}
        onPress={onCodePressed}
        >
        開始挑戰
        </Button>
        
      </Background>
    );
}
     
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 0,
      opacity: 0.8,
    },
    paragraph: {
      marginHorizontal: 16,
      marginVertical: 72,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'left',
      color: '#000',
    },
    button: {
      marginBottom:64
    },
  });