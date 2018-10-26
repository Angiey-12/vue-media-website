<template>
<div class="container">
    <slot>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-lg-12">
            <h5 style="text-align:left">All types organizations and professionals use Nauticus 
                
                    
            </h5>
            </div>
            <hr>
            <div class="col-xs-6 col-sm-6 col-lg-6 info">
                <ul>
                    <li>
                        <div class="icon">
                            <i class="fab fa-blogger"></i>
                        </div>
                        <h5>Bloggers</h5>
                        <p></p>
                    </li>
                    
                    <li>
                        <div class="icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <h5>Marketers</h5>
                        <p></p>
                        </li>
                    
                    
                </ul>
            </div>
            <div class="col-xs-6 col-sm-6 col-lg-6 info">
                <ul>
                    <li>
                        <div class="icon">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        <h5>Small Business Owners</h5>
                        <p></p>
                    </li>
                    <li>
                        <div class="icon">
                            <i class="fas fa-brain"></i>
                        </div>
                        <h5>Digital Content Specailists</h5>
                        <p></p>
                    </li>
                    
                </ul>

            </div>
            
            <!--
            <div class="start-btn">
            <hr>
            <div class="col-xs-8 col-sm-8 col-lg-8" style="margin-top:15px">
            <p>Ready to Get Started now?</p>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4" style="text-align:right; margin-top:8px">
            <button class="btn btn-primary">Start now</button>
            </div>

            </div>
                -->

        </div>
    </slot>
</div>
</template>
<script>
export default {

}
</script>
<style scoped>

hr {
    width: 100%;
    border-top: 1px dashed black; 
} 



.row{    
    color: black;   
    width: 100%;
}

.start-btn {
    height: 50px;
    width: 100%;
    position: absolute;
    bottom:0px;
    padding:0px;
    margin:0px
}
h5{
    font-size:22px;
    margin: 20px 0px;
    text-align: center;
}
ul li{
    list-style: none;
    font-size: 20px
}
li i{

    font-size:50px;
    color:rgba(56, 94, 218, 0.849)
}
li p{
    font-size:16px;
    text-align: justify;
    margin-bottom: 50px;
}
.icon{
    text-align: center;
}
li{
    margin:20px 0 0 0;
}



ul li{
    list-style: none;
    font-size: 20px
}
li{

    margin-top:10px
}
</style>