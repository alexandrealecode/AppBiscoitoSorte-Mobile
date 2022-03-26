import React, { Component } from  'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image,
  TouchableOpacity,
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };


    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];

  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text> 

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dd7b22', 
  }
});

export default App;






//=======Trabalhando com botões=====================================

/*
import React, { Component } from  'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if(this.state.input === '' ||this.state.input === undefined) {
      alert('Digite seu nome!');
      return;
    }
    this.setState({nome: 'Bem-vindo: ' + this.state.input});
  }

  render() {
    return(
      <View style={styles.container}>

        <TextInput 
          style={styles.input}
          placeholder="Digite seu nome?"
          underlineColorAndroid="transparent"
          onChangeText={ (texto) => this.setState({input: texto}) }
        />

        <Button  title='Entrar' onPress={this.entrar}/>

        <Text style={styles.texto}>{this.state.nome}</Text>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    marginTop: 40,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  },
});

export default App;







//======= Praticando Flex e Alinhamentos=====================================


import React, { Component } from  'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return(
      <View style={{flex: 1, 
                    flexDirection: 'row', 
                    justifyContent: 'space-around', 
                    alignItems: 'center'
                    }}>

        <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>

        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
 
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View> 

    </View>
    );
  }
}

export default App;




//====== Tamanhos Dinâmicos e fixos=========================================


import React, { Component } from  'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return(
      <View style={{flex: 1, backgroundColor: '#222'}}>

        <View style={{height: 65, backgroundColor: '#3fb3'}}></View>

        <View style={{flex: 1, backgroundColor: 'white'}}></View>

        <View style={{height: 65, backgroundColor: '#3fb3'}}></View> 

    </View>
    );
  }
}

export default App;






//======Aplicando grupos de estilo=============================================


import React, { Component } from  'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {

  render() {
    return(
      <View style={styles.container}>
  
        <Text style={[styles.alinhaTexto, styles.textPrincipal]}>Eu sou texto 1</Text>
        <Text style={styles.alinhaTexto}>Eu sou texto 2</Text>
        <Text>Eu sou texto 3</Text>
        <Text>Eu sou texto 4</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  textPrincipal: {
    fontSize: 25,
    color: 'red'
  },
  alinhaTexto: {
    textAlign: 'center'
  }

});


export default App;





//=======Entendendo Props=========================================

import React, { Component } from  'react';
import { View, Text, Button } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(nome) {
    this.setState({
      nome: nome
    })
  }

  render() {
    return(
      <View style={{ marginTop: 20 }}>

        <Button  title='Entrar' onPress={ () => this.entrar('Algum texto')} />

        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }}> 
          {this.state.nome} 
        </Text>
      </View>
    );
  }
}


export default App;*/
