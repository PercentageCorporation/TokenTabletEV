<template>
    <div id="app">
      <h1>App.vue</h1>
      {{ message }}
      <br />
      <!--
      <img src="./assets/TTCoin.png"/>
      <router-view/>
      -->
      <div>
        <hello-world></hello-world>
      </div>
      <div>
        <portfolio-grid 
          resourceURL="myurl" 
          title="Portfolio:  MyPortfolio" 
          :columns="Pcolumns">
        </portfolio-grid>
      </div>
      <hr />
      <div>
        <currency-grid 
          resourceURL="myurl" 
          title="Currency" 
          :columns="CcolumnC">
        </currency-grid>
      </div>
    </div>
</template>

<script>
import PortfolioGrid from './components/NewGrid.vue'
import CurrencyGrid from './components/NewGrid.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: { HelloWorld, PortfolioGrid, CurrencyGrid },
  data () {
    return {
      message: 'Hello from App.vue',
      resourceURL: 'https://randomuser.me/api',
      Pcolumns: [
        {name: 'title', label: 'Title', field: 'name.title', width: '100', type: 'text', isMandatory: true},
        {name: 'firstName', label: 'First Name', field: 'name.first', width: '200', type: 'text', isMandatory: true},
        {name: 'lastName', label: 'Last Name', field: 'name.last', width: '200', type: 'text', isMandatory: true},
        {name: 'dataOfBirth', label: 'Date of Birth', field: 'dob', type: 'date', width: '200', format: 'yyyy-MM-dd'}
      ],
      Ccolumns: [
        {name: 'title', label: 'Title', field: 'name.title', width: '100', type: 'text', isMandatory: true},
        {name: 'firstName', label: 'First Name', field: 'name.first', width: '200', type: 'text', isMandatory: true},
        {name: 'lastName', label: 'Last Name', field: 'name.last', width: '200', type: 'text', isMandatory: true},
        {name: 'dataOfBirth', label: 'Date of Birth', field: 'dob', type: 'date', width: '200', format: 'yyyy-MM-dd'}
      ]
     
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
