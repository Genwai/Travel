<template>
  <div class="page">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities"
    :hotCities="hotCities"
    :letter="letters"
    ></city-list>
    <city-alphabet :cities="cities" 
    @letter="getLetter"></city-alphabet>

  </div>
</template>

<script type="text/ecmascript-6">
import cityHeader from '../city/components/header'
import citySearch from '../city/components/search'
import cityList from '../city/components/list'
import cityAlphabet from '../city/components/Alphabet'
import axios from 'axios'
export default {
  data() {
    return {
      cities:{},
      hotCities:[],
      letters:'',
    }
  },
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  methods: {
   getLetter(letter){
     this.letters = letter
    //  console.log('letters', this.letters)
   }
  },
  mounted(){
    axios.get('api/city.json')
    .then((res)=>{
    
      let data = res.data;
      let datas;
      if (data.ret) {
        datas = data.data;
        this.cities = datas.cities;
        this.hotCities = datas.hotCities;
      }
      
    })

  }
}
</script>

<style scoped lang="stylus">
</style>
