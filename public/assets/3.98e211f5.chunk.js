webpackJsonp([3],{T9Xr:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),function(a){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=c("GiK3"),h=c.n(g),i=c("2KeS"),j=c("RH2O"),k=c("F8kA"),l=c("rGbO"),m=c.n(l),n=c("V06q"),o=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),p=function(a){function b(){d(this,b);var a=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return a.state={isEditable:!1,inputValue:""},a}return f(b,a),o(b,[{key:"renderInput",value:function(){var a=this,b=this.state.inputValue;return h.a.createElement("input",{type:"text",value:b,onChange:function(b){return a.setState({inputValue:b.target.value})}})}},{key:"renderControlButtons",value:function(){var a=this,b=this.props,c=b.text,d=b.onSaveClick,e=this.state,f=e.isEditable,g=e.inputValue;return f?h.a.createElement("span",null,h.a.createElement("button",{onClick:function(){return d(g).then(function(){return a.setState({isEditable:!1})})}},"Save"),h.a.createElement("button",{onClick:function(){return a.setState({isEditable:!1})}},"Cancel")):h.a.createElement("span",null,h.a.createElement("button",{onClick:function(){return a.setState({isEditable:!0,inputValue:c})}},"Edit"))}},{key:"render",value:function(){var a=this.props,b=a.vehicleDetail,c=a.match.params,d=b[c.id];if(!d||"VEHICLE_REQUESTING"===d.readyStatus)return h.a.createElement("p",null,"Loading...");if("VEHICLE_FAILURE"===d.readyStatus)return h.a.createElement("p",null,"Oops, Failed to load detail!");var e=this.props,f=e.onRemoveClick,g=e.text,i=this.state.isEditable;return h.a.createElement("li",null,g,i&&this.renderInput(),this.renderControlButtons(),h.a.createElement("button",{onClick:f},"x"))}}]),b}(g.PureComponent),q=Object(j.connect)(function(a){var b=a.vehicleDetail,c=a.role;return{vehicleDetail:b,role:c}},function(a){return{fetchVehicleIfNeeded:function(b){return a(Object(n.a)(b))}}});b["default"]=Object(i.compose)(Object(l.hot)(a),k.withRouter,q)(p)}.call(b,c("f1Eh")(a))}});