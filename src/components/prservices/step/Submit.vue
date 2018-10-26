<template>
    <div>
        
        <div class="container">
            
            <form>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-lg-6">
                        <div class="form-group">
                            <label for="First name">First name</label>
                            <input 
                                type="text"
                                v-model="user.firstname"
                                class="form-control"
                                >
                            </div>

                    </div>
                    <div class="col-xs-12 col-sm-6 col-lg-6">
                        <div class="form-group">
                            <label for="Last name">Last name</label>
                            <input
                                type="text"
                                v-model="user.lastname"
                                class="form-control">
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-lg-6">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input 
                                type="text"
                                v-model="user.email"
                                class="form-control"
                                >
                            </div>

                    </div>
                    <div class="col-xs-12 col-sm-6 col-lg-6">
                        <div class="form-group">
                            <label for="Company name">Company name</label>
                            <input
                                type="text"
                                v-model="user.company"
                                class="form-control">
                        </div>
                    </div>
                </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-lg-12">
                            <div class="form-group">
                                <label for="Titile">Title</label>
                                <input
                                    type="text"
                                    v-model="user.title"
                                    class="form-control">
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-lg-12">
                            <div class="form-group">
                                <label for="Tips">Tips</label>
                                <textarea 
                                    class="form-control" 
                                    v-model="user.tips" 
                                    rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-lg-12">
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-lg-12">
                            <button @click="submit">Submit</button>
                        </div>
                    </div>
                </form>    
        
        
        
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            
            user: { 
                firstname:'',
                lastname:'',
                email:'',
                company:'',
                title:'',
                tips:'',
                }
               
            
            

        };
    },
    methods:{
        submit(){
              this.$http.post('',this.user)
                 .then(reponse => {
                     console.log(reponse);
                 }, error => {
                     console.log(error);
              });
                
                         console.log(this.user);
                       
        }
    }
}
</script>
<style scoped>

</style>

