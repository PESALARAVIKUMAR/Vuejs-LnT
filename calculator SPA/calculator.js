var vueObj = new Vue({
    el:"#dv",
    data:{
        current: '',
        previous: '',
        operator: '',
        textStyle1:{
            background:'white',
            height:'100px',
            width:'100px',
            color:'black',
            padding: '0px',
            margin: '0px'
        },
        textStyle2:{
            background:'grey',
            height:'100px',
            width:'100px',
            color:'black',
            padding: '0px',
            margin: '0px'
        },
        textStyle3:{
            background:'white',
            height:'150px',
            width:'500px',
            color:'black',
            padding: '0px',
            margin: '0px'
        }
    },
    methods:{
        PercentageFunction: function(){
           this.current = `${parseFloat(this.current)/100}` ;
        },
        cEfunction: function(){
            this.current = '';
        },
        cFunction: function(){
            this.current = '';
        },
        clearFunction: function(){
            this.current = '';
        },
        divisionFunction: function(){
            this.previous = this.current;
            this.current = '';
            this.operator = '/';
        },
        sqrtFunction: function(){

        },
        sevenFunction: function(){
            this.current = `${this.current}${'7'}` ;
        },
        eightFunction: function(){
            this.current = `${this.current}${'8'}` ;
        },
        nineFunction: function(){
            this.current = `${this.current}${'9'}` ;
        },
        multiplyFunction: function(){
            this.previous = this.current;
            this.current = '';
            this.operator = '*';
        },
        squareFunction: function(){

        },
        fourFunction: function(){
            this.current = `${this.current}${'4'}` ;
        },
        fiveFunction: function(){
            this.current = `${this.current}${'5'}` ;
        },
        sixFunction: function(){
            this.current = `${this.current}${'6'}` ;
        },
        substractionFunction: function(){
            this.previous = this.current;
            this.current = '';
            this.operator = '-';
        },
        cubeFunction: function(){

        },
        oneFunctionn: function(){
            this.current = `${this.current}${'1'}` ;
        },
        twoFunction: function(){
            this.current = `${this.current}${'2'}` ;
        },
        threeFunction: function(){
            this.current = `${this.current}${'3'}` ;
        },
        addFunction: function(){
            this.previous = this.current;
            this.current = '';
            this.operator = '+';
        },
        reciprocalFunction: function(){

        },
        negateFunction: function(){
            this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}` ;
        },
        zeroFunction: function(){
            this.current = `${this.current}${'0'}` ;
        },
        dotFunction: function(){
            for(var i=0;i<this.current.length;i++){
                if(this.current[i] != '.'){
                    this.current = `${this.current}${'.'}` ;
                }
            }
        },
        equalFunction: function(){
            if(this.operator == '*'){
                this.current = this.previous * this.current;
            }
            if(this.operator == '/'){
                this.current = `${parseFloat(this.previous)}` / `${parseFloat(this.current)}`;
            }
            if(this.operator == '+'){
                this.current = `${parseFloat(this.previous) + parseFloat(this.current)}`;
            }
            if(this.operator == '-'){
                this.current = this.previous - this.current;
            }
        },
    }
});