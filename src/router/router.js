export default new VueRouter({
    routes:[
        {
            path:'/',
            component:()=> import(
                '../components/AdvancedUse/mixin'
            )
        },
        {
            path:'/event',
            component:()=> import(
                '../components/ComponentsDemo/event'
            )
        },
    ]
})