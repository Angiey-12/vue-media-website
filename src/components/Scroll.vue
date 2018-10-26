<template>
<div>
  <vue-swimlane 
    :words="wordsArray" 
    :circular="circular" 
    
    :scale="scale" 
    :transitionDuration="duration" 
    :transitionDelay="delay" 
    :transition="transition" 
    :pauseOnHover="true">
    </vue-swimlane>
</div>    

</template>
<script>
export default {
  data(){
    return{
      wordsArray:['wo','shi','sha','bi'],
      circular: true,
      
      scale:'16px',
      duration:'500',
      delay:'250',
      transition:' ease-out'
    }
  }
}
</script>








