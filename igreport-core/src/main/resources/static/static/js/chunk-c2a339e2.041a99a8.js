(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2a339e2"],{"0612":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-refresh",staticStyle:{"margin-left":"10px"}}),a("el-button",{staticStyle:{"margin-left":"5px",color:"black"},attrs:{type:"text"},on:{click:function(t){return e.refresh()}}},[e._v("刷新")])],1)],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"运行状态"},model:{value:e.query.logStatus,callback:function(t){e.$set(e.query,"logStatus",t)},expression:"query.logStatus"}},[a("el-option",{key:"0",attrs:{label:"全部",value:"0"}}),a("el-option",{key:"1",attrs:{label:"成功",value:"1"}}),a("el-option",{key:"2",attrs:{label:"失败",value:"2"}}),a("el-option",{key:"3",attrs:{label:"进行中",value:"3"}})],1),a("el-date-picker",{staticClass:"mr10",attrs:{type:"datetimerange","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}}),a("el-button",{staticClass:"mr10",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("搜索")]),"admin"==this.user?a("el-button",{staticClass:"mr10",attrs:{type:"primary",icon:"el-icon-delete"},on:{click:e.deleteLog}},[e._v("清理日志")]):e._e()],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingData,expression:"loadingData"}],ref:"multipleTable",staticClass:"table",attrs:{data:e.taskData,border:"","header-cell-class-name":"table-header"}},[a("el-table-column",{attrs:{prop:"jobId",label:"任务ID",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"日志ID",align:"center"}}),e._e(),a("el-table-column",{attrs:{prop:"triggerTime",label:"调度时间"}}),e._e(),a("el-table-column",{attrs:{label:"调度结果",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[""!=t.row.triggerTime?a("el-tag",{attrs:{type:200==t.row.triggerCode?"success":500==t.row.triggerCode?"danger":"warning"}},[e._v(e._s(200==t.row.triggerCode?"成功":500==t.row.triggerCode?"失败":"运行中"))]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"handleTime",label:"执行结束时间"}}),a("el-table-column",{attrs:{prop:"consumeTime",label:"执行耗时(s)"},scopedSlots:e._u([{key:"default",fn:function(t){return[""!=t.row.handleTime&&void 0!=t.row.handleTime?a("p",[e._v(e._s(t.row.consumeTime))]):e._e()]}}])}),a("el-table-column",{attrs:{label:"执行结果",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[""!=t.row.handleTime&&void 0!=t.row.handleTime?a("el-tag",{attrs:{type:200==t.row.handleCode?"success":500==t.row.handleCode?"danger":"warning"}},[e._v(e._s(200==t.row.handleCode?"成功":500==t.row.handleCode?"失败":"运行中"))]):e._e()]}}])}),e._e(),a("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"green",attrs:{type:"text",icon:"el-icon-lx-read"},on:{click:function(a){return e.handleQueryDetail(t.$index,t.row)}}},[e._v("日志")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-lx-warn"},on:{click:function(a){return e.handleKill(t.$index,t.row)}}},[e._v("中止")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handlePageChange}})],1)],1),a("el-dialog",{attrs:{title:"【清理日志】",visible:e.deleteLogVisible,width:"300px",center:""},on:{"update:visible":function(t){e.deleteLogVisible=t}}},[a("el-select",{attrs:{placeholder:"请选择",width:"200px"},model:{value:e.deleteType,callback:function(t){e.deleteType=t},expression:"deleteType"}},[a("el-option",{key:"1",attrs:{label:"清理一个月之前日志数据",value:"1"}}),a("el-option",{key:"2",attrs:{label:"清理三个月之前日志数据",value:"2"}}),a("el-option",{key:"3",attrs:{label:"清理六个月之前日志数据",value:"3"}}),a("el-option",{key:"4",attrs:{label:"清理一年之前日志数据",value:"4"}}),a("el-option",{key:"5",attrs:{label:"清理一千条以前日志数据",value:"5"}}),a("el-option",{key:"6",attrs:{label:"清理一万条以前日志数据",value:"6"}}),a("el-option",{key:"7",attrs:{label:"清理三万条以前日志数据",value:"7"}}),a("el-option",{key:"8",attrs:{label:"清理十万条以前日志数据",value:"8"}}),a("el-option",{key:"9",attrs:{label:"清理所有日志数据",value:"9"}})],1),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-lx-warn"},on:{click:function(t){return e.submitDelete()}}},[e._v("确定")])],1)],1)},n=[],r=a("bc3a"),s=a.n(r),i=a("f9ba"),o={name:"basetable",data:function(){return{deleteType:"",deleteLogVisible:!1,user:localStorage.getItem("ms_username"),pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},query:{logStatus:"",time:"",userName:localStorage.getItem("ms_username"),pageIndex:1,pageSize:10},taskData:[],multipleSelection:[],delList:[],editVisible:!1,pageTotal:0,form:{},loadingData:!0}},created:function(){this.getTime(),this.getData()},methods:{deleteLog:function(){this.deleteLogVisible=!0},submitDelete:function(){var e=this;if(""==this.deleteType)this.$message({message:"请选择清理选项",type:"error"});else{var t={};t["type"]=this.deleteType,s.a.post("/api/joblog/clearLog",t).then((function(t){200==t.data.code?(e.$message({message:"清理成功",type:"success"}),e.deleteLogVisible=!1):e.$message({message:t.data.msg,type:"error"})})).catch((function(t){e.$message({message:t,type:"error"})}))}},getTime:function(){this.query.time=[Object(i["b"])(new Date).yest,Object(i["b"])(new Date).now]},getData:function(){var e=this;this.loadingData=!0,s.a.post("/api/joblog/pageList",this.query).then((function(t){200==t.data.code?(e.taskData=t.data.content.data,e.pageTotal=t.data.content.recordsTotal,e.loadingData=!1):e.$message({message:t.data.msg,type:"error"})})).catch((function(t){e.$message({message:t,type:"error"})}))},refresh:function(){this.getTime(),this.getData()},handleKill:function(e,t){var a=this,l={};l["logId"]=t.id,s.a.post("/api/joblog/logKill",l).then((function(e){200==e.data.code?(a.getData(),a.$message({message:"中止成功",type:"success"})):a.$message({message:"中止异常:"+e.data.content,type:"error"})})).catch((function(e){a.$message({message:e,type:"error"})}))},handleQueryDetail:function(e,t){this.$router.push({path:"/logdetail",query:{row:t}})},handleSearch:function(){this.$set(this.query,"pageIndex",1),this.getData()},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),this.getData()}}},c=o,u=(a("6aa2b"),a("2877")),d=Object(u["a"])(c,l,n,!1,null,"00c9ad42",null);t["default"]=d.exports},"238f":function(e,t,a){},"5d58":function(e,t,a){e.exports=a("d8d6")},"67bb":function(e,t,a){e.exports=a("f921")},"6aa2b":function(e,t,a){"use strict";var l=a("238f"),n=a.n(l);n.a},f9ba:function(e,t,a){"use strict";a("a481"),a("6b54"),a("5d58"),a("67bb");function l(e){var t=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var l=e.getDate()-1;l=l<10?"0"+l:l;var n=e.getDate();n=n<10?"0"+n:n;var r=e.getHours();r=r<10?"0"+r:r;var s=e.getMinutes();s=s<10?"0"+s:s;var i=e.getSeconds();i=i<10?"0"+i:i;var o={};return o["yest"]=t+"-"+a+"-"+l+" "+r+":"+s+":"+i,o["now"]=t+"-"+a+"-"+n+" "+r+":"+s+":"+i,o}function n(e){var t=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var l=e.getDate()-1;l=l<10?"0"+l:l;var n=e.getDate();n=n<10?"0"+n:n;var r={};return r["yest"]=t+"-"+a+"-"+l+" 00:00:00",r["now"]=t+"-"+a+"-"+n+" 00:00:00",r}a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return n}))}}]);