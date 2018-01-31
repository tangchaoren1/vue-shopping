<template>
   <div>
       <div class='header' v-on:click='move'>
          <ul class="box">
              <li v-for='item in items' :class="{down:item.isdown,up:!item.isdown}">
                  {{item.text}}
              </li>
          </ul>
       </div>
   </div>
</template>

<script>
export default {
  data(){
      return {
          items:
          [
            {text:1,isdown:false},
            {text:2,isdown:false},
            {text:3,isdown:false},
            {text:4,isdown:false}, 
            {text:5,isdown:false},
            {text:6,isdown:false}, 
            {text:7,isdown:false},
            {text:8,isdown:false}, 
            {text:9,isdown:false},
            {text:10,isdown:false}   
          ],
          timer:null,
          isClicked:true
      }
  },
  methods:{
     move(){
         if(this.isClicked){
            this.isClicked  = false;
            let index = 0;
            this.timer = setInterval(()=>{             
                if(index>this.items.length-1){
                    clearInterval(this.timer);
                    this.isClicked = true;
                }else{
                    this.items[index].isdown = !this.items[index].isdown;
                    index++;
                }
            },1000)
         }
     } 
  }
}
</script>
<style lang="scss" scoped>
    .header{
        width: 900px;
        height: 600px;
        background: #d69213;
    }
    .box{
        list-style: none;
        display: flex;
        padding: 0;
    }
    .box li{
        height: 100px;
        width: 90px;
        margin-left: 3px;
        background: yellowgreen;
        box-shadow: 0 2px 2px rgba(0,0,0,.5);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .down{
       animation: down 2s;
       animation-fill-mode: forwards;
    }
    .up{
        animation: up 2s;
        animation-fill-mode: forwards;
    }
    @keyframes down {
        from{
            top:0
        }
        to{
            top:500px;
        }
    }

    @keyframes up {
        from {
            top: 500px;
        }
        to{
            top: 0;
        }
    }
    
</style>


