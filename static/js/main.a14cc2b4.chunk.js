(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(3),o=c.n(s),i=(c(12),c(13),c(4)),a=c(5),d=c(7),h=c(6),l=c(0),u=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).state={foods:[],searchedFoods:[],currentFood:{name:"-",calories:0,protein:0,carbs:0,fats:0,fibre:0,weight:100}},n}return Object(a.a)(c,[{key:"selectFood",value:function(e){this.setState({currentFood:e})}},{key:"calculateChange",value:function(e){var t=this.state.currentFood;""!==e&&0!==e?(t.calories=Number(t.calories*e/t.weight),t.carbs=Number(t.carbs*e/t.weight),t.protein=Number(t.protein*e/t.weight),t.fats=Number(t.fats*e/t.weight),t.fibre=Number(t.fibre*e/t.weight),t.weight=Number(e),this.setState({currentFood:t})):this.setState({currentFood:t})}},{key:"searchFood",value:function(e){if(""!==e){var t=this.state.foods.filter((function(t,c){return t.name.toLowerCase().includes(e.toLowerCase())}));this.setState({searchedFoods:t})}else this.setState({searchedFoods:[]})}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/foods").then((function(e){return e.json()})).then((function(t){e.setState({foods:t.foods})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"form-group",style:{marginTop:"30px"},children:Object(l.jsx)("input",{className:"form-control",onChange:function(t){e.searchFood(t.target.value)},placeholder:"Search Food"})}),Object(l.jsx)("div",{className:"search-result",children:this.state.searchedFoods.map((function(t,c){return Object(l.jsx)("div",{className:"result",style:{cursor:"pointer",padding:"10px"},onClick:function(){e.selectFood(t)},children:t.name},c)}))}),Object(l.jsx)("div",{className:"product-display",children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Calories"}),Object(l.jsx)("th",{children:"Protein"}),Object(l.jsx)("th",{children:"Carbs"}),Object(l.jsx)("th",{children:"Fibre"}),Object(l.jsx)("th",{children:"Fat"}),Object(l.jsx)("th",{children:"Weight"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:this.state.currentFood.name}),Object(l.jsx)("td",{children:this.state.currentFood.calories.toFixed(2)}),Object(l.jsx)("td",{children:this.state.currentFood.protein.toFixed(2)}),Object(l.jsx)("td",{children:this.state.currentFood.carbs.toFixed(2)}),Object(l.jsx)("td",{children:this.state.currentFood.fibre.toFixed(2)}),Object(l.jsx)("td",{children:this.state.currentFood.fats.toFixed(2)}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"number",defaultValue:this.state.currentFood.weight,onChange:function(t){e.calculateChange(Number(t.target.value))}})})]})})]})})]})}}]),c}(n.Component);var j=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(u,{})})},b=(c(15),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),s(e),o(e)}))});o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.a14cc2b4.chunk.js.map