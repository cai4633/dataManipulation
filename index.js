// import Vue from 'vue';
var app1=new Vue({
	el:'#app1',
	data:{
		name:'',
		age:'',
		des:'',
		item:{
			name:'姓名：',
			age:'年龄：',
			des:'简介：'
		}
	},
	methods:{
		clearIfo:function(){
			this.name='';	
			this.age='';
			this.des='';
		}
	}
});

