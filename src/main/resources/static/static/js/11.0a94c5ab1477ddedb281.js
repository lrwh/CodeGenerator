webpackJsonp([11],{BE30:function(e,t){},qhp4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("JBQq"),s={name:"orgTree",data:function(){return{editVisible:!1,operationType:"",treeData:[],editData:{id:"",orgName:"",orgType:1,sort:""},rules:{orgName:[{required:!0,message:"请输入组织名称",trigger:"blur"}]}}},created:function(){this.initData()},mounted:function(){this.$refs.container.style.height="680px"},computed:{orgTypeOptions:function(){return[{label:"机构",value:1},{label:"部门",value:2},{label:"职位",value:3}]}},methods:{handleDragEnd:function(e,t,a,s){var r=this,n={};"inner"===a?n={id:e.data.id,parentId:t.data.id}:"before"!==a&&"after"!==a||(n={id:e.data.id,parentId:t.data.parentId}),console.log(t),i.a.put("org",n).then(function(e){200===e.httpCode?(r.$message({type:"success",message:"修改成功！"}),r.initData()):r.$message({type:"error",message:ret.message})})},initData:function(){var e=this;i.a.get("orgTree",{}).then(function(t){200===t.httpCode?e.treeData=t.data:e.$message({type:"error",message:t.message})})},append:function(e,t){this.operationType="新增",this.editVisible=!0,this.editData={id:t.id,orgName:"",orgType:1,sort:""}},remove:function(e,t){var a=this;this.$confirm("您确定要删除数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=[];e.push(t.id),i.a.del("orgs",{ids:e}).then(function(e){200===e.httpCode?(a.$message({type:"success",message:"删除成功！"}),a.initData()):a.$message({type:"error",message:e.message})})}).catch(function(){})},edit:function(e,t){this.editVisible=!0,this.operationType="编辑",this.editData={id:t.id,orgName:t.label,orgType:t.orgType,sort:t.sort}},submit:function(e){var t=this;this.$refs[e].validate(function(e){if(e)if(t.editVisible=!1,"编辑"===t.operationType)i.a.put("org",t.editData).then(function(e){200===e.httpCode?(t.$message({type:"success",message:"修改成功！"}),t.initData()):t.$message({type:"error",message:e.message})});else if("新增"===t.operationType){var a={parentId:t.editData.id,orgName:t.editData.orgName,orgType:t.editData.orgType,sort:t.editData.sort};i.a.post("org",a).then(function(e){200===e.httpCode?(t.$message({type:"success",message:"新增成功！"}),t.initData()):t.$message({type:"error",message:e.message})})}})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-tickets"}),e._v("组织管理")])],1)],1),e._v(" "),a("div",{ref:"container",staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-tree",{attrs:{data:e.treeData,"node-key":"id","default-expand-all":"",draggable:""},on:{"node-drag-end":e.handleDragEnd},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,s=t.data;return a("span",{staticClass:"custom-tree-node"},[a("span",[e._v(e._s(i.label))]),e._v(" "),a("span",[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.append(i,s)}}},[e._v("\n                        新增\n                    ")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.edit(i,s)}}},[e._v("\n                        修改\n                    ")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.remove(i,s)}}},[e._v("\n                        删除\n                    ")])],1)])}}])})],1)]),e._v(" "),a("el-dialog",{attrs:{title:e.operationType,visible:e.editVisible,width:"500px"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"orgForm",attrs:{model:e.editData,"label-width":"100px",rules:e.rules,"status-icon":""}},[a("el-form-item",{attrs:{label:"组织名称",prop:"orgName"}},[a("el-input",{staticClass:"handle-input mr10",model:{value:e.editData.orgName,callback:function(t){e.$set(e.editData,"orgName",t)},expression:"editData.orgName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"orgType"}},[a("el-select",{staticClass:"handle-input mr10",attrs:{placeholder:"请选择"},model:{value:e.editData.orgType,callback:function(t){e.$set(e.editData,"orgType",t)},expression:"editData.orgType"}},e._l(e.orgTypeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"排序号",prop:"sort"}},[a("el-input-number",{staticClass:"handle-input mr10",attrs:{precision:1,step:1},model:{value:e.editData.sort,callback:function(t){e.$set(e.editData,"sort",t)},expression:"editData.sort"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit("orgForm")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(s,r,!1,function(e){a("BE30")},"data-v-36d20a34",null);t.default=n.exports}});