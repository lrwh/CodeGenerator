webpackJsonp([5],{BD7E:function(e,t){},Qf5x:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("JBQq"),n={name:"keynameTree",inject:["reload"],data:function(){return{editVisible:!1,operationType:"",keynameData:[],editData:{id:"",keyname:"",keyType:3},rules:{keyName:[{required:!0,message:"请输入字典名称",trigger:"blur"}]}}},created:function(){this.initData()},computed:{keynameTypeOptions:function(){return[{label:"系统参数",value:1},{label:"默认参数",value:2},{label:"用户参数",value:3}]}},methods:{handleNodeClick:function(e){var t=this;this.$store.dispatch("saveKeynameId",e.id),i.a.get("keyValuesByKeynameId",{keynameId:e.id}).then(function(e){var a=[];200==e.httpCode&&(a=e.data),t.$store.dispatch("saveKeyvalues",a)})},handleDragEnd:function(e,t,a,n){var s=this,l={};"inner"===a?l={id:e.data.id,parentId:t.data.id}:"before"!==a&&"after"!==a||(l={id:e.data.id,parentId:t.data.parentId}),i.a.put("keyname",l).then(function(e){200===e.httpCode?(s.$message({type:"success",message:"修改成功！"}),s.initData()):s.$message({type:"error",message:ret.message})})},initData:function(){var e=this;i.a.get("keynameTree",{}).then(function(t){200===t.httpCode?e.keynameData=t.data:e.$message({type:"error",message:t.message})})},append:function(e,t){this.operationType="新增",this.editVisible=!0,this.editData={parentId:t.id,keyname:"",keyType:3}},remove:function(e,t){var a=this;3!=t.keyType?this.$alert("系统参数及默认参数不允许删除！","警告",{confirmButtonText:"确定"}):this.$confirm("您确定要删除数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=[];e.push(t.id),i.a.del("keynames",{ids:e}).then(function(e){200===e.httpCode?a.$message({type:"success",message:"删除成功！"}):a.$message({type:"error",message:e.message})})})},edit:function(e,t){3!=t.keyType?this.$alert("系统参数及默认参数不允许修改！","警告",{confirmButtonText:"确定"}):(this.editVisible=!0,this.operationType="编辑",this.editData={id:t.id,keyname:t.label,keyType:t.keyType})},submit:function(e){var t=this;this.$refs[e].validate(function(e){if(e)if(t.editVisible=!1,"编辑"===t.operationType)i.a.put("keyname",t.editData).then(function(e){200===e.httpCode?(t.$message({type:"success",message:"修改成功！"}),t.initData()):t.$message({type:"error",message:e.message})});else if("新增"===t.operationType){var a={parentId:t.editData.parentId,keyname:t.editData.keyname,keyType:t.editData.keyType};i.a.post("keyname",a).then(function(e){200===e.httpCode?(t.$message({type:"success",message:"新增成功！"}),t.initData()):t.$message({type:"error",message:e.message})})}})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"handle-box"},[a("el-tree",{attrs:{data:e.keynameData,"node-key":"id","default-expand-all":"",draggable:""},on:{"node-click":e.handleNodeClick,"node-drag-end":e.handleDragEnd},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,n=t.data;return a("span",{staticClass:"custom-tree-node"},[a("span",[e._v(e._s(i.label))]),e._v(" "),a("span",[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.append(i,n)}}},[e._v("\n                        新增\n                    ")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.edit(i,n)}}},[e._v("\n                        修改\n                    ")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.remove(i,n)}}},[e._v("\n                        删除\n                    ")])],1)])}}])})],1),e._v(" "),a("el-dialog",{attrs:{title:e.operationType,visible:e.editVisible,width:"500px"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"keynameForm",attrs:{model:e.editData,"label-width":"100px",rules:e.rules}},[a("el-form-item",{attrs:{label:"名称",prop:"keyname"}},[a("el-input",{staticClass:"handle-input mr10",model:{value:e.editData.keyname,callback:function(t){e.$set(e.editData,"keyname",t)},expression:"editData.keyname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"keyType"}},[a("el-select",{staticClass:"handle-input mr10",attrs:{placeholder:"请选择"},model:{value:e.editData.keyType,callback:function(t){e.$set(e.editData,"keyType",t)},expression:"editData.keyType"}},e._l(e.keynameTypeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit("keynameForm")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l={name:"keyvalueTable",data:function(){return{operationType:"",editData:{keyvalue:"",description:""},editVisible:!1,searchKey:"",multipleSelection:[],rules:{keyvalue:[{required:!0,message:"请输入键值名称",trigger:"blur"}]}}},created:function(){this.initData({keynameId:this.keynameId})},computed:{tableData:function(){return this.$store.state.key.keyvalues},keynameId:function(){return this.$store.state.key.keynameId}},methods:{initData:function(e){var t=this;i.a.get("keyValuesByKeynameId",e).then(function(e){200==e.httpCode?t.$store.dispatch("saveKeyvalues",e.data):t.$store.dispatch("saveKeyvalues",[])})},search:function(){this.initData({keynameId:this.keynameId,searchKey:this.searchKey})},add:function(){this.keynameId?(this.editData={keynameId:this.keynameId,keyvalue:"",description:""},this.operationType="新增",this.editVisible=!0):this.$alert("请先选择左边的节点！","警告",{confirmButtonText:"确定"})},handleSelectionChange:function(e){var t=e.map(function(e){return e.id});this.multipleSelection=t},delAll:function(){0===this.multipleSelection.length?this.$alert("您未选择任何数据！","警告",{confirmButtonText:"确定"}):this.deleteConfirm(this.multipleSelection)},edit:function(e){this.editData={id:e.id,keyvalue:e.keyvalue,description:e.description},this.operationType="编辑",this.editVisible=!0},deleteConfirm:function(e){var t=this;this.$confirm("您确定要删除数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=[];Array.isArray(e)?a=e:a.push(e),i.a.del("keyvalues",{ids:a}).then(function(e){200===e.httpCode?(t.$message({type:"success",message:"删除成功！"}),t.initData({keynameId:t.keynameId,searchKey:t.searchKey})):t.$message({type:"error",message:e.message})})})},submit:function(e){var t=this;this.$refs[e].validate(function(e){if(e)if(t.editVisible=!1,"编辑"===t.operationType)i.a.put("keyvalue",t.editData).then(function(e){200===e.httpCode?(t.$message({type:"success",message:"修改成功！"}),t.initData({keynameId:t.keynameId,searchKey:t.searchKey})):t.$message({type:"error",message:e.message})});else if("新增"===t.operationType){var a={keyvalue:t.editData.keyvalue,keynameId:t.editData.keynameId,description:t.editData.description};i.a.post("keyvalue",a).then(function(e){200===e.httpCode?(t.$message({type:"success",message:"新增成功！"}),t.initData({keynameId:t.keynameId,searchKey:t.searchKey})):t.$message({type:"error",message:e.message})})}})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",[a("div",{staticClass:"handle-box"},[a("el-button",{staticClass:"base_btn handle-del mr10",attrs:{type:"primary",icon:"el-icon-delete"},on:{click:e.delAll}},[e._v("批量删除\n            ")]),e._v(" "),a("el-input",{staticClass:"handle-input mr10",staticStyle:{width:"200px"},attrs:{placeholder:"请输入键值名称"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}}),e._v(" "),a("el-button",{staticClass:"base_btn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索\n            ")]),e._v(" "),a("el-button",{staticClass:"base_btn handle-del mr10",staticStyle:{float:"right !important"},attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:e.add}},[e._v("新增\n            ")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"40"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"keyvalue",label:"键值名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"description",label:"描述"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"han_btn",attrs:{size:"small",type:"text"},on:{click:function(a){e.edit(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{staticClass:"han_btn",attrs:{size:"small",type:"text"},on:{click:function(a){e.deleteConfirm(t.row.id)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.operationType,visible:e.editVisible,width:"500px"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"keyvalueForm",attrs:{model:e.editData,"label-width":"100px",rules:e.rules}},[a("el-form-item",{attrs:{label:"键值名称",prop:"keyvalue"}},[a("el-input",{staticClass:"handle-input mr10",model:{value:e.editData.keyvalue,callback:function(t){e.$set(e.editData,"keyvalue",t)},expression:"editData.keyvalue"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{staticClass:"handle-input mr10",model:{value:e.editData.description,callback:function(t){e.$set(e.editData,"description",t)},expression:"editData.description"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit("keyvalueForm")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var o={name:"key",data:function(){return{}},created:function(){},mounted:function(){this.$refs.container.style.height="680px"},computed:{},methods:{},components:{keynameTree:a("VU/8")(n,s,!1,function(e){a("BD7E")},"data-v-32cd1a36",null).exports,keyvalueTable:a("VU/8")(l,r,!1,function(e){a("q+pa")},"data-v-24c2ab29",null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"table"},[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-tickets"}),this._v("键值管理")])],1)],1),this._v(" "),t("div",{ref:"container",staticClass:"container"},[t("div",{staticClass:"handle-box"},[t("el-row",{attrs:{gutter:64}},[t("el-col",{attrs:{span:8}},[t("keyname-tree")],1),this._v(" "),t("el-col",{attrs:{span:16}},[t("keyvalue-table")],1)],1)],1)])])},staticRenderFns:[]};var d=a("VU/8")(o,c,!1,function(e){a("wlV9")},"data-v-09e0ccda",null);t.default=d.exports},"q+pa":function(e,t){},wlV9:function(e,t){}});