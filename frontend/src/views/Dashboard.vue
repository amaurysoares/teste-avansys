<template>
  <div>
  <div style="margin-bottom: 30px;">
<h3>MANTER OPERADORA</h3>
      <hr>
</div>
   <div id="main-table">
      

<div class="row">
 
<div class="col-md-4 select-option">

  <label for="operadoras">LISTAR OPERADORA</label>
<select class="form-control" >
  <option value=""></option>
    <option v-bind:value="operators" v-for="operator in operators" :key="operator.id">{{ operator.name }}</option>
  </select>
</div>

<div class="col-md-4 select-option">
    <label for="status">STATUS</label>

 <select class="form-control" @change="selectStatus" >
     <option value=""></option>

      <option value="1">Ativos</option>
    <option value="0">Inativos</option>
 </select>       
</div>
</div>

<div class="row" style="margin-top: 30px; margin-bottom: 15px;">

   <div class="col-md-2 wrap-add-button">
     <button class="rounded-button add-button" @click="isVisibleAddForm = !isVisibleAddForm"> 
       <span class="material-icons" style="vertical-align: -5px;">add</span><span style="margin-top: -15px;">NOVO</span> </button>
       </div>

</div>

 <table class="table">
        <thead>
          <tr>             
             <th></th>
              <th>Operadora</th>
              <th>Descrição</th>                            
          </tr>
        </thead>    
 <tbody>

   <tr v-show="isVisibleAddForm">    

         <td>
            <div class="save">
              <button class="rounded-button ok-button" @click="saveData(operator)">ok</button>
              <button class="rounded-button destroy-button" @click="isVisibleAddForm = false">X</button>
            </div>                           
         </td>
            <td>            
              <div class="save">
                <input type="text"  v-model="operator.name"/>
              </div>
            </td>
            <td>              
              <div class="save">
                <input type="text" v-model="operator.description"/>
              </div>
            </td>

   </tr>
               
          <tr  v-for="operator in operators" :key="operator.id" :class="{editing: operator == editedOperator}" v-cloak>
            
          <td>
              <div class="edit">
                <button class="rounded-button ok-button" @click="updateData(operator)">ok</button>
                <button class="rounded-button cancel-button" @click="destroyData(operator)">X</button>

              </div>
              <div class="view" >
                <button class="rounded-button edit-button" @click="[ editData(operator), isVisibleAddForm = false ] ">
                  <span class="material-icons">
                  edit
                  </span>
                </button>

                
                <label class="switch">
                <input type="checkbox" :checked="operator.active == 1">
               <span class="slider round"></span>
                 </label>

              </div>
              
            </td>
            <td>
              <div class="view">
                {{operator.name}}
              </div>
              <div class="edit">
                <input type="text" v-model="operator.name"/>
              </div>
            </td>
            <td>
              <div class="view">
                {{operator.description}}
              </div>
              <div class="edit">
                <input type="text" v-model="operator.description"/>
              </div>
            </td>
            
          </tr>
        </tbody>
      </table>

  

   </div>
  </div>
</template>

<script>
import Operator from '@/services/operators'

export default {
  name: 'dashboard',

data() {  
   return {

    operator: {
      id: '',
      name: '',
      description: '',
      active: 1
    
    }, 
    isVisibleAddForm: false, 
    operators: [],
   
    editMode: false,
    editedOperator: null
  }

},
computed: {
},

mounted() {    
    this.list()
   
},

methods: {

    list() {
      Operator.list().then(res => {       
      this.operators = res.data
    })
    },  

    selectStatus(){
    //  let status =  parseInt(event.target.value, 10);   
    //  this.list();
    //  this.operators = this.operators.filter(operator => operator.active === status) 
    //  console.log(this.operators)  
    //  return this.operators;
     
    },  

    saveData (operator) {           
        Operator.save(operator).then(() => {
            this.list()
            this.isVisibleAddForm = false
        }).catch(e => {
          console.log(e.response.data.message)
        })  
    },

    updateData (operator){
      
      Operator.update(operator).then(() =>{
        this.list()

      }).catch(e => {
          console.log(e.response.data.message)
        })  
    },

    destroyData(operator){
      Operator.destroy(operator).then(() => {
        this.list()

      }).catch(e => {
        this.errors = e.response.data.errors
      })

    },
    
    editData(operator) {
      this.beforEditCache = operator
      this.editedOperator = operator
    }
  }  
}
</script>


<style scoped>

@import '../assets/slider.css';

@import '../assets/buttons.css';

@import '../assets/dashboard.css';
</style>