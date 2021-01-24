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
<select class="form-control" v-model="selected">
    <option v-bind:value="operators" v-for="operator in operators" :key="operator.id">{{ operator.name }}</option>
  </select>
</div>

<div class="col-md-4 select-option">
    <label for="status">STATUS</label>

 <select class="form-control" v-model="selected"  >
    <option>Ativos</option>
    <option>Inativos</option>
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
                <button class="rounded-button cancel-button" @click="saveData(operator)">X</button>

              </div>
                            
            </td>
            <td>
            
              <div class="save">
                <input type="text" />
              </div>
            </td>
            <td>
              
              <div class="save">
                <input type="text" />
              </div>
            </td>

   </tr>
  
            

   
          <tr  v-for="operator in operators" :key="operator.id" :class="{editing: operator == editedOperator}" v-cloak>
            
            <!-- <td>
              <input type="checkbox" name="myTextEditBox">
            </td> -->
            <td>
              <div class="edit">
                <button class="rounded-button ok-button" @click="saveData(operator)">ok</button>
                <button class="rounded-button cancel-button" @click="saveData(operator)">X</button>

              </div>
              <div class="view" >
                <button class="rounded-button edit-button" @click="editData(operator)">
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
            
            <!-- <td><button>delete</button></td> -->
          </tr>
        </tbody>
      </table>


     

   </div>
  </div>
</template>

<script>
import Operator from '@/services/operators'

//import store from '@/store'

// let token = store.state.token

export default {
  name: 'dashboard',

data() {  
   return {
    isVisibleAddForm: false, 
    operators: [],
    editMode: false,
    editedOperator: null
  }
},

computed: {
   
  },

  mounted() {
    Operator.list().then(res => {
      this.operators = res.data
    })
    console.log(this.isVisibleAddForm)
  },

    methods: {

    selectState(){
      alert('opa, você mudou!')
    },  
    saveOperator () {      
      Operator.save(this.operator).then(res => {
        console.log(res.data)
        alert('salvo com sucesso!')
      })
    },
    editData (operator) {
      this.beforEditCache = operator
      this.editedOperator = operator
    }
  }


  
}
</script>


<style scoped>

@import '../assets/slider.css';

@import '../assets/buttons.css';

[v-cloak] {
    display: none;
    }
    .edit {
      display: none;
    }
    .editing .edit {
      display: block
    }
    .editing .view {
      display: none;
      background: #d0f6f9;
    }
    .save .view {

      display: none;
    }

    h3{
      font-size: 1.3rem;
    }

#main-table{
      padding: 55px 15px;      
      background: #ffffff;
      border: 3px solid #d3d2d2;
      border-radius: 5px;
    }


    table {
      font-size: 0.9rem;
    }
  
.header{
  margin: 10px;
}

.select-option label{
  
  background: #ffffff;
  color:  #333333;
  font-weight: bold;
  font-size: 0.8rem;
  margin-left: 8px;
}

.select-option select{
  margin-top: -20px;
}
div.edit{
  padding: 10px;
  background: transparent;
}

div.edit input{
  background: transparent;
  border: none;
}
div.edit input:active, div.edit input:focus {
 background: transparent;
 outline: none;
 border: 1px solid #888888;
 border-radius: 6px;
  
}
tr.editing {
  background: #d0f6f9;
}
</style>