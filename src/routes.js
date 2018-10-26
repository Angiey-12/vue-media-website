import Home from './components/Home.vue'
import LatestPressRelease from './components/prservices/LatestPressRelease.vue';
import PressReleaseBrief from './components/prservices/PressReleaseBrief.vue';
import PR from './components/prservices/PR.vue';
import Bitcoins from './components/news/Bitcoins.vue';
import TopStories from './components/news/TopStories.vue';
import Icos from './components/news/Icos.vue'
import Submit from './components/prservices/step/Submit.vue'
import Bitcoin from './components/news/bitcoins/Bitcoin.vue'
import Bitcoin_1 from './components/news/bitcoins/Bitcoin_1.vue'
import Events from './components/news/Events.vue'
import Newspage from './components/article/Newspage.vue'







export const routes = [ 
    {path: '/', component: Home},
    {path: '/latest-presse-release', component: LatestPressRelease},
    {path: '/press-release-brief', component: PressReleaseBrief, children: [
        {path: '', component: PR},
        {path: '/submit', name:'submit', component: Submit},
    ]},
    {path: '/bitcoins', component: Bitcoins, children:[
        {path:'', component:Bitcoin},
        {path:'/newspage',component:Newspage}
        
    ]},
    {path: '/top-stories', component: TopStories},
    {path: '/icos', component: Icos}, 
    {path: '/events', component: Events}, 


]