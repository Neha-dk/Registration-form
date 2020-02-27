new Vue({
    el: ".root",
    data:{
        fn:"",
        ln:"",
        email:"",
        pwd:"",
        country:"",
        gender:"",
        state:"",
        Hobbies:[]
    },
    methods:
    {
        fullname(){
            return this.fn+" "+this.ln;
        },
        mailValidation()
        {
            var id = this.email;
            if (id.search("@gmail.com") == -1)
            alert("Enter Valid Mail ID");
        }
    }
})