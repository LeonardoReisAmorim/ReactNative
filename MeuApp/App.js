import React, {Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textofrase: '',
      img: require('./src/biscoito.png')
    };
    this.quebrabiscoito = this.quebrabiscoito.bind(this);
    this.frases = [
      'Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.',
      'A vida é um caos aleatório,ordenada pelo tempo.',
      'A verdade, é que dói lembrar dela.',
      'O aleatório não existe, nosso cérebro sempre toma decisões mesmo que ocultas.',
      'Um ato aleatório de bondade, por menor que seja, pode ter um tremendo impacto na vida de outra pessoa.',
      'Faça a pessoa que você gosta se sentir especial ao invés de só mais uma.',
      'não deveríamos temer a morte, mais sim a vida.'
    ];
  }

  quebrabiscoito(){
    let naleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textofrase: this.frases[naleatorio],
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.img} source={this.state.img} />    
        <Text style={styles.texto}>{this.state.textofrase}</Text>  
        <TouchableOpacity style={styles.botao} onPress={this.quebrabiscoito}>
          <View style={styles.btnarea}>
            <Text style={styles.btntexto}>Quebrar biscoito</Text>  
          </View>  
        </TouchableOpacity>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250
  },
  texto:{
    fontSize:20,
    color: 'red',
    margin: 30,
    textAlign:'center'
  },
  botao:{
    width:230,
    height:50,
    borderColor:'red',
    borderWidth:2,
    borderRadius: 25
  },
  btnarea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  btntexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
  }
});


export default App;  