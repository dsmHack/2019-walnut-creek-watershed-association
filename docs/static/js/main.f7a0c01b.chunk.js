(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,n){e.exports=n(323)},131:function(e,t,n){},168:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){},228:function(e,t,n){},231:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},321:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),c=n.n(i),o=(n(131),n(41)),s=n(114),l=n(125),u=n(115),d=n(124),p=n(15),m=n(29),f=n(117),h=n(118),g=n(18),y="ADD_ADDRESS",v="SHOW_MODAL",b="HIDE_MODAL",w="DISPLAY_UI",E={address:"",showAddressModal:!0,displayUi:!1},L={addAddress:function(e){return{type:y,payload:e}},showModal:function(){return{type:v}},hideModal:function(){return{type:b}},displayUi:function(){return{type:w}}};var N="FISH_LAYER",O="DRINKING_LAYER",k="SWIMMING_LAYER",M={fish:N,drinking:O,swimming:k},I={selectedLayer:O};function S(e,t){return Object(g.a)({},e,{selectedLayer:t})}var D=n(9),j=n.n(D),P=n(20),x=n(24),R=n.n(x),T="https://programs.iowadnr.gov/bionet/api/v1/sites/by_huc8/",A="https://programs.iowadnr.gov/bionet/api/v1/fish/fibi/by_site/",_="https://www.waterqualitydata.us/data/Station/search?",B="https://www.waterqualitydata.us/data/Result/search?",F="She get wet",H="Address not found",C="Watershed not found",U="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates",G="https://inlandwaters.geoplatform.gov/arcgis/rest/services/NHDPlus/WatershedBoundaryDataset/MapServer/10/query";function W(){return(W=Object(P.a)(j.a.mark(function e(t){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=U,e.abrupt("return",R.a.get(n,{params:{outFields:"Loc_name,City,Place_addr,Region,RegionAbbr,Country",outSR:{latestWkid:3857,wkid:102100},f:"json",SingleLine:t}}).then(function(e){if("undefined"===typeof e.data.candidates[0])return Promise.reject(H);var t=e.data.candidates[0];return{spatialReference:e.data.spatialReference,x:t.location.x,y:t.location.y}}).then(function(e){return V(e)}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function V(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(P.a)(j.a.mark(function e(t){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=G,e.abrupt("return",R.a.get(n,{params:{f:"json",outFields:"HUC12",spatialRel:"esriSpatialRelIntersects",where:"1=1",geometryType:"esriGeometryPoint",inSR:"102100",outSR:"102100",geometry:t}}).then(function(e){return"undefined"===typeof e.data.features[0]?Promise.reject(C):e.data.features[0].attributes.HUC12}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var z=function(e){return W.apply(this,arguments)};function q(){return(q=Object(P.a)(j.a.mark(function e(t,n){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://watersgeo.epa.gov/arcgis/rest/services/NHDPlus_NP21/WBD_NP21_Simplified/MapServer/find?searchText="+t+"&contains=true&searchFields=&sr=&layers="+n+"&layerDefs=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&dynamicLayers=&returnZ=false&returnM=false&gdbVersion=&returnUnformattedValues=false&returnFieldName=false&datumTransformations=&layerParameterValues=&mapRangeValues=&layerRangeValues=&f=pjson",e.abrupt("return",R.a.get(a).then(function(e){return e}).catch(function(e){return console.log(e),"will the water kill me?"}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var J=function(e,t){return q.apply(this,arguments)},K=function e(){Object(o.a)(this,e),this.name="",this.unit="",this.value=0,this.date="",this.locId=""},Q=function e(){Object(o.a)(this,e),this.locId="",this.name="",this.lat=0,this.long=0,this.datas=[]};function Z(){return(Z=Object(P.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"Escherichia%20coli"));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function X(){return(X=Object(P.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$(t,"Nitrate"));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function $(e,t){return ee.apply(this,arguments)}function ee(){return(ee=Object(P.a)(j.a.mark(function e(t,n){var a,r,i,c,o,s,l,u,d,p,m;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(t,n);case 2:return a=e.sent,r=te(a.data),e.next=6,oe(t,n);case 6:for(i=e.sent,c=ae(i.data),o=!0,s=!1,l=void 0,e.prev=11,u=c.keys()[Symbol.iterator]();!(o=(d=u.next()).done);o=!0)p=d.value,void 0!==(m=r.get(p))&&c.get(p).datas.push(m);e.next=19;break;case 15:e.prev=15,e.t0=e.catch(11),s=!0,l=e.t0;case 19:e.prev=19,e.prev=20,o||null==u.return||u.return();case 22:if(e.prev=22,!s){e.next=25;break}throw l;case 25:return e.finish(22);case 26:return e.finish(19);case 27:return e.abrupt("return",c);case 28:case"end":return e.stop()}},e,null,[[11,15,19,27],[20,,22,26]])}))).apply(this,arguments)}function te(e){var t=(new DOMParser).parseFromString(e,"text/xml").getElementsByTagName("Activity"),n=new Map,a=!0,r=!1,i=void 0;try{for(var c,o=function(){var e=c.value,t=new K,a=function(t){var n=e.getElementsByTagName(t)[0];return void 0===n?null:n.childNodes[0].nodeValue};t.name=a("CharacteristicName"),t.locId=a("MonitoringLocationIdentifier"),t.date=a("ActivityStartDate"),t.value=a("ResultMeasureValue"),t.unit=a("MeasureUnitCode");var r=n[t.locId];(null==r||Date.parse(t.date)>Date.parse(r.date))&&n.set(t.locId,t)},s=t[Symbol.iterator]();!(a=(c=s.next()).done);a=!0)o()}catch(l){r=!0,i=l}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}function ne(){return(ne=Object(P.a)(j.a.mark(function e(t){var n,a,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,a="",null!=n&&null!=n.results&&n.results.length>0&&null!=n.results[0].geometryType&&"esriGeometryPolygon"===n.results[0].geometryType&&n.results[0].geometry.rings[0].forEach(function(e){a+=e[0]+","+e[1]+";"}),a=a.substring(0,a.length-1),r="https://epsg.io/trans?data=".concat(a,"&s_srs=3857&t_srs=4326"),e.next=7,R.a.get(r).catch(function(e){console.log(e)});case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ae(e){var t=(new DOMParser).parseFromString(e,"text/xml").getElementsByTagName("MonitoringLocation"),n=[],a=!0,r=!1,i=void 0;try{for(var c,o=function(){var e=c.value,t=new Q,a=function(t){var n=e.getElementsByTagName(t)[0];return void 0===n?null:n.childNodes[0].nodeValue};t.locId=a("MonitoringLocationIdentifier"),t.name=a("MonitoringLocationName"),t.lat=a("LatitudeMeasure"),t.long=a("LongitudeMeasure");var r=n[t.locId];(null==r||Date.parse(t.date)>Date.parse(r.date))&&n.push(t)},s=t[Symbol.iterator]();!(a=(c=s.next()).done);a=!0)o()}catch(l){r=!0,i=l}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}function re(){return(re=Object(P.a)(j.a.mark(function e(t){var n,a,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=12===t.length,a=t.substring(0,8),r=T,e.abrupt("return",R.a.get(r+a).then(function(e){return e.data}).then(function(e){if(n){var a=e.filter(function(e){return e.huc12===t});return Promise.resolve(a)}return Promise.resolve(e)}).then(function(e){return e.map(function(e){return e.id})}).then(function(e){return Promise.all(e.map(ie))}).catch(function(e){return console.log(e),F}));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ie(e){return ce.apply(this,arguments)}function ce(){return(ce=Object(P.a)(j.a.mark(function e(t){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=A,e.abrupt("return",R.a.get(n+t).then(function(e){return e.data}).then(function(e){return e.sort(function(e,t){return new Date(t.sampleDate)-new Date(e.sampleDate)})}).then(function(e){return e[0]}).then(function(e){var t=new Q;t.name=e.site.name+" - "+e.site.landmark,t.lat=e.site.LatDD,t.long=e.site.LongDD;var n=new K;return n.name="FIBI",n.unit="rating",n.value=e.FIBI,n.type=e.FIBIType,n.class=e.FIBIClass,n.date=e.sampleDate,t.datas.push(n),t}).catch(function(e){console.log(e)}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function oe(e,t){return se.apply(this,arguments)}function se(){return(se=Object(P.a)(j.a.mark(function e(t,n){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=_+"startDate=".concat(de(),"&huc=").concat(t,"&mimeType=xml&characteristicName=").concat(n),e.abrupt("return",R.a.get(a).then(function(e){return e}).catch(function(e){return F}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function le(e,t){return ue.apply(this,arguments)}function ue(){return(ue=Object(P.a)(j.a.mark(function e(t,n){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=B+"startDate=".concat(de(),"&huc=").concat(t,"&mimeType=xml&characteristicName=").concat(n),e.abrupt("return",R.a.get(a).then().catch(function(e){console.log(e)}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function de(){var e=new Date;return e.setMonth(e.getMonth()-2),e.toLocaleDateString().replace(/\//g,"-")}function pe(){return(pe=Object(P.a)(j.a.mark(function e(t,n){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}))).apply(this,arguments)}var me={getEcoliData:function(e){return Z.apply(this,arguments)},getNitrateData:function(e){return X.apply(this,arguments)},getFibiData:function(e){return re.apply(this,arguments)},getEpaStations:oe,getSampleResults:le,getHuc:function(e,t){return pe.apply(this,arguments)},convertEsriGeometryPolygonToLatLngList:function(e){return ne.apply(this,arguments)}},fe="GET_NITRATE_POINTS",he="GET_ECOLI_POINTS",ge="GET_FIBI_POINTS",ye={getNitratePoints:function(e,t){var n=this;me.getNitrateData(e).then(function(a){t({type:fe,payload:a}),n.getEcoliPoints(e,t)}).catch(function(e){ve(t,e)})},getEcoliPoints:function(e,t){var n=this;me.getEcoliData(e).then(function(a){t({type:he,payload:a}),n.getFibiPoints(e,t)}).catch(function(e){ve(t,e)})},getFibiPoints:function(e,t){me.getFibiData(e).then(function(e){t({type:ge,payload:e})}).catch(function(e){ve(t,e)})}};function ve(e,t){console.log("Get Data Points Error: ",t),e({type:"SHOW_MODAL"})}var be="GET_HUC",we="GET_HUC_BORDER",Ee="CONVERT_HUC",Le={hucId:"",hucBorder:{},latLongs:[],coords:[]},Ne={getHuc:function(e){var t=this;return function(n){z(e).then(function(e){n({type:be,payload:e}),t.getHucBorder(e),ye.getNitratePoints(e,n)}).catch(function(e){Oe(n,e)})}},getHucBorder:function(e){var t=this;return function(n){J(e,"huc_12").then(function(e){n({type:we,payload:e}),t.convertHucToLatLong(e)}).catch(function(e){Oe(n,e)})}},convertHucToLatLong:function(e){return function(t){me.convertEsriGeometryPolygonToLatLngList(e).then(function(e){var n=e.data,a=function(e){for(var t=[],n=0;n<e.length;n++)t.push({lat:Number(e[n].y),lng:Number(e[n].x)});return t}(n);t({type:Ee,payload:{latLongs:n,coords:a}})}).catch(function(e){Oe(t,e)})}}};function Oe(e,t){console.log("Get Huc Info Error: ",t),e({type:"SHOW_MODAL"})}var ke=Object(m.combineReducers)({address:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case y:return Object(g.a)({},e,{address:a});case v:return Object(g.a)({},e,{showAddressModal:!0});case b:return Object(g.a)({},e,{showAddressModal:!1});case w:return Object(g.a)({},e,{displayUi:!0});default:return e}},layer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(t.payload,n){case N:return S(e,N);case O:return S(e,O);case k:return S(e,k);default:return e}},huc:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case be:return Object(g.a)({},e,{hucId:a});case we:return Object(g.a)({},e,{hucBorder:a});case Ee:return Object(g.a)({},e,{latLongs:a.latLongs,coords:a.coords});default:return e}},dataPoints:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case fe:return Object(g.a)({},e,{nitratePoints:a});case he:return Object(g.a)({},e,{ecoliPoints:a});case ge:return Object(g.a)({},e,{fibiPoints:a});default:return e}}}),Me=[h.a],Ie=Object(m.createStore)(ke,{},Object(f.composeWithDevTools)(m.applyMiddleware.apply(void 0,Me))),Se=n(42),De=n(34),je=n(119),Pe=n.n(je),xe=(n(168),function(e){var t=e.title;return r.a.createElement("div",{className:"header"},r.a.createElement(Pe.a,{position:"static"},r.a.createElement("label",null,t)))}),Re="FISH_LAYER",Te="SWIMMING_LAYER",Ae="DRINKING_LAYER";n(222);var _e=Object(p.b)(function(e){return{nitratePoints:e.dataPoints.nitratePoints,ecoliPoints:e.dataPoints.ecoliPoints,fibiPoints:e.dataPoints.fibiPoints,coordinatesList:e.huc.coords,selectedLayer:e.layer.selectedLayer}})(function(e){var t=[],n=!0,a=[];function i(){if(void 0!==(a=function(){switch(e.selectedLayer){case Te:return e.ecoliPoints;case Ae:return e.nitratePoints;case Re:return e.fibiPoints;default:return[]}}())&&a!==[]){t=[];var n=!0,i=!1,c=void 0;try{for(var o,s=a[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value;t.push((u=l,r.a.createElement(Se.Marker,{key:u.locId,position:{lat:u.lat,lng:u.long},icon:{url:"/images/low.png",anchor:new window.google.maps.Point(24,24),scaledSize:new window.google.maps.Size(48,48)}})))}}catch(d){i=!0,c=d}finally{try{n||null==s.return||s.return()}finally{if(i)throw c}}t.length}var u}return r.a.createElement(Se.Map,{className:"map",disableDefaultUI:!0,google:e.google,zoom:13,initialCenter:{lat:41.583586,lng:-93.628419}},r.a.createElement(Se.Polygon,{paths:e.coordinatesList,strokeColor:"#0000FF",strokeOpacity:.8,strokeWeight:2,fillColor:"#0000FF",fillOpacity:.35}),function(){if(n&&i(),t.length>0)return t}())}),Be=n(54),Fe=n(23),He=n.n(Fe),Ce=n(25),Ue=n.n(Ce),Ge=n(30),We=n.n(Ge),Ve=n(17),Ye=n.n(Ve),ze=(n(223),function(e){var t=e.ranking,n=e.score,a=e.icon;return r.a.createElement("div",{className:"row"},r.a.createElement(Ye.a,{className:"text"},t),r.a.createElement(Ye.a,{className:"text"},n),r.a.createElement("img",{className:"icon",src:a,alt:"scoreIconImage"}))});var qe=function(e){switch(e){case Te:return{Title:"Risk Per 100 mL:",High:{Ranking:"High,",Score:"Over 235",icon:"/images/high.png"},Med:{Ranking:"Medium,",Score:"Over 126",icon:"/images/med.png"},Low:{Ranking:"Low,",Score:"Under 126",icon:"/images/low.png"}};case Re:return{Title:"Diversity",High:{Ranking:"High,",Score:"Over 235",icon:"/images/low.png"},Med:{Ranking:"Medium,",Score:"Over 126",icon:"/images/med.png"},Low:{Ranking:"Low,",Score:"Under 126",icon:"/images/high.png"}};default:return{Title:"Pollution mg/L:",High:{Ranking:"Safe,",Score:"0-5",icon:"/images/low.png"},Med:{Ranking:"Polluted,",Score:"6-10",icon:"/images/med.png"},Low:{Ranking:"Extreme,",Score:"Over 10",icon:"/images/high.png"}}}},Je=Object(p.b)(function(e){return{selectedLayer:e.layer.selectedLayer}})(function(e){var t=qe(e.selectedLayer);return r.a.createElement(He.a,{className:"legend"},r.a.createElement(We.a,{className:"title",title:t.Title}),r.a.createElement(Ue.a,null,r.a.createElement(ze,{ranking:t.High.Ranking,score:t.High.Score,icon:t.High.icon}),r.a.createElement(ze,{ranking:t.Med.Ranking,score:t.Med.Score,icon:t.Med.icon}),r.a.createElement(ze,{ranking:t.Low.Ranking,score:t.Low.Score,icon:t.Low.icon})))}),Ke={section1:{title:"Levels: ",description:"Nitrate levels reflect risks to human health from long-term ingestion of tap water"},section2:{title:"Standard: ",description:"The EPA sets national drinking water standards.",learnMoreLinks:["",""],descriptionPart2:"University of Iowa researched health risks for women."},section3:{title:"Users: ",description:"Municipal water works and wells"}},Qe={section1:{title:"Levels: ",description:"E. Coli levels reflect risks to human health from skin exposure and limited ingestion."},section2:{title:"Standard: ",description:"The Iowa DNR tests E. Coli levels. Five consecutive samples over 126 per mL or one sample over 235 consitute an advisory.",learnMoreLinks:[""]},section3:{title:"Users: ",description:"Swimmins, canoers, and kayakers"}},Ze={section1:{title:"Diversity: ",description:"FIBI scores reflect aquatic diversity which supports other area wildlife populations."},section2:{title:"Standard: ",description:"The Iowa DNR calculates FIBI and BMIBI scores for different eco-regions roughly every three years.",learnMoreLinks:[""]},section3:{title:"Users: ",description:"Anglers, hunters, and birders."}};n(228);var Xe=function(e){switch(e){case Te:return Qe;case Re:return Ze;case Ae:default:return Ke}},$e=Object(p.b)(function(e){return{selectedLayer:e.layer.selectedLayer}})(function(e){var t=Xe(e.selectedLayer);return r.a.createElement(He.a,{className:"description-container"},r.a.createElement(Ue.a,null,r.a.createElement("div",{className:"section"},r.a.createElement(Ye.a,{className:"title",variant:"h6"},t.section1.title),r.a.createElement(Ye.a,{className:"description"},t.section1.description)),r.a.createElement("div",{className:"section"},r.a.createElement(Ye.a,{className:"title",variant:"h6"},t.section2.title),r.a.createElement(Ye.a,{className:"description"},t.section2.description)),r.a.createElement("div",{className:"section"},r.a.createElement(Ye.a,{className:"title",variant:"h6"},t.section3.title),r.a.createElement(Ye.a,{className:"description"},t.section3.description))))}),et=n(33),tt=n.n(et),nt=n(31),at=n(32);n(231);var rt=Object(p.b)(function(e){return{selectedLayer:e.selectedLayer}})(function(e){var t=Object(a.useState)(!1),n=Object(Be.a)(t,2),i=n[0],c=n[1];return r.a.createElement("div",{className:"container-right"},r.a.createElement(Je,null),r.a.createElement(tt.a,{variant:"contained",className:"button",onClick:function(){c(!i)}},r.a.createElement(nt.a,{icon:at.a})),function(e){if(e)return r.a.createElement($e,null)}(i))});var it=Object(p.b)(function(e){return{selectedLayer:e.layer.selectedLayer}})(function(e){return r.a.createElement(He.a,null,r.a.createElement(We.a,{title:function(e){switch(e){case Ae:return"Nitrates";case Te:return"E. Coli";case Re:return"FIBI Scores";default:return"No layer selected"}}(e.selectedLayer)}))}),ct="A single data point can never give a full picture of water quality",ot={warning:ct,section1:{title:"Metric: ",description:"Nitrates can be a nutrient or a pollutant. Potable tap water has Max Contaminant Levels from ingestion over long periods of time. This is NOT the same as limited ingestion from recreating in bodies of water.",learnMoreLink:""},section2:{title:"Other Metrics: ",description:"Phosphates",learnMoreLink:""}},st={warning:ct,section1:{title:"Metric: ",description:"Escherichia coli(E.coli) bacteria occurs naturally in the body, so is not necessarily disease-causing. High levels are used to conservatively test the likelihood of an infectious dose for human health.",learnMoreLink:""},section2:{title:"Other Metrics: ",description:"Coliform bacteria.",learnMoreLink:""}},lt={warning:ct,section1:{title:"Metric: ",description:"Fish Index of Biotic Integrity(FIBI) scores are a composite index combining twelve metrics for a community-level assessment of stream biological conditions.",learnMoreLink:""},section2:{title:"Other Metrics: ",description:"Benthic Macroinvertebrate(BMIBI) scores can predict changes to FIBI scores.",learnMoreLink:""}};n(246);var ut=function(e){switch(e){case Te:return st;case Re:return lt;case Ae:default:return ot}},dt=Object(p.b)(function(e){return{selectedLayer:e.layer.selectedLayer}})(function(e){var t=ut(e.selectedLayer);return r.a.createElement(He.a,{className:"description-container"},r.a.createElement(Ue.a,null,r.a.createElement(Ye.a,null,t.warning),r.a.createElement("div",{className:"section"},r.a.createElement(Ye.a,{className:"title",variant:"h6"},t.section1.title),r.a.createElement(Ye.a,{className:"description"},t.section1.description)),r.a.createElement("div",{className:"section"},r.a.createElement(Ye.a,{className:"title",variant:"h6"},t.section2.title),r.a.createElement(Ye.a,{className:"description"},t.section2.description))))});n(247);var pt=Object(p.b)(function(e){return{selectedLayer:e.selectedLayer}})(function(e){var t=Object(a.useState)(!1),n=Object(Be.a)(t,2),i=n[0],c=n[1];return r.a.createElement("div",{className:"container-left"},r.a.createElement(it,null),r.a.createElement(tt.a,{variant:"contained",className:"button",onClick:function(){c(!i)}},r.a.createElement(nt.a,{icon:at.b})),function(e){if(e)return r.a.createElement(dt,null)}(i))}),mt=n(121),ft=n.n(mt),ht=n(120),gt=n.n(ht);n(248);var yt=Object(g.a)({},L,Ne),vt=Object(p.b)(function(e){return{address:e.address.address,showAddressModal:e.address.showAddressModal}},yt)(function(e){return r.a.createElement(He.a,{className:"modal",style:e.showAddressModal?{display:"block"}:{display:"none"}},r.a.createElement(We.a,{className:"title",title:"TYPE YOUR ADDRESS"}),r.a.createElement(Ue.a,null,r.a.createElement(gt.a,{className:"address",type:"text",onChange:function(t){e.addAddress(t.target.value)},placeholder:"Enter Address Here..."})),r.a.createElement(ft.a,null,r.a.createElement(tt.a,{className:"nextButton",size:"medium",variant:"contained",color:"primary",onClick:function(){e.getHuc(e.address),e.hideModal(),e.displayUi()}},"NEXT"),";"))}),bt=n(56),wt=n.n(bt),Et=n(122),Lt=n.n(Et),Nt=n(55),Ot=n.n(Nt),kt=n(75),Mt=n.n(kt);var It=Object(p.b)(function(e){return{selectedLayer:e.layer.selectedLayer}},{selectLayer:function(e){return{type:e}}})(Object(De.withStyles)(function(){return{title:{"padding-bottom":0,"padding-left":"5px","padding-right":"5px","padding-top":"5px"},layerSelection:{position:"fixed",bottom:0},cardContainer:{"text-align":"left"},radioGroup:{"text-align":"left"}}})(function(e){var t=e.classes;return r.a.createElement(He.a,{className:t.layerSelection},r.a.createElement(We.a,{className:t.title,title:"Select activity of interest:"}),r.a.createElement(Ue.a,{className:t.cardContainer},r.a.createElement(Mt.a,{component:"fieldset"},r.a.createElement(Lt.a,{"aria-label":"Activity",name:"activity_type",value:e.selectedLayer,onChange:function(t){e.selectLayer(t.target.value)}},r.a.createElement("div",{className:t.radioGroup},r.a.createElement(Ot.a,{value:M.fish,control:r.a.createElement(wt.a,null),label:"Fishing",checked:e.selectedLayer===M.fish}),r.a.createElement(nt.a,{icon:at.c})),r.a.createElement("div",{className:t.radioGroup},r.a.createElement(Ot.a,{value:M.swimming,control:r.a.createElement(wt.a,null),label:"Swimming",checked:e.selectedLayer===M.swimming}),r.a.createElement(nt.a,{icon:at.e})),r.a.createElement("div",{className:t.radioGroup},r.a.createElement(Ot.a,{value:M.drinking,control:r.a.createElement(wt.a,null),label:"Drinking",checked:e.selectedLayer===M.drinking}),r.a.createElement(nt.a,{icon:at.d}))))))}));var St=Object(p.b)(function(e){return{displayUi:e.address.displayUi}})(function(e){return r.a.createElement("div",{className:"main"},r.a.createElement(xe,{title:"Find Water Quality Data Near Me"}),r.a.createElement(_e,{google:e.google}),function(){if(e.displayUi)return r.a.createElement("div",null,r.a.createElement(It,null),r.a.createElement(rt,{displayDescription:!1}),r.a.createElement(pt,{displayDescription:!1}))}(),r.a.createElement(vt,null))}),Dt=n(123),jt=n.n(Dt),Pt=Object(De.createMuiTheme)({palette:{primary:jt.a,secondary:{main:"#84ffff"}},typography:{useNextVariants:!0}}),xt=(n(321),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:Ie},r.a.createElement(De.MuiThemeProvider,{theme:Pt},r.a.createElement("div",{className:"App"},r.a.createElement(St,this.props))))}}]),t}(a.Component)),Rt=Object(Se.GoogleApiWrapper)({apiKey:"AIzaSyBbQM-FxetsrzMqbJ2xzZbcbDUb9Au4nh4"})(xt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(322);c.a.render(r.a.createElement(Rt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[126,1,2]]]);
//# sourceMappingURL=main.f7a0c01b.chunk.js.map