"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([["81374"],{43861(e,t,a){function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{S:()=>i}),(0,a(37616).K2)(i,"populateCommonDb")},48365(e,t,a){a.d(t,{diagram:()=>C});var i=a(43861),l=a(98045),r=a(10163),s=a(37616),o=a(78731),n=a(97607),c=s.UI.pie,p={sections:new Map,showData:!1,config:c},d=p.sections,u=p.showData,g=structuredClone(c),f=(0,s.K2)(()=>structuredClone(g),"getConfig"),h=(0,s.K2)(()=>{d=new Map,u=p.showData,(0,s.IU)()},"clear"),m=(0,s.K2)(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);d.has(e)||(d.set(e,t),s.Rm.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),x=(0,s.K2)(()=>d,"getSections"),w=(0,s.K2)(e=>{u=e},"setShowData"),S=(0,s.K2)(()=>u,"getShowData"),$={getConfig:f,clear:h,setDiagramTitle:s.ke,getDiagramTitle:s.ab,setAccTitle:s.SV,getAccTitle:s.iN,setAccDescription:s.EI,getAccDescription:s.m7,addSection:m,getSections:x,setShowData:w,getShowData:S},D=(0,s.K2)((e,t)=>{(0,i.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),T={parse:(0,s.K2)(async e=>{let t=await (0,o.qg)("pie",e);s.Rm.debug(t),D(t,$)},"parse")},v=(0,s.K2)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),y=(0,s.K2)(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),a=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1).sort((e,t)=>t.value-e.value);return(0,n.rLf)().value(e=>e.value)(a)},"createPieArcs"),C={parser:T,db:$,renderer:{draw:(0,s.K2)((e,t,a,i)=>{s.Rm.debug("rendering pie chart\n"+e);let o=i.db,c=(0,s.D7)(),p=(0,l.$t)(o.getConfig(),c.pie),d=(0,r.D)(t),u=d.append("g");u.attr("transform","translate(225,225)");let{themeVariables:g}=c,[f]=(0,l.I5)(g.pieOuterStrokeWidth);f??=2;let h=p.textPosition,m=(0,n.JLW)().innerRadius(0).outerRadius(185),x=(0,n.JLW)().innerRadius(185*h).outerRadius(185*h);u.append("circle").attr("cx",0).attr("cy",0).attr("r",185+f/2).attr("class","pieOuterCircle");let w=o.getSections(),S=y(w),$=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],D=0;w.forEach(e=>{D+=e});let T=S.filter(e=>"0"!==(e.data.value/D*100).toFixed(0)),v=(0,n.UMr)($);u.selectAll("mySlices").data(T).enter().append("path").attr("d",m).attr("fill",e=>v(e.data.label)).attr("class","pieCircle"),u.selectAll("mySlices").data(T).enter().append("text").text(e=>(e.data.value/D*100).toFixed(0)+"%").attr("transform",e=>"translate("+x.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let C=[...w.entries()].map(([e,t])=>({label:e,value:t})),b=u.selectAll(".legend").data(C).enter().append("g").attr("class","legend").attr("transform",(e,t)=>"translate(216,"+(22*t-22*C.length/2)+")");b.append("rect").attr("width",18).attr("height",18).style("fill",e=>v(e.label)).style("stroke",e=>v(e.label)),b.append("text").attr("x",22).attr("y",14).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);let k=512+Math.max(...b.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));d.attr("viewBox",`0 0 ${k} 450`),(0,s.a$)(d,450,k,p.useMaxWidth)},"draw")},styles:v}}}]);