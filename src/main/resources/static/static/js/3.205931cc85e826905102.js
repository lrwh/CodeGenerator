webpackJsonp([3],{"6b9w":function(e,t){},DYZT:function(e,t){},FnWT:function(e,t){},pLRn:function(e,t){},sXTc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("JBQq"),o={inject:["reload"],data:function(){return{form:{schemaName:"",moduleName:"",moduleDesc:"",packagePath:""},schemaOption:[],rules:{schemaName:[{required:!0,message:"请输入方案名称",trigger:"blur"}],moduleName:[{required:!0,message:"请输入模块名称",trigger:"blur"}],packagePath:[{required:!0,message:"请输入包路径",trigger:"blur"}]}}},created:function(){this.getSchemaTree()},methods:{remove:function(e,t){var a=this;-1!=t.id&&this.$confirm("您确定要删除数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.resetForm("schemaForm"),s.a.del("agileSchema",{id:t.id}).then(function(e){200===e.httpCode?(a.$message({type:"success",message:"删除成功！"}),a.getSchemaTree()):a.$message({type:"error",message:e.message})})})},resetState:function(){this.$store.dispatch("saveSchema",{}),this.$store.dispatch("saveConId",""),this.$store.dispatch("saveDatabaseName",""),this.$store.dispatch("saveTableNames",[])},submitForm:function(e){var t=this;this.$refs[e].validate(function(a){a&&s.a.post("agileSchema",t.form).then(function(a){200===a.httpCode?(t.$message({type:"success",message:"新增成功！"}),t.$refs[e].clearValidate(),t.$store.dispatch("saveSchema",a.data),t.$emit("step")):t.$message({type:"error",message:a.message})})})},resetForm:function(e){this.$refs[e].clearValidate(),this.$refs[e].resetFields()},handleNodeClick:function(e){var t=this;-1!=e.id&&s.a.get("agileSchema",{id:e.id}).then(function(e){200===e.httpCode?(t.form={schemaName:e.data.schemaName,moduleName:e.data.moduleName,moduleDesc:e.data.moduleDesc,packagePath:e.data.packagePath},t.$store.dispatch("saveSchema",e.data),s.a.get("agileEntityBySchemaId",{schemaId:t.$store.state.schema.schemaData.id}).then(function(e){if(200===e.httpCode){if(0!=e.data.length){var a=e.data.map(function(e){return e.tableName});t.$store.dispatch("saveConId",e.data[0].conId),t.$store.dispatch("saveDatabaseName",e.data[0].databaseName),t.$store.dispatch("saveTableNames",a)}}else t.$message({type:"error",message:e.message})})):t.$message({type:"error",message:e.message})})},getSchemaTree:function(){var e=this;s.a.get("schemaTree",{}).then(function(t){200===t.httpCode?e.schemaOption=t.data:e.$message({type:"error",message:t.message})})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{span:6}},[a("span",[e._v("选择已有的方案")]),e._v(" "),a("el-tree",{staticClass:"tree",attrs:{data:e.schemaOption,accordion:"","default-expand-all":"","highlight-current":""},on:{"node-click":e.handleNodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.node,o=t.data;return a("span",{staticClass:"custom-tree-node"},[a("span",[e._v(e._s(s.label))]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:-1!=o.id,expression:"data.id != -1"}]},[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.remove(s,o)}}},[e._v("\n\t\t\t\t\t\t\t删除\n\t\t\t\t\t\t")])],1)])}}])})],1),e._v(" "),a("el-col",{attrs:{span:16}},[a("el-form",{ref:"schemaForm",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"方案名称",prop:"schemaName"}},[a("el-input",{model:{value:e.form.schemaName,callback:function(t){e.$set(e.form,"schemaName",t)},expression:"form.schemaName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模块名称",prop:"moduleName"}},[a("el-input",{model:{value:e.form.moduleName,callback:function(t){e.$set(e.form,"moduleName",t)},expression:"form.moduleName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模块描述",prop:"moduleDesc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.moduleDesc,callback:function(t){e.$set(e.form,"moduleDesc",t)},expression:"form.moduleDesc"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代码包路径",prop:"packagePath"}},[a("el-input",{model:{value:e.form.packagePath,callback:function(t){e.$set(e.form,"packagePath",t)},expression:"form.packagePath"}})],1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("schemaForm")}}},[e._v("保存")])],1)],1)},staticRenderFns:[]};var n=a("VU/8")(o,r,!1,function(e){a("pLRn")},"data-v-44417e17",null).exports,i=a("woOf"),l=a.n(i),m={data:function(){return{form:{connId:this.$store.state.entity.conId,databaseName:this.$store.state.entity.databaseName,tableNames:[]},connOptions:[],databaseOptions:[],tableOptions:[],rules:{connId:[{required:!0,message:"请选择数据库连接",trigger:"change"}],databaseName:[{required:!0,message:"请选择数据库名称",trigger:"change"}],tableNames:[{required:!0,message:"请选择表名",trigger:"change"}]}}},created:function(){this.getConnOptions()},computed:{connId:function(){return this.$store.state.entity.conId},databaseName:function(){return this.$store.state.entity.databaseName},tableNames:function(){return this.$store.state.entity.tableNames}},watch:{connId:function(e){this.form.connId=e},databaseName:function(e){this.form.databaseName=e},tableNames:function(e){this.form.tableNames=e}},methods:{connSelected:function(e){this.getDatabaseOptions(e)},databaseSelected:function(e){this.getTableOptions(this.form.connId,e)},submitForm:function(e){var t=this;this.$refs[e].validate(function(a){l()(t.form,{schemaId:t.$store.state.schema.schemaData.id}),s.a.post("agileEntites",t.form).then(function(a){200===a.httpCode?(t.$message({type:"success",message:"保存成功！"}),t.$store.dispatch("saveTableNames",t.form.tableNames),t.$refs[e].clearValidate(),t.$emit("step")):t.$message({type:"error",message:a.message})})})},getConnOptions:function(){var e=this;s.a.get("databaseConnections",{}).then(function(t){200===t.httpCode?e.connOptions=t.data:e.$message({type:"error",message:t.message})})},getDatabaseOptions:function(e){var t=this;s.a.get("databases",{conId:e}).then(function(e){200===e.httpCode?t.databaseOptions=e.data:t.$message({type:"error",message:e.message})})},getTableOptions:function(e,t){var a=this;s.a.get("tables",{conId:e,databaseName:t}).then(function(e){200===e.httpCode?a.tableOptions=e.data:a.$message({type:"error",message:e.message})})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"entityForm",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"数据库连接",prop:"connId"}},[a("el-select",{attrs:{placeholder:"请选择",size:"medium"},on:{change:e.connSelected},model:{value:e.form.connId,callback:function(t){e.$set(e.form,"connId",t)},expression:"form.connId"}},e._l(e.connOptions,function(e){return a("el-option",{key:e.id,attrs:{"auto-complete":"off",label:e.connName,value:e.id}})}))],1),e._v(" "),""!==this.form.connId?a("el-form-item",{attrs:{label:"数据库",prop:"databaseName"}},[a("el-select",{attrs:{placeholder:"请选择",size:"medium"},on:{change:e.databaseSelected},model:{value:e.form.databaseName,callback:function(t){e.$set(e.form,"databaseName",t)},expression:"form.databaseName"}},e._l(e.databaseOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1):e._e(),e._v(" "),""!==this.form.databaseName?a("el-form-item",{attrs:{label:"表名",prop:"tableNames"}},[a("el-select",{attrs:{placeholder:"请选择",multiple:"",size:"medium"},model:{value:e.form.tableNames,callback:function(t){e.$set(e.form,"tableNames",t)},expression:"form.tableNames"}},e._l(e.tableOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1):e._e()],1),e._v(" "),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("entityForm")}}},[e._v("保存")])],1)],1)},staticRenderFns:[]};var d={data:function(){return{keynameOptions:[],entityTreeData:[],form:{label:"",defaultValue:"",placeholder:"",isVisibled:"",isDisabled:"",isRequired:"",isQuery:"",componentType:""},rules:{label:[{required:!0,message:"请输入组件名称",trigger:"blur"}],componentType:[{required:!0,message:"请输入表单布局",trigger:"change"}]}}},created:function(){},computed:{tableNames:function(){return this.$store.state.entity.tableNames}},watch:{tableNames:function(e,t){this.getEntityTree(),this.getKeyOptions()}},methods:{handleNodeClick:function(e){var t=this;"field"===e.nodeType&&s.a.get("agileComponentByName",{entityId:e.entityId,fieldName:e.label}).then(function(e){200===e.httpCode?t.form=e.data:t.$message({type:"error",message:e.message})})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e&&s.a.put("agileComponent",t.form).then(function(e){200===e.httpCode?t.$message({type:"success",message:"保存成功！"}):t.$message({type:"error",message:e.message})})})},getEntityTree:function(e){var t=this;s.a.get("entityTree",{schemaId:this.$store.state.schema.schemaData.id}).then(function(e){200===e.httpCode?t.entityTreeData=e.data:t.$message({type:"error",message:e.message})})},getKeyOptions:function(){var e=this;s.a.get("keynames",{}).then(function(t){200===t.httpCode?e.keynameOptions=t.data:e.$message({type:"error",message:t.message})})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{span:6}},[a("el-tree",{attrs:{data:e.entityTreeData,accordion:"","highlight-current":""},on:{"node-click":e.handleNodeClick}})],1),e._v(" "),a("el-col",{attrs:{span:18}},[a("el-form",{ref:"componentForm",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"标签名称",prop:"label"}},[a("el-input",{model:{value:e.form.label,callback:function(t){e.$set(e.form,"label",t)},expression:"form.label"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"默认值",prop:"defaultValue"}},[a("el-input",{attrs:{placeholder:"组件默认值(初始值)"},model:{value:e.form.defaultValue,callback:function(t){e.$set(e.form,"defaultValue",t)},expression:"form.defaultValue"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"placeholder",prop:"placeholder"}},[a("el-input",{model:{value:e.form.placeholder,callback:function(t){e.$set(e.form,"placeholder",t)},expression:"form.placeholder"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否可见",prop:"isVisibled"}},[a("el-switch",{model:{value:e.form.isVisibled,callback:function(t){e.$set(e.form,"isVisibled",t)},expression:"form.isVisibled"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否禁用",prop:"isDisabled"}},[a("el-switch",{model:{value:e.form.isDisabled,callback:function(t){e.$set(e.form,"isDisabled",t)},expression:"form.isDisabled"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否必填",prop:"isRequired"}},[a("el-switch",{model:{value:e.form.isRequired,callback:function(t){e.$set(e.form,"isRequired",t)},expression:"form.isRequired"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否查询条件",prop:"isQuery"}},[a("el-switch",{model:{value:e.form.isQuery,callback:function(t){e.$set(e.form,"isQuery",t)},expression:"form.isQuery"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"组件类型",prop:"componentType"}},[a("el-select",{attrs:{placeholder:"请选择组件类型"},model:{value:e.form.componentType,callback:function(t){e.$set(e.form,"componentType",t)},expression:"form.componentType"}},[a("el-option",{attrs:{label:"输入框",value:"input"}}),e._v(" "),a("el-option",{attrs:{label:"开关按钮",value:"switch"}}),e._v(" "),a("el-option",{attrs:{label:"日期选择器",value:"datePicker"}}),e._v(" "),a("el-option",{attrs:{label:"时间选择器",value:"dateTimePicker"}})],1)],1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("componentForm")}}},[e._v("保存")])],1)],1)},staticRenderFns:[]};var p={data:function(){return{form:{moduleName:"",packagePath:"",generateList:[]}}},computed:{moduleName:function(){return this.$store.state.schema.schemaData.moduleName},packagePath:function(){return this.$store.state.schema.schemaData.packagePath}},watch:{moduleName:function(e){this.form.moduleName=e},packagePath:function(e){this.form.packagePath=e}},methods:{submitForm:function(){var e=this;this.form.generateList?s.a.post("generateCode",{schemaId:this.$store.state.schema.schemaData.id,generateList:this.form.generateList}).then(function(t){200===t.httpCode?e.$message({type:"success",message:"生成成功！"}):e.$message({type:"error",message:ret.message})}):this.$message({type:"warning",message:"请选择生成代码类型"})},resetForm:function(e){this.$refs[e].resetFields()}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"generate"},[a("el-form",{ref:"generateCodeForm",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"模块名称",prop:"moduleName"}},[a("el-input",{attrs:{disabled:""},model:{value:e.form.moduleName,callback:function(t){e.$set(e.form,"moduleName",t)},expression:"form.moduleName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"包路径",prop:"packagePath"}},[a("el-input",{attrs:{disabled:""},model:{value:e.form.packagePath,callback:function(t){e.$set(e.form,"packagePath",t)},expression:"form.packagePath"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代码类别",prop:"generateList"}},[a("el-checkbox-group",{model:{value:e.form.generateList,callback:function(t){e.$set(e.form,"generateList",t)},expression:"form.generateList"}},[a("el-checkbox",{attrs:{label:"web"}},[e._v("前端代码")]),e._v(" "),a("el-checkbox",{attrs:{label:"java"}},[e._v("后端代码")])],1)],1)],1),e._v(" "),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm()}}},[e._v("生成代码")])],1)],1)},staticRenderFns:[]},h={components:{Schema:n,Entity:a("VU/8")(m,c,!1,function(e){a("DYZT")},"data-v-aea9fb9e",null).exports,Components:a("VU/8")(d,u,!1,function(e){a("6b9w")},"data-v-9a334e18",null).exports,GenerateCode:a("VU/8")(p,f,!1,null,null,null).exports},data:function(){return{step:0}},methods:{toNext:function(){this.step+=1},toLast:function(){0!==this.step&&(this.step-=1)}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-steps",{attrs:{active:e.step,"align-center":""}},[a("el-step",{attrs:{title:"方案"}}),e._v(" "),a("el-step",{attrs:{title:"实体"}}),e._v(" "),a("el-step",{attrs:{title:"组件"}}),e._v(" "),a("el-step",{attrs:{title:"代码生成"}})],1),e._v(" "),a("div",{staticClass:"container"},[a("Schema",{directives:[{name:"show",rawName:"v-show",value:0===e.step,expression:"step === 0"}],ref:"schema",staticClass:"step_son",on:{step:e.toNext}}),e._v(" "),a("Entity",{directives:[{name:"show",rawName:"v-show",value:1===e.step,expression:"step === 1"}],ref:"entity",staticClass:"step_son",on:{step:e.toNext}}),e._v(" "),a("Components",{directives:[{name:"show",rawName:"v-show",value:2===e.step,expression:"step === 2"}],ref:"component",on:{step:e.toNext}}),e._v(" "),a("GenerateCode",{directives:[{name:"show",rawName:"v-show",value:3===e.step,expression:"step === 3"}],ref:"generate",staticClass:"step_son"})],1),e._v(" "),a("div",{staticClass:"btn_group right"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:0!==e.step,expression:"step !== 0"}],staticClass:"base_btn",on:{click:e.toLast}},[e._v("\n\t\t\t上一步\n\t\t")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:3!==e.step,expression:"step !== 3"}],staticClass:"base_btn",attrs:{type:"primary"},on:{click:e.toNext}},[e._v("\n\t\t\t下一步\n\t\t")])],1)],1)},staticRenderFns:[]};var b=a("VU/8")(h,g,!1,function(e){a("FnWT")},"data-v-11b18806",null);t.default=b.exports}});