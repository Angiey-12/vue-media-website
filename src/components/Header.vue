<template>
        <div class="navbar navbar-default" role="navigation">
                <div class="navbar-header">
                <router-link to="/" class="navbar-brand">NAUTICUS MEDIA</router-link>
                </div>
          
                <div class="collapse navbar-collapse navbar-responsive-collapse navbar-right" style="margin-right: 0; ">
                        <ul class="nav navbar-nav">
                            <li class="dropdown underline"><a href="##" class="dropdown-toggle" data-toggle="dropdown">PR Services<b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                        <router-link to="/press-release-brief" tag="li"><a>Press Release Services</a></router-link>
                                        <router-link to="/latest-presse-release" tag="li"><a>Latest Press Release</a></router-link>
                                        
                                </ul>
                            </li>
                            <li class="dropdown underline"><a href="##" class="dropdown-toggle" data-toggle="dropdown">Industry<b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                         <router-link to="/icos" tag="li"><a>ICOs</a></router-link>
                                        <router-link to="/events" tag="li"><a>Events</a></router-link>
                                            
                                </ul> 
                            </li>
                            
                            <li class="dropdown underline"><a href="##" class="dropdown-toggle" data-toggle="dropdown">News<b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <router-link to="/top-stories" tag="li"><a>Top Stories</a></router-link>
                                    <router-link to="" tag="li"><a>Latest News</a></router-link>
                                    <router-link to="/bitcoins" tag="li"><a>Bitcoins</a></router-link>
                                    <router-link to="/" tag="li"><a>Altcoins</a></router-link>
                                    <router-link to="/" tag="li"><a>Technology</a></router-link>
                                </ul>
                            </li>
                            
                            <li class="dropdown underline"><a href="##" class="dropdown-toggle" data-toggle="dropdown">Suppot<b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                        <li><a href="#">CONTACT US</a></li>
                                            
                                </ul> 
                            </li>
                            <form class="navbar-form navbar-left" role="search">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Search">
                            </div>
                            
                        </form>  
                            
                        </ul>
                </div>
        </div>


</template>
<script>
export default {
    
}
</script>
<style scoped>

.navbar{
    margin-bottom: 0;
    background-color: white;
    border-radius: 0px;
    
}
.dropdown-menu{
      
    overflow: visible;
}

.dropdown:hover .dropdown-menu {
    
    display: block;
    
}

.underline > a {
    position: relative;
    
    text-decoration: none;
  }
  
.underline > a:hover {
    color: blue;
    
  }

.underline > a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: blue;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.5s ease-in-out 0s;
    transition: all 0.5s ease-in-out 0s;
  }

.underline > a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }


</style>


