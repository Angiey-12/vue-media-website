<template>
<div>

           <router-view></router-view>
        
    
</div>
</template>

<script>
import bitcoin_1 from './bitcoins/Bitcoin_1'
export default {
    components:{
        appBitcoin_1:bitcoin_1,
    }
}
</script>



<style scoped>
.news-image {
    padding: 0;
    cursor: pointer;
}

.news-image img:hover{
    -webkit-filter: brightness(80%);
    filter: brightness(80%);
    
}

.news-image img{
 width: 100%;
 height: 100%;
 -webkit-filter: brightness(70%);
 filter: brightness(70%);

}
.news-brief{
    position:absolute; 
    z-index:2;
    bottom:80px;
    left:10%;
    width: 300px;
    
   
}
.news-brief a{
    color: white !important;
}

.right img{
    width:100%;
    height: 240px;
    -webkit-filter: brightness(80%);
    filter: brightness(80%);
}
.right img:hover{
    
    -webkit-filter: brightness(90%);
    filter: brightness(90%);
}
.left h3:hover{
    color:rgba(56, 94, 218, 0.849)
}
.news-label{
    
    overflow: hidden;
    height:240px;
    border: 1px solid gray;
    cursor: pointer;
}

.news-label:hover{
    box-shadow: 1px 1px 8px 1px #888888;
    
}
.right{
    padding:0px 0px 0px 10px;
}
.left{
    margin-top: 10%;
}
.eye{
    text-align: right;
    margin-top: 10%;

}

.telegram i{
    padding:10px 40px;
    font-size:50px;
    color:rgba(56, 94, 218, 0.849);
}
.telegram p{
    padding:10px 30px;
}
.ad{
    height:240px;
    width: 100%;
    
    text-align: center;
}
.ad button{
    height: 100%;
    width: 100%;
    background-color:rgb(54, 53, 53);
    color:white;
}
.ad button:hover{
    -webkit-filter: brightness(110%);
    filter: brightness(110%);
}
.bit-latest-news img{
    width: 100%;
    height:300px;
    -webkit-filter: brightness(80%);
    filter: brightness(80%);
    cursor: pointer;
}
.bit-latest-news img:hover{
    width: 100%;
    height:300px;
    -webkit-filter: brightness(90%);
    filter: brightness(90%);
}
.bit-latest-news{
    height: 520px;
    padding:0;
    border-left: 1px solid whitesmoke;
    border-right: 1px solid whitesmoke;
}
.bit-news{
    background:white;
    margin: 20px;
    color: black;
    border-top:1px solid whitesmoke;
    border-bottom:1px solid whitesmoke;
}
.bit-news p{
    padding: 10px 30px;
}
.bit-latest-news h3{
    padding:10px 30px;
    cursor: pointer;

}
.bit-latest-news h3:hover{  
    color: rgba(56, 94, 218, 0.849);
}

</style>
