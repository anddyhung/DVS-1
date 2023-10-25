"use strict";(self.webpackChunkmantis_react_ts=self.webpackChunkmantis_react_ts||[]).push([[395],{45971:function(e,n,t){var i=t(75208),r=t(46999),l=t(37796),s=t(31417),a=t(76460),o=t(95590),c=t(81129),d=t(74202),u=t(81756),x=t(65974),h=t(25536),Z=t(23712),v=(0,d.Z)((function(){var e=(0,u.ZP)();return{link:{color:e.palette.secondary.darker,transition:"color 0.3s","&:hover":{color:e.palette.primary.dark},fontSize:"20px"},active:{color:e.palette.primary.dark,transition:"color 0.3s",fontSize:"20px"}}}));n.Z=function(e){var n=[];"expert"===e.role?n=[{id:1,text:"My Profile",url:"/expert/profile"},{id:2,text:"My Content",url:"/expert/mycontent"},{id:3,text:"User Settings",url:"/expert/usersettings"},{id:4,text:"Payment Settings",url:"/expert/paymentsettings"},{id:5,text:"Notification Settings",url:"/expert/notificationsettings"},{id:6,text:"Support Center",url:"/expert/supportcenter"}]:"customer"===e.role&&(n=[{id:1,text:"My Profile",url:"/client/profile"},{id:2,text:"Startup Details",url:"/client/startup-details"},{id:3,text:"Account Settings",url:"/client/accountsettings"},{id:4,text:"Payment Settings",url:"/client/paymentsettings"},{id:5,text:"Notification Settings",url:"/client/notificationsettings"},{id:6,text:"Support Center",url:"/client/supportcenter"}]);var t=v(),d=(0,x.TH)().pathname;return(0,Z.jsx)(i.Z,{style:{display:"flex",flexDirection:"column",width:"100%",height:"100vh"},children:(0,Z.jsx)(r.Z,{children:(0,Z.jsx)(l.Z,{children:(0,Z.jsx)(s.Z,{sx:{width:"100%"},children:n.map((function(e){var n=e.url===d?t.active:t.link;return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(a.ZP,{sx:{py:2},children:(0,Z.jsx)(o.Z,{component:h.rU,to:e.url,className:n,style:{textDecoration:"none"},children:e.text})}),(0,Z.jsx)(c.Z,{})]},e.id)}))})})})})}},40395:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var i=t(18489),r=t(50678),l=t(93265),s=t(12600),a=t(37796),o=t(99498),c=t(95590),d=t(16867),u=t(81660),x=t(85061),h=t(71027),Z=t(82872),v=t(59394),g=t(64391),f=t(41959),j=t(81756),m=t(3522),p=t(36702),y=t(7320),S=t(88391),C=t(5180),P=t(75208),b=t(23712);function k(){var e=(0,j.ZP)();return(0,b.jsxs)(P.Z,{sx:{display:"flex",flexDirection:"column",width:"100%",aspectRatio:"1",alignItems:"center",justifyContent:"center",backgroundColor:e.palette.secondary.lighter},children:[(0,b.jsx)(P.Z,{sx:{display:"flex",width:"50%",aspectRatio:"1",alignItems:"center",justifyContent:"center",backgroundColor:e.palette.secondary.light}}),(0,b.jsxs)(a.Z,{sx:{alignItems:"center",marginTop:"0.5rem"},children:[(0,b.jsx)(c.Z,{variant:"h4",children:"Company Logo"}),(0,b.jsx)(c.Z,{variant:"h5",children:"Guidlines"})]})]})}var w=t(45971),z=t(10723),I=t(67198),E=t(21756),O=t(41975),T=t(20438),D=t(66732),R=function(){var e=(0,j.ZP)();(0,S.useEffect)((function(){(0,O.WI)((0,D.Km)()),(0,O.WI)((0,D.VU)())}));var n=(0,O.v9)((function(e){return e.settings.organizationSetting})),t=(0,O.v9)((function(e){return e.jobs.areasOfExpertise})),P=(0,O.v9)((function(e){return e.jobs.industries})),R=["Insurance","Software Engineering","IT & Tech"],M=["Insurance","Software Engineering","IT & Tech"],N=["1-5","5-10","10-20","20-50","50-100","100+"],W=(0,S.useState)(null===n||void 0===n?void 0:n.organizationName),L=(0,r.Z)(W,2),_=L[0],A=L[1],B=(0,S.useState)([]),U=(0,r.Z)(B,2),G=U[0],H=U[1],V=(0,S.useState)(null===n||void 0===n?void 0:n.dayOfRegisteration),F=(0,r.Z)(V,2),K=F[0],$=F[1],q=(0,S.useState)(null===n||void 0===n?void 0:n.revenue),J=(0,r.Z)(q,2),Q=J[0],X=J[1],Y=(0,S.useState)(null===n||void 0===n?void 0:n.fundingStage),ee=(0,r.Z)(Y,2),ne=ee[0],te=ee[1],ie=(0,S.useState)(null===n||void 0===n?void 0:n.teamSize),re=(0,r.Z)(ie,2),le=re[0],se=re[1],ae=(0,S.useState)(null===n||void 0===n?void 0:n.description),oe=(0,r.Z)(ae,2),ce=oe[0],de=oe[1],ue=(0,S.useState)(null===n||void 0===n?void 0:n.socialLink),xe=(0,r.Z)(ue,2),he=xe[0],Ze=xe[1],ve=(0,S.useState)(null===n||void 0===n?void 0:n.website),ge=(0,r.Z)(ve,2),fe=ge[0],je=ge[1],me=(0,S.useState)(null===n||void 0===n?void 0:n.industry),pe=(0,r.Z)(me,2),ye=pe[0],Se=pe[1],Ce=(0,S.useState)(null===n||void 0===n?void 0:n.country),Pe=(0,r.Z)(Ce,2),be=Pe[0],ke=Pe[1],we=(0,S.useState)(null===n||void 0===n?void 0:n.state),ze=(0,r.Z)(we,2),Ie=ze[0],Ee=ze[1],Oe=(0,S.useState)(null===n||void 0===n?void 0:n.city),Te=(0,r.Z)(Oe,2),De=Te[0],Re=Te[1],Me=(0,S.useState)([]),Ne=(0,r.Z)(Me,2),We=Ne[0],Le=Ne[1],_e=(0,S.useState)([]),Ae=(0,r.Z)(_e,2),Be=Ae[0],Ue=Ae[1],Ge=(0,S.useState)([]),He=(0,r.Z)(Ge,2),Ve=He[0],Fe=He[1];(0,S.useEffect)((function(){try{var e=z.Z.getAllCountries();Le(e)}catch(n){Le([])}}),[]),(0,S.useEffect)((function(){try{var e=I.ZP.getStatesOfCountry(be);Ue(e)}catch(n){Ue([])}}),[be]),(0,S.useEffect)((function(){try{var e=E.Z.getCitiesOfState(be,Ie);Fe(e)}catch(n){Fe([])}}),[Ie]);return(0,b.jsxs)(s.ZP,{container:!0,spacing:4,children:[(0,b.jsx)(s.ZP,{item:!0,lg:3,xl:2,children:(0,b.jsx)(w.Z,{role:"customer"})}),(0,b.jsx)(s.ZP,{item:!0,lg:9,xl:10,children:(0,b.jsx)(l.Z,{sx:{p:1.5},title:(0,b.jsxs)(a.Z,{direction:"row",alignItems:"center",gap:2,children:[(0,b.jsx)(o.Z,{onClick:function(){window.history.back()},children:(0,b.jsx)(C.Z,{sx:{fontSize:"2rem",color:e.palette.primary.darker}})}),(0,b.jsx)(c.Z,{variant:"h3",children:"Edit Starup Details"})]}),children:(0,b.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:12,children:(0,b.jsx)(c.Z,{variant:"h3",children:"General Information"})}),(0,b.jsxs)(s.ZP,{container:!0,item:!0,xs:12,lg:6,spacing:4,children:[(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:12,children:(0,b.jsxs)(a.Z,{spacing:.5,children:[(0,b.jsx)(c.Z,{variant:"body1",sx:{fontSize:"1rem"},children:"Organization Name"}),(0,b.jsx)(d.Z,{fullWidth:!0,onChange:function(e){return A(e.target.value)}})]})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:12,children:(0,b.jsxs)(a.Z,{spacing:2,children:[(0,b.jsx)(u.Z,{style:{color:"black"},children:" Country"}),(0,b.jsx)(x.Z,{value:be,onChange:function(e){return ke(null===e||void 0===e?void 0:e.target.value)},children:null===We||void 0===We?void 0:We.map((function(e){return(0,b.jsx)(h.Z,{value:e.isoCode,children:e.name},e.isoCode)}))}),(0,b.jsx)(u.Z,{style:{color:"black"},children:"State"}),(0,b.jsx)(x.Z,{value:Ie,onChange:function(e){return Ee(null===e||void 0===e?void 0:e.target.value)},children:null===Be||void 0===Be?void 0:Be.map((function(e){return(0,b.jsx)(h.Z,{value:e.isoCode,children:e.name},e.isoCode)}))}),(0,b.jsx)(u.Z,{style:{color:"black"},children:"City"}),(0,b.jsx)(x.Z,{value:De,onChange:function(e){return Re(null===e||void 0===e?void 0:e.target.value)},children:null===Ve||void 0===Ve?void 0:Ve.map((function(e){return(0,b.jsx)(h.Z,{value:e.name,children:e.name},e.name)}))})]})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:12,children:(0,b.jsxs)(a.Z,{spacing:2,children:[(0,b.jsx)(c.Z,{variant:"body1",sx:{fontSize:"1rem"},children:"Industries"}),(0,b.jsx)(x.Z,{value:De,onChange:function(e){return Se(null===e||void 0===e?void 0:e.target.value)},children:null===P||void 0===P?void 0:P.map((function(e){return(0,b.jsx)(h.Z,{value:e,children:e},e)}))})]})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:12,children:(0,b.jsxs)(a.Z,{spacing:2,children:[(0,b.jsx)(c.Z,{variant:"body1",sx:{fontSize:"1rem"},children:"Specialities"}),(0,b.jsx)(Z.Z,{sx:{width:"100%"},children:(0,b.jsx)(v.Z,{multiple:!0,options:t,defaultValue:t,getOptionLabel:function(e){return e},value:G,onChange:function(e,n){return H(n)},renderTags:function(){return null},sx:{width:"100%"},renderInput:function(e){return(0,b.jsx)(d.Z,(0,i.Z)((0,i.Z)({},e),{},{variant:"outlined",placeholder:"Areas of Expertise"}))}})}),(0,b.jsx)(g.Z,{mt:3,sx:{"& > :not(:last-child)":{marginRight:1},"& > *":{marginBottom:1}},children:G.map((function(e){return(0,b.jsx)(f.Z,{label:e,onDelete:(n=e,function(){H((function(e){return e.filter((function(e){return e!==n}))}))})},e);var n}))})]})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:6,children:(0,b.jsx)(a.Z,{spacing:1,children:(0,b.jsxs)(p._,{dateAdapter:m.H,children:[(0,b.jsx)(c.Z,{variant:"body1",sx:{fontSize:"1rem"},children:"Date of Registration"}),(0,b.jsx)(y.$,{format:"MM/dd/yyyy",onChange:function(e){$(e)}})]})})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:6,children:(0,b.jsxs)(a.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{variant:"body1",sx:{fontSize:"1rem"},children:"Select Revenue"}),(0,b.jsx)(x.Z,{value:Q,onChange:function(e){return X(e.target.value)},children:null===R||void 0===R?void 0:R.map((function(e){return(0,b.jsx)(h.Z,{value:e,children:e},e)}))})]})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:6,children:(0,b.jsxs)(a.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{variant:"body1",sx:{fontSize:"1rem"},children:"Stage of Funding"}),(0,b.jsx)(x.Z,{value:ne,onChange:function(e){return te(e.target.value)},children:null===M||void 0===M?void 0:M.map((function(e){return(0,b.jsx)(h.Z,{value:e,children:e},e)}))})]})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:6,children:(0,b.jsxs)(a.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{variant:"body1",sx:{fontSize:"1rem"},children:"Team Size"}),(0,b.jsx)(x.Z,{value:le,onChange:function(e){return se(e.target.value)},children:null===N||void 0===N?void 0:N.map((function(e){return(0,b.jsx)(h.Z,{value:e,children:e},e)}))})]})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:12,children:(0,b.jsxs)(a.Z,{spacing:.5,children:[(0,b.jsx)(c.Z,{variant:"body1",sx:{fontSize:"1rem"},children:"Brief Overview"}),(0,b.jsx)(d.Z,{id:"outlined-multiline-static",fullWidth:!0,multiline:!0,rows:7,onChange:function(e){return de(e.target.value)}})]})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:12,children:(0,b.jsx)(a.Z,{direction:"row",justifyContent:"space-between",children:(0,b.jsx)(c.Z,{variant:"h3",children:"Social Media"})})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:12,children:(0,b.jsxs)(a.Z,{spacing:.5,children:[(0,b.jsx)(c.Z,{variant:"body1",sx:{fontSize:"1rem"},children:"LinkedIn"}),(0,b.jsx)(d.Z,{placeholder:"Enter your link",id:"url-start-adornment",onChange:function(e){return Ze(e.target.link)}})]})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:12,children:(0,b.jsxs)(a.Z,{spacing:.5,children:[(0,b.jsx)(c.Z,{variant:"body1",sx:{fontSize:"1rem"},children:"Company Website"}),(0,b.jsx)(d.Z,{placeholder:"Enter Email",id:"url-start-adornment",onChange:function(e){return je(e.target.value)}})]})})]}),(0,b.jsx)(s.ZP,{container:!0,item:!0,xs:12,lg:6,justifyContent:"center",children:(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:6,children:(0,b.jsx)(k,{})})}),(0,b.jsx)(s.ZP,{item:!0,xs:12,lg:12,children:(0,b.jsx)(a.Z,{spacing:1,children:(0,b.jsx)(o.Z,{onClick:function(){(0,O.WI)((0,T.yB)({organizationName:_,specialists:G,dayOfRegisteration:K,description:ce,revenue:Q,country:be,state:Ie,city:De,industry:ye,teamSize:le,fundingStage:ne,logo:"/",website:fe,socialLink:he}))},variant:"contained",sx:{width:"7rem"},children:"Save"})})})]})})})]})}}}]);