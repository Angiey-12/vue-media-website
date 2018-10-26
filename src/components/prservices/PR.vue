<template>
<div class="PR-page">
    
    <div class="animate-page" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
    <h1>Press Release Services</h1>
    </div>
    <div class="animate-page-2" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="5000">
    <p>Give your message the most visibility per dollar with Nauticus</p>
    </div>
    

<div class="container">
    <div class="row">
        <div class="col-xs-3 col-sm-3 col-lg-3" style="padding-left:0;">
            <button @click="selectedComponent = 'appWhatCanIsend'" class="btn-4">What Can I send</button>
            </div>  
        <div class="col-xs-3 col-sm-3 col-lg-3">
            <button @click="selectedComponent = 'appWhereWillItBeSeen'" class="btn-4">Where Will It Be Seen</button>
            </div>  
        <div class="col-xs-3 col-sm-3 col-lg-3">
            <button @click="selectedComponent = 'appWhoElseUseNauticus'" class="btn-4">Who Else Use Nauticus</button>
            </div>  

        <div class="col-xs-3 col-sm-3 col-lg-3" style="padding-right:30px">
            <button @click="selectedComponent = 'appPricePlan'" class="btn-4">Price Plan</button>
            </div>  
    </div>
</div>

    <hr>
    <component :is="selectedComponent"></component>
    <hr>
    <div class="container">
        <div class="row">
            <div class="col-xs-8 col-sm-8 col-lg-8">
                <p style="font-size:18px">Ready to distribute a Press Release now?</p>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4" style="text-align:right">
                <router-link to="/submit" tag="button" class="btn-3">Start Now</router-link>               
            </div>
        </div>
    </div>
    
    
</div>

</template>
<script>
import WhatCanIsend from './step/WhatCanIsend.vue';
import WhereWillItBeSeen from './step/WhereWillItBeSeen.vue';
import WhoElseUseNauticus from './step/WhoElseUseNauticus.vue';
import PricePlan from './step/PricePlan.vue';
import Submit from './step/Submit.vue';


import {aos} from '../../js/aos.js';

export default {
    
     data:function (){
            return {
                selectedComponent:'appWhatCanIsend'
            }
        },
    components:{
        appWhatCanIsend: WhatCanIsend,
        appWhereWillItBeSeen: WhereWillItBeSeen,
        appWhoElseUseNauticus: WhoElseUseNauticus,
        appPricePlan:PricePlan,
        appSubmit:Submit,
    }
}
</script>

<style>
.btn-3{
    background-color: rgba(56, 94, 218, 0.849);
    color: white;
    font-size: 18px;
    border-radius: 40px;
    width: 50%;
    height:40px;
    box-shadow: 0 7px 16px 0 rgba(0,0,0,.2);
    cursor: pointer;
    outline:none;
}
.btn-3:hover{
    filter: brightness(110%);
    box-shadow: none;
}

.btn-4{
    background-color: rgba(56, 94, 218, 0.849);
    color: white;
    font-size: 18px;
    border-radius: 40px;
    width: 100%;
    height:50px;
    box-shadow: 0 7px 16px 0 rgba(0,0,0,.2);
    cursor: pointer;
    outline:none;
}
.btn-4:hover{
    filter: brightness(110%);
    box-shadow: none;
}
.animate-page{
    width: 100%;
    height:100px;
    color: black;
    text-align: center;
    margin-top:200px;
}
.animate-page-2{
    width: 100%;
    margin-top:50px;
    height: 200px;
    color: black;;
    text-align: center;
   
}
</style>

