const small = {
    template:`<div>{{ aa }}</div>`,
    data(){
        return {
            aa : '张三丰'
        }
    },
    mounted(){
        console.log(this.aa)
    }
}




