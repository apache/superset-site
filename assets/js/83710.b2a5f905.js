(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([["83710"],{468313(t){t.exports=function(t,e,i){var s=function(t){return t.add(4-t.isoWeekday(),"day")},n=e.prototype;n.isoWeekYear=function(){return s(this).year()},n.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),"day");var e,n,r,a=s(this),o=(e=this.isoWeekYear(),r=4-(n=(this.$u?i.utc:i)().year(e).startOf("year")).isoWeekday(),n.isoWeekday()>4&&(r+=7),n.add(r,"day"));return a.diff(o,"week")+1},n.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var r=n.startOf;n.startOf=function(t,e){var i=this.$utils(),s=!!i.u(e)||e;return"isoweek"===i.p(t)?s?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):r.bind(this)(t,e)}}},964045(t,e,i){"use strict";i.d(e,{diagram:()=>tP});var s,n,r,a=i(297959),o=i(868424),l=i(440797),c=i(416750),d=i(974353),u=i(468313),h=i(690445),f=i(497375),k=i(343522),y=i(997607),m=function(){var t=(0,l.K2)(function(t,e,i,s){for(i=i||{},s=t.length;s--;i[t[s]]=e);return i},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],s=[1,27],n=[1,28],r=[1,29],a=[1,30],o=[1,31],c=[1,32],d=[1,33],u=[1,34],h=[1,9],f=[1,10],k=[1,11],y=[1,12],m=[1,13],p=[1,14],g=[1,15],T=[1,16],x=[1,19],b=[1,20],v=[1,21],_=[1,22],w=[1,23],C=[1,25],$=[1,35],K={trace:(0,l.K2)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,l.K2)(function(t,e,i,s,n,r,a){var o=r.length-1;switch(n){case 1:return r[o-1];case 2:case 6:case 7:this.$=[];break;case 3:r[o-1].push(r[o]),this.$=r[o-1];break;case 4:case 5:this.$=r[o];break;case 8:s.setWeekday("monday");break;case 9:s.setWeekday("tuesday");break;case 10:s.setWeekday("wednesday");break;case 11:s.setWeekday("thursday");break;case 12:s.setWeekday("friday");break;case 13:s.setWeekday("saturday");break;case 14:s.setWeekday("sunday");break;case 15:s.setWeekend("friday");break;case 16:s.setWeekend("saturday");break;case 17:s.setDateFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 18:s.enableInclusiveEndDates(),this.$=r[o].substr(18);break;case 19:s.TopAxis(),this.$=r[o].substr(8);break;case 20:s.setAxisFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 21:s.setTickInterval(r[o].substr(13)),this.$=r[o].substr(13);break;case 22:s.setExcludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 23:s.setIncludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 24:s.setTodayMarker(r[o].substr(12)),this.$=r[o].substr(12);break;case 27:s.setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 28:this.$=r[o].trim(),s.setAccTitle(this.$);break;case 29:case 30:this.$=r[o].trim(),s.setAccDescription(this.$);break;case 31:s.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 33:s.addTask(r[o-1],r[o]),this.$="task";break;case 34:this.$=r[o-1],s.setClickEvent(r[o-1],r[o],null);break;case 35:this.$=r[o-2],s.setClickEvent(r[o-2],r[o-1],r[o]);break;case 36:this.$=r[o-2],s.setClickEvent(r[o-2],r[o-1],null),s.setLink(r[o-2],r[o]);break;case 37:this.$=r[o-3],s.setClickEvent(r[o-3],r[o-2],r[o-1]),s.setLink(r[o-3],r[o]);break;case 38:this.$=r[o-2],s.setClickEvent(r[o-2],r[o],null),s.setLink(r[o-2],r[o-1]);break;case 39:this.$=r[o-3],s.setClickEvent(r[o-3],r[o-1],r[o]),s.setLink(r[o-3],r[o-2]);break;case 40:this.$=r[o-1],s.setLink(r[o-1],r[o]);break;case 41:case 47:this.$=r[o-1]+" "+r[o];break;case 42:case 43:case 45:this.$=r[o-2]+" "+r[o-1]+" "+r[o];break;case 44:case 46:this.$=r[o-3]+" "+r[o-2]+" "+r[o-1]+" "+r[o]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:s,14:n,15:r,16:a,17:o,18:c,19:18,20:d,21:u,22:h,23:f,24:k,25:y,26:m,27:p,28:g,29:T,30:x,31:b,33:v,35:_,36:w,37:24,38:C,40:$},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:i,13:s,14:n,15:r,16:a,17:o,18:c,19:18,20:d,21:u,22:h,23:f,24:k,25:y,26:m,27:p,28:g,29:T,30:x,31:b,33:v,35:_,36:w,37:24,38:C,40:$},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:(0,l.K2)(function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},"parseError"),parse:(0,l.K2)(function(t){var e=this,i=[0],s=[],n=[null],r=[],a=this.table,o="",c=0,d=0,u=0,h=r.slice.call(arguments,1),f=Object.create(this.lexer),k={};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(k[y]=this.yy[y]);f.setInput(t,k),k.lexer=f,k.parser=this,void 0===f.yylloc&&(f.yylloc={});var m=f.yylloc;r.push(m);var p=f.options&&f.options.ranges;function g(){var t;return"number"!=typeof(t=s.pop()||f.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof k.parseError?this.parseError=k.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,l.K2)(function(t){i.length=i.length-2*t,n.length=n.length-t,r.length=r.length-t},"popStack"),(0,l.K2)(g,"lex");for(var T,x,b,v,_,w,C,$,K,D={};;){if(b=i[i.length-1],this.defaultActions[b]?v=this.defaultActions[b]:(null==T&&(T=g()),v=a[b]&&a[b][T]),void 0===v||!v.length||!v[0]){var S="";for(w in K=[],a[b])this.terminals_[w]&&w>2&&K.push("'"+this.terminals_[w]+"'");S=f.showPosition?"Parse error on line "+(c+1)+":\n"+f.showPosition()+"\nExpecting "+K.join(", ")+", got '"+(this.terminals_[T]||T)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==T?"end of input":"'"+(this.terminals_[T]||T)+"'"),this.parseError(S,{text:f.match,token:this.terminals_[T]||T,line:f.yylineno,loc:m,expected:K})}if(v[0]instanceof Array&&v.length>1)throw Error("Parse Error: multiple actions possible at state: "+b+", token: "+T);switch(v[0]){case 1:i.push(T),n.push(f.yytext),r.push(f.yylloc),i.push(v[1]),T=null,x?(T=x,x=null):(d=f.yyleng,o=f.yytext,c=f.yylineno,m=f.yylloc,u>0&&u--);break;case 2:if(C=this.productions_[v[1]][1],D.$=n[n.length-C],D._$={first_line:r[r.length-(C||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(C||1)].first_column,last_column:r[r.length-1].last_column},p&&(D._$.range=[r[r.length-(C||1)].range[0],r[r.length-1].range[1]]),void 0!==(_=this.performAction.apply(D,[o,d,c,k,v[1],n,r].concat(h))))return _;C&&(i=i.slice(0,-1*C*2),n=n.slice(0,-1*C),r=r.slice(0,-1*C)),i.push(this.productions_[v[1]][0]),n.push(D.$),r.push(D._$),$=a[i[i.length-2]][i[i.length-1]],i.push($);break;case 3:return!0}}return!0},"parse")};function D(){this.yy={}}return K.lexer={EOF:1,parseError:(0,l.K2)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,l.K2)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,l.K2)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,l.K2)(function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===s.length?this.yylloc.first_column:0)+s[s.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,l.K2)(function(){return this._more=!0,this},"more"),reject:(0,l.K2)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,l.K2)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,l.K2)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,l.K2)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,l.K2)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,l.K2)(function(t,e){var i,s,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var r in n)this[r]=n[r];return!1},"test_match"),next:(0,l.K2)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,s,n=this._currentRules(),r=0;r<n.length;r++)if((i=this._input.match(this.rules[n[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,s=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,n[r])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,l.K2)(function(){var t=this.next();return t||this.lex()},"lex"),begin:(0,l.K2)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,l.K2)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,l.K2)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,l.K2)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,l.K2)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,l.K2)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,l.K2)(function(t,e,i,s){switch(i){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 43;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 22:return 42;case 23:this.begin("click");break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}},(0,l.K2)(D,"Parser"),D.prototype=K,K.Parser=D,new D}();m.parser=m,d.extend(u),d.extend(h),d.extend(f);var p={friday:5,saturday:6},g="",T="",x=void 0,b="",v=[],_=[],w=new Map,C=[],$=[],K="",D="",S=["active","done","crit","milestone","vert"],E=[],A="",I=!1,O=!1,L="sunday",F="saturday",W=0,P=(0,l.K2)(function(){C=[],$=[],K="",E=[],tm=0,s=void 0,n=void 0,tx=[],g="",T="",D="",x=void 0,b="",v=[],_=[],I=!1,O=!1,W=0,w=new Map,A="",(0,o.IU)(),L="sunday",F="saturday"},"clear"),M=(0,l.K2)(function(t){A=t},"setDiagramId"),B=(0,l.K2)(function(t){T=t},"setAxisFormat"),R=(0,l.K2)(function(){return T},"getAxisFormat"),Y=(0,l.K2)(function(t){x=t},"setTickInterval"),N=(0,l.K2)(function(){return x},"getTickInterval"),z=(0,l.K2)(function(t){b=t},"setTodayMarker"),j=(0,l.K2)(function(){return b},"getTodayMarker"),G=(0,l.K2)(function(t){g=t},"setDateFormat"),H=(0,l.K2)(function(){I=!0},"enableInclusiveEndDates"),U=(0,l.K2)(function(){return I},"endDatesAreInclusive"),V=(0,l.K2)(function(){O=!0},"enableTopAxis"),q=(0,l.K2)(function(){return O},"topAxisEnabled"),X=(0,l.K2)(function(t){D=t},"setDisplayMode"),J=(0,l.K2)(function(){return D},"getDisplayMode"),Q=(0,l.K2)(function(){return g},"getDateFormat"),Z=(0,l.K2)(function(t){v=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),tt=(0,l.K2)(function(){return v},"getIncludes"),te=(0,l.K2)(function(t){_=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),ti=(0,l.K2)(function(){return _},"getExcludes"),ts=(0,l.K2)(function(){return w},"getLinks"),tn=(0,l.K2)(function(t){K=t,C.push(t)},"addSection"),tr=(0,l.K2)(function(){return C},"getSections"),ta=(0,l.K2)(function(){let t=tC(),e=0;for(;!t&&e<10;)t=tC(),e++;return $=tx},"getTasks"),to=(0,l.K2)(function(t,e,i,s){let n=t.format(e.trim()),r=t.format("YYYY-MM-DD");return!(s.includes(n)||s.includes(r))&&(!!(i.includes("weekends")&&(t.isoWeekday()===p[F]||t.isoWeekday()===p[F]+1)||i.includes(t.format("dddd").toLowerCase()))||i.includes(n)||i.includes(r))},"isInvalidDate"),tl=(0,l.K2)(function(t){L=t},"setWeekday"),tc=(0,l.K2)(function(){return L},"getWeekday"),td=(0,l.K2)(function(t){F=t},"setWeekend"),tu=(0,l.K2)(function(t,e,i,s){let n;if(!i.length||t.manualEndTime)return;let[r,a]=th(n=(n=t.startTime instanceof Date?d(t.startTime):d(t.startTime,e,!0)).add(1,"d"),t.endTime instanceof Date?d(t.endTime):d(t.endTime,e,!0),e,i,s);t.endTime=r.toDate(),t.renderEndTime=a},"checkTaskDates"),th=(0,l.K2)(function(t,e,i,s,n){let r=!1,a=null,o=e.add(1e4,"d");for(;t<=e;){if(r||(a=e.toDate()),(r=to(t,i,s,n))&&(e=e.add(1,"d"))>o)throw Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[e,a]},"fixTaskDates"),tf=(0,l.K2)(function(t,e,i){if(i=i.trim(),(0,l.K2)(t=>{let e=t.trim();return"x"===e||"X"===e},"isTimestampFormat")(e)&&/^\d+$/.test(i))return new Date(Number(i));let s=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==s){let t=null;for(let e of s.groups.ids.split(" ")){let i=t_(e);void 0!==i&&(!t||i.endTime>t.endTime)&&(t=i)}if(t)return t.endTime;let e=new Date;return e.setHours(0,0,0,0),e}let n=d(i,e.trim(),!0);if(n.isValid())return n.toDate();{l.Rm.debug("Invalid date:"+i),l.Rm.debug("With date format:"+e.trim());let t=new Date(i);if(void 0===t||isNaN(t.getTime())||-1e4>t.getFullYear()||t.getFullYear()>1e4)throw Error("Invalid date:"+i);return t}},"getStartDate"),tk=(0,l.K2)(function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),ty=(0,l.K2)(function(t,e,i,s=!1){i=i.trim();let n=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==n){let t=null;for(let e of n.groups.ids.split(" ")){let i=t_(e);void 0!==i&&(!t||i.startTime<t.startTime)&&(t=i)}if(t)return t.startTime;let e=new Date;return e.setHours(0,0,0,0),e}let r=d(i,e.trim(),!0);if(r.isValid())return s&&(r=r.add(1,"d")),r.toDate();let a=d(t),[o,l]=tk(i);if(!Number.isNaN(o)){let t=a.add(o,l);t.isValid()&&(a=t)}return a.toDate()},"getEndDate"),tm=0,tp=(0,l.K2)(function(t){return void 0===t?"task"+(tm+=1):t},"parseId"),tg=(0,l.K2)(function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),s={};tO(i,s,S);for(let t=0;t<i.length;t++)i[t]=i[t].trim();let n="";switch(i.length){case 1:s.id=tp(),s.startTime=t.endTime,n=i[0];break;case 2:s.id=tp(),s.startTime=tf(void 0,g,i[0]),n=i[1];break;case 3:s.id=tp(i[0]),s.startTime=tf(void 0,g,i[1]),n=i[2]}return n&&(s.endTime=ty(s.startTime,g,n,I),s.manualEndTime=d(n,"YYYY-MM-DD",!0).isValid(),tu(s,g,_,v)),s},"compileData"),tT=(0,l.K2)(function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),s={};tO(i,s,S);for(let t=0;t<i.length;t++)i[t]=i[t].trim();switch(i.length){case 1:s.id=tp(),s.startTime={type:"prevTaskEnd",id:t},s.endTime={data:i[0]};break;case 2:s.id=tp(),s.startTime={type:"getStartDate",startData:i[0]},s.endTime={data:i[1]};break;case 3:s.id=tp(i[0]),s.startTime={type:"getStartDate",startData:i[1]},s.endTime={data:i[2]}}return s},"parseData"),tx=[],tb={},tv=(0,l.K2)(function(t,e){let i={section:K,type:K,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},s=tT(n,e);i.raw.startTime=s.startTime,i.raw.endTime=s.endTime,i.id=s.id,i.prevTaskId=n,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.vert=s.vert,i.order=W,W++;let r=tx.push(i);n=i.id,tb[i.id]=r-1},"addTask"),t_=(0,l.K2)(function(t){return tx[tb[t]]},"findTaskById"),tw=(0,l.K2)(function(t,e){let i={section:K,type:K,description:t,task:t,classes:[]},n=tg(s,e);i.startTime=n.startTime,i.endTime=n.endTime,i.id=n.id,i.active=n.active,i.done=n.done,i.crit=n.crit,i.milestone=n.milestone,i.vert=n.vert,s=i,$.push(i)},"addTaskOrg"),tC=(0,l.K2)(function(){let t=(0,l.K2)(function(t){let e=tx[t],i="";switch(tx[t].raw.startTime.type){case"prevTaskEnd":{let t=t_(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":(i=tf(void 0,g,tx[t].raw.startTime.startData))&&(tx[t].startTime=i)}return tx[t].startTime&&(tx[t].endTime=ty(tx[t].startTime,g,tx[t].raw.endTime.data,I),tx[t].endTime&&(tx[t].processed=!0,tx[t].manualEndTime=d(tx[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),tu(tx[t],g,_,v))),tx[t].processed},"compileTask"),e=!0;for(let[i,s]of tx.entries())t(i),e=e&&s.processed;return e},"compileTasks"),t$=(0,l.K2)(function(t,e){let i=e;"loose"!==(0,o.D7)().securityLevel&&(i=(0,c.sanitizeUrl)(e)),t.split(",").forEach(function(t){void 0!==t_(t)&&(tS(t,()=>{window.open(i,"_self")}),w.set(t,i))}),tK(t,"clickable")},"setLink"),tK=(0,l.K2)(function(t,e){t.split(",").forEach(function(t){let i=t_(t);void 0!==i&&i.classes.push(e)})},"setClass"),tD=(0,l.K2)(function(t,e,i){if("loose"!==(0,o.D7)().securityLevel||void 0===e)return;let s=[];if("string"==typeof i){s=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<s.length;t++){let e=s[t].trim();e.startsWith('"')&&e.endsWith('"')&&(e=e.substr(1,e.length-2)),s[t]=e}}0===s.length&&s.push(t),void 0!==t_(t)&&tS(t,()=>{a._K.runFunc(e,...s)})},"setClickFun"),tS=(0,l.K2)(function(t,e){E.push(function(){let i=A?`${A}-${t}`:t,s=document.querySelector(`[id="${i}"]`);null!==s&&s.addEventListener("click",function(){e()})},function(){let i=A?`${A}-${t}`:t,s=document.querySelector(`[id="${i}-text"]`);null!==s&&s.addEventListener("click",function(){e()})})},"pushFun"),tE=(0,l.K2)(function(t,e,i){t.split(",").forEach(function(t){tD(t,e,i)}),tK(t,"clickable")},"setClickEvent"),tA=(0,l.K2)(function(t){E.forEach(function(e){e(t)})},"bindFunctions"),tI={getConfig:(0,l.K2)(()=>(0,o.D7)().gantt,"getConfig"),clear:P,setDateFormat:G,getDateFormat:Q,enableInclusiveEndDates:H,endDatesAreInclusive:U,enableTopAxis:V,topAxisEnabled:q,setAxisFormat:B,getAxisFormat:R,setTickInterval:Y,getTickInterval:N,setTodayMarker:z,getTodayMarker:j,setAccTitle:o.SV,getAccTitle:o.iN,setDiagramTitle:o.ke,getDiagramTitle:o.ab,setDiagramId:M,setDisplayMode:X,getDisplayMode:J,setAccDescription:o.EI,getAccDescription:o.m7,addSection:tn,getSections:tr,getTasks:ta,addTask:tv,findTaskById:t_,addTaskOrg:tw,setIncludes:Z,getIncludes:tt,setExcludes:te,getExcludes:ti,setClickEvent:tE,setLink:t$,getLinks:ts,bindFunctions:tA,parseDuration:tk,isInvalidDate:to,setWeekday:tl,getWeekday:tc,setWeekend:td};function tO(t,e,i){let s=!0;for(;s;)s=!1,i.forEach(function(i){let n=RegExp("^\\s*"+i+"\\s*$");t[0].match(n)&&(e[i]=!0,t.shift(1),s=!0)})}(0,l.K2)(tO,"getTaskTags"),d.extend(k);var tL=(0,l.K2)(function(){l.Rm.debug("Something is calling, setConf, remove the call")},"setConf"),tF={monday:y.ABi,tuesday:y.PGu,wednesday:y.GuW,thursday:y.Mol,friday:y.TUC,saturday:y.rGn,sunday:y.YPH},tW=(0,l.K2)((t,e)=>{let i=[...t].map(()=>-1/0),s=[...t].sort((t,e)=>t.startTime-e.startTime||t.order-e.order),n=0;for(let t of s)for(let s=0;s<i.length;s++)if(t.startTime>=i[s]){i[s]=t.endTime,t.order=s+e,s>n&&(n=s);break}return n},"getMaxIntersections"),tP={parser:m,db:tI,renderer:{setConf:tL,draw:(0,l.K2)(function(t,e,i,s){let n,a=(0,o.D7)().gantt;s.db.setDiagramId(e);let c=(0,o.D7)().securityLevel;"sandbox"===c&&(n=(0,y.Ltv)("#i"+e));let u="sandbox"===c?(0,y.Ltv)(n.nodes()[0].contentDocument.body):(0,y.Ltv)("body"),h="sandbox"===c?n.nodes()[0].contentDocument:document,f=h.getElementById(e);void 0===(r=f.parentElement.offsetWidth)&&(r=1200),void 0!==a.useWidth&&(r=a.useWidth);let k=s.db.getTasks(),m=[];for(let t of k)m.push(t.type);m=S(m);let p={},g=2*a.topPadding;if("compact"===s.db.getDisplayMode()||"compact"===a.displayMode){let t={};for(let e of k)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(let i of Object.keys(t)){let s=tW(t[i],e)+1;e+=s,g+=s*(a.barHeight+a.barGap),p[i]=s}}else for(let t of(g+=k.length*(a.barHeight+a.barGap),m))p[t]=k.filter(e=>e.type===t).length;f.setAttribute("viewBox","0 0 "+r+" "+g);let T=u.select(`[id="${e}"]`),x=(0,y.w7C)().domain([(0,y.jkA)(k,function(t){return t.startTime}),(0,y.T9B)(k,function(t){return t.endTime})]).rangeRound([0,r-a.leftPadding-a.rightPadding]);function b(t,e){let i=t.startTime,s=e.startTime,n=0;return i>s?n=1:i<s&&(n=-1),n}function v(t,e,i){let n=a.barHeight,r=n+a.barGap,o=a.topPadding,l=a.leftPadding,c=(0,y.m4Y)().domain([0,m.length]).range(["#00B9FA","#F95002"]).interpolate(y.bEH);w(r,o,l,e,i,t,s.db.getExcludes(),s.db.getIncludes()),$(l,o,e,i),_(t,r,o,l,n,c,e,i),K(r,o,l,n,c),D(l,o,e,i)}function _(t,i,n,r,l,c,d){t.sort((t,e)=>t.vert===e.vert?0:t.vert?1:-1);let u=[...new Set(t.map(t=>t.order))].map(e=>t.find(t=>t.order===e));T.append("g").selectAll("rect").data(u).enter().append("rect").attr("x",0).attr("y",function(t,e){return t.order*i+n-2}).attr("width",function(){return d-a.rightPadding/2}).attr("height",i).attr("class",function(t){for(let[e,i]of m.entries())if(t.type===i)return"section section"+e%a.numberSectionStyles;return"section section0"}).enter();let h=T.append("g").selectAll("rect").data(t).enter(),f=s.db.getLinks();if(h.append("rect").attr("id",function(t){return e+"-"+t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?x(t.startTime)+r+.5*(x(t.endTime)-x(t.startTime))-.5*l:x(t.startTime)+r}).attr("y",function(t,e){return(e=t.order,t.vert)?a.gridLineStartPadding:e*i+n}).attr("width",function(t){return t.milestone?l:t.vert?.08*l:x(t.renderEndTime||t.endTime)-x(t.startTime)}).attr("height",function(t){return t.vert?k.length*(a.barHeight+a.barGap)+2*a.barHeight:l}).attr("transform-origin",function(t,e){return e=t.order,(x(t.startTime)+r+.5*(x(t.endTime)-x(t.startTime))).toString()+"px "+(e*i+n+.5*l).toString()+"px"}).attr("class",function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let i=0;for(let[e,s]of m.entries())t.type===s&&(i=e%a.numberSectionStyles);let s="";return t.active?t.crit?s+=" activeCrit":s=" active":t.done?s=t.crit?" doneCrit":" done":t.crit&&(s+=" crit"),0===s.length&&(s=" task"),t.milestone&&(s=" milestone "+s),t.vert&&(s=" vert "+s),s+=i,"task"+(s+=" "+e)}),h.append("text").attr("id",function(t){return e+"-"+t.id+"-text"}).text(function(t){return t.task}).attr("font-size",a.fontSize).attr("x",function(t){let e=x(t.startTime),i=x(t.renderEndTime||t.endTime);if(t.milestone&&(e+=.5*(x(t.endTime)-x(t.startTime))-.5*l,i=e+l),t.vert)return x(t.startTime)+r;let s=this.getBBox().width;return s>i-e?i+s+1.5*a.leftPadding>d?e+r-5:i+r+5:(i-e)/2+e+r}).attr("y",function(t,e){return t.vert?a.gridLineStartPadding+k.length*(a.barHeight+a.barGap)+60:t.order*i+a.barHeight/2+(a.fontSize/2-2)+n}).attr("text-height",l).attr("class",function(t){let e=x(t.startTime),i=x(t.endTime);t.milestone&&(i=e+l);let s=this.getBBox().width,n="";t.classes.length>0&&(n=t.classes.join(" "));let r=0;for(let[e,i]of m.entries())t.type===i&&(r=e%a.numberSectionStyles);let o="";return(t.active&&(o=t.crit?"activeCritText"+r:"activeText"+r),t.done?o=t.crit?o+" doneCritText"+r:o+" doneText"+r:t.crit&&(o=o+" critText"+r),t.milestone&&(o+=" milestoneText"),t.vert&&(o+=" vertText"),s>i-e)?i+s+1.5*a.leftPadding>d?n+" taskTextOutsideLeft taskTextOutside"+r+" "+o:n+" taskTextOutsideRight taskTextOutside"+r+" "+o+" width-"+s:n+" taskText taskText"+r+" "+o+" width-"+s}),"sandbox"===(0,o.D7)().securityLevel){let t=(0,y.Ltv)("#i"+e).nodes()[0].contentDocument;h.filter(function(t){return f.has(t.id)}).each(function(i){var s=t.querySelector("#"+CSS.escape(e+"-"+i.id)),n=t.querySelector("#"+CSS.escape(e+"-"+i.id+"-text"));let r=s.parentNode;var a=t.createElement("a");a.setAttribute("xlink:href",f.get(i.id)),a.setAttribute("target","_top"),r.appendChild(a),a.appendChild(s),a.appendChild(n)})}}function w(t,i,n,r,o,c,u,h){let f,k;if(0===u.length&&0===h.length)return;for(let{startTime:t,endTime:e}of c)(void 0===f||t<f)&&(f=t),(void 0===k||e>k)&&(k=e);if(!f||!k)return;if(d(k).diff(d(f),"year")>5)return void l.Rm.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");let y=s.db.getDateFormat(),m=[],p=null,g=d(f);for(;g.valueOf()<=k;)s.db.isInvalidDate(g,y,u,h)?p?p.end=g:p={start:g,end:g}:p&&(m.push(p),p=null),g=g.add(1,"d");T.append("g").selectAll("rect").data(m).enter().append("rect").attr("id",t=>e+"-exclude-"+t.start.format("YYYY-MM-DD")).attr("x",t=>x(t.start.startOf("day"))+n).attr("y",a.gridLineStartPadding).attr("width",t=>x(t.end.endOf("day"))-x(t.start.startOf("day"))).attr("height",o-i-a.gridLineStartPadding).attr("transform-origin",function(e,i){return(x(e.start)+n+.5*(x(e.end)-x(e.start))).toString()+"px "+(i*t+.5*o).toString()+"px"}).attr("class","exclude-range")}function C(t,e,i,s){if(i<=0||t>e)return 1/0;let n=d.duration({[s??"day"]:i}).asMilliseconds();return n<=0?1/0:Math.ceil((e-t)/n)}function $(t,e,i,n){let r,o=s.db.getDateFormat(),c=s.db.getAxisFormat();r=c||("D"===o?"%d":a.axisFormat??"%Y-%m-%d");let d=(0,y.l78)(x).tickSize(-n+e+a.gridLineStartPadding).tickFormat((0,y.DCK)(r)),u=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||a.tickInterval);if(null!==u){let t=parseInt(u[1],10);if(isNaN(t)||t<=0)l.Rm.warn(`Invalid tick interval value: "${u[1]}". Skipping custom tick interval.`);else{let e=u[2],i=s.db.getWeekday()||a.weekday,n=x.domain(),r=C(n[0],n[1],t,e);if(r>1e4)l.Rm.warn(`The tick interval "${t}${e}" would generate ${r} ticks, which exceeds the maximum allowed (10000). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(e){case"millisecond":d.ticks(y.t6C.every(t));break;case"second":d.ticks(y.ucG.every(t));break;case"minute":d.ticks(y.wXd.every(t));break;case"hour":d.ticks(y.Agd.every(t));break;case"day":d.ticks(y.UAC.every(t));break;case"week":d.ticks(tF[i].every(t));break;case"month":d.ticks(y.Ui6.every(t))}}}if(T.append("g").attr("class","grid").attr("transform","translate("+t+", "+(n-50)+")").call(d).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||a.topAxis){let i=(0,y.tlR)(x).tickSize(-n+e+a.gridLineStartPadding).tickFormat((0,y.DCK)(r));if(null!==u){let t=parseInt(u[1],10);if(isNaN(t)||t<=0)l.Rm.warn(`Invalid tick interval value: "${u[1]}". Skipping custom tick interval.`);else{let e=u[2],n=s.db.getWeekday()||a.weekday,r=x.domain();if(1e4>=C(r[0],r[1],t,e))switch(e){case"millisecond":i.ticks(y.t6C.every(t));break;case"second":i.ticks(y.ucG.every(t));break;case"minute":i.ticks(y.wXd.every(t));break;case"hour":i.ticks(y.Agd.every(t));break;case"day":i.ticks(y.UAC.every(t));break;case"week":i.ticks(tF[n].every(t));break;case"month":i.ticks(y.Ui6.every(t))}}}T.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function K(t,e){let i=0,s=Object.keys(p).map(t=>[t,p[t]]);T.append("g").selectAll("text").data(s).enter().append(function(t){let e=t[0].split(o.Y2.lineBreakRegex),i=-(e.length-1)/2,s=h.createElementNS("http://www.w3.org/2000/svg","text");for(let[t,n]of(s.setAttribute("dy",i+"em"),e.entries())){let e=h.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=n,s.appendChild(e)}return s}).attr("x",10).attr("y",function(n,r){if(!(r>0))return n[1]*t/2+e;for(let a=0;a<r;a++)return i+=s[r-1][1],n[1]*t/2+i*t+e}).attr("font-size",a.sectionFontSize).attr("class",function(t){for(let[e,i]of m.entries())if(t[0]===i)return"sectionTitle sectionTitle"+e%a.numberSectionStyles;return"sectionTitle"})}function D(t,e,i,n){let r=s.db.getTodayMarker();if("off"===r)return;let o=T.append("g").attr("class","today"),l=new Date,c=o.append("line");c.attr("x1",x(l)+t).attr("x2",x(l)+t).attr("y1",a.titleTopMargin).attr("y2",n-a.titleTopMargin).attr("class","today"),""!==r&&c.attr("style",r.replace(/,/g,";"))}function S(t){let e={},i=[];for(let s=0,n=t.length;s<n;++s)Object.prototype.hasOwnProperty.call(e,t[s])||(e[t[s]]=!0,i.push(t[s]));return i}(0,l.K2)(b,"taskCompare"),k.sort(b),v(k,r,g),(0,o.a$)(T,g,r,a.useMaxWidth),T.append("text").text(s.db.getDiagramTitle()).attr("x",r/2).attr("y",a.titleTopMargin).attr("class","titleText"),(0,l.K2)(v,"makeGantt"),(0,l.K2)(_,"drawRects"),(0,l.K2)(w,"drawExcludeDays"),(0,l.K2)(C,"getEstimatedTickCount"),(0,l.K2)($,"makeGrid"),(0,l.K2)(K,"vertLabels"),(0,l.K2)(D,"drawToday"),(0,l.K2)(S,"checkUnique")},"draw")},styles:(0,l.K2)(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar \u2014 same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles")}}}]);