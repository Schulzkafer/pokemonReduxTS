import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RootState, Pokemon } from "../../types";
import * as pokemonActions from '../actions/actions';

import ButtonComponent from '../components/ButtonComponent';

interface IPageIndividual {
   pokemon: Pokemon;
   actions: any
}

const PageIndividual: React.FC<IPageIndividual> = ({
   pokemon, actions
}) => {

   return (
      <>
         <ButtonComponent
            execFunction={() => actions.setPokemon(null)}
         >Return to main page
         </ButtonComponent>
         <View
            style={styles.container}>

            <Text
               style={styles.text}
            >Name: {pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}
            </Text>

            <Text
               style={styles.text}
            >Weight: {pokemon.weight}
            </Text>

            <Text
               style={styles.text}
            >Base experience: {pokemon.base_experience}
            </Text>

            {
               pokemon.abilities.map((ab: any, i: number) =>
                  <Text
                     key={Math.random()}
                     style={styles.text}
                  >Ability {i + 1}:  {ab.ability.name}
                  </Text>)
            }

            <Image
               style={styles.logo}
               source={{
                  uri: `${pokemon.sprites.other.home.front_default}`,
               }}
            />
         </View>
      </>
   )
}

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
   },
   text: {
      marginBottom: 6,
      fontSize: 20,
      fontWeight: "bold",
      color: "rgb(12, 3, 38)",
   },
   logo: {
      width: 250,
      height: 260,
      marginTop: 20,
   },
});

const mapStateToProps = (state: RootState) => ({
   pokemon: state.pokemon,
});

const ActionCreators = Object.assign(
   {},
   pokemonActions,
);
const mapDispatchToProps = (dispatch: any) => ({
   actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageIndividual)


