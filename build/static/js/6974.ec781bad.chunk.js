"use strict";(self.webpackChunkmantis_react_ts=self.webpackChunkmantis_react_ts||[]).push([[6974],{89513:function(e,i,n){n.d(i,{Z:function(){return j}});var t=n(12600),s=n(95590),r=n(75208),a=n(88070),o=n(37796),c=n(41959),l=n(99498),d=n(25536),x=n(81756),h=n(65974),p=n(23712),Z=function(e){var i=(0,x.ZP)(),n=(0,h.s0)();return(0,p.jsx)(r.Z,{sx:{display:"flex",alignItems:"center"},children:(0,p.jsx)(a.Z,{onClick:function(){n("/client/job-detail",{state:{_id:e._id}})},children:(0,p.jsxs)(t.ZP,{container:!0,spacing:3,sx:{paddingLeft:"1vw",paddingTop:"2vh"},children:[(0,p.jsx)(t.ZP,{item:!0,xs:3,children:(0,p.jsxs)(o.Z,{direction:"column",children:[(0,p.jsx)(s.Z,{component:d.rU,to:"",variant:"h5",noWrap:!0,sx:{color:i.palette.primary.darker,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.title}),(0,p.jsx)(c.Z,{label:e.category,sx:{width:"40%"}})]})}),(0,p.jsx)(t.ZP,{item:!0,xs:1,children:(0,p.jsx)(s.Z,{variant:"body1",children:e.type})}),(0,p.jsx)(t.ZP,{item:!0,xs:1,children:(0,p.jsx)(s.Z,{variant:"body1",children:e.liveFrom})}),(0,p.jsx)(t.ZP,{item:!0,xs:2,children:(0,p.jsx)(s.Z,{variant:"body1",children:e.proposals})}),(0,p.jsx)(t.ZP,{item:!0,xs:1,children:(0,p.jsx)(s.Z,{variant:"body1",children:e.invites})}),(0,p.jsx)(t.ZP,{item:!0,xs:1,children:(0,p.jsx)(s.Z,{variant:"body1",children:e.noOfMeeting})}),(0,p.jsxs)(t.ZP,{item:!0,xs:3,sx:{display:"flex",justifyContent:"space-around"},children:[(0,p.jsx)(l.Z,{sx:{backgroundColor:"white",color:i.palette.primary.darker,width:"100%",textTransform:"none",height:"4vh",borderRadius:"10px"},onClick:function(){n("/client/job-detail",{state:{page:2}})},children:"View Proposals"}),(0,p.jsx)(l.Z,{sx:{backgroundColor:"white",color:i.palette.primary.darker,width:"100%",textTransform:"none",height:"4vh",borderRadius:"10px"},onClick:function(){n("/client/job/detail",{state:{page:1}})},children:"My Hires"})]}),(0,p.jsx)(t.ZP,{item:!0,xs:1})]})})})},j=function(e){var i=e.JobItems;return(0,p.jsxs)(t.ZP,{container:!0,spacing:5,sx:{alignItems:"center"},children:[i.length>0&&i.map((function(e,i){return(0,p.jsx)(t.ZP,{item:!0,xs:12,sx:{alignItems:"center"},children:(0,p.jsx)(Z,{_id:e._id,title:e.title,type:e.visibility,liveFrom:new Date(e.createdAt).toLocaleString("en-US",{month:"long",day:"numeric"}).replace(/\d+(?=\s)/,(function(e){var i=["th","st","nd","rd"],n=parseInt(e)%100;return e+(i[(n-20)%10]||i[n]||i[0])})),proposals:e.proposals.length,invites:e.invitations.length,meetings:e.questions.length,category:e.type})},i)})),(0,p.jsx)(t.ZP,{item:!0,xs:12,children:0===i.length&&(0,p.jsx)(s.Z,{sx:{display:"flex",justifyContent:"center"},children:"No Active Jobs"})})]})}},16974:function(e,i,n){n.r(i);var t=n(50678),s=n(18489),r=n(83738),a=n(12600),o=n(37796),c=n(99498),l=n(95590),d=n(75208),x=n(46999),h=n(81756),p=n(5180),Z=n(95537),j=n(45681),u=n(87681),f=n(88391),v=n(89513),m=n(41975),g=n(65974),w=n(66732),b=n(23712),P=["children","value","index"];function y(e){var i=e.children,n=e.value,t=e.index,a=(0,r.Z)(e,P);return(0,b.jsx)("div",(0,s.Z)((0,s.Z)({role:"tabpanel",hidden:n!==t,id:"simple-tabpanel-".concat(t),"aria-labelledby":"simple-tab-".concat(t)},a),{},{children:n===t&&(0,b.jsx)(u.Z,{sx:{p:3},children:(0,b.jsx)(b.Fragment,{children:i})})}))}function C(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}i.default=function(){var e=(0,h.ZP)(),i=(0,g.s0)(),n=(0,f.useState)(0),r=(0,t.Z)(n,2),P=r[0],k=r[1],S=(0,m.I0)();(0,f.useEffect)((function(){S((0,w.Yf)()),S((0,w.Me)())}),[S]);var L=(0,m.v9)((function(e){return e.jobs.activeJobs})),A=(0,m.v9)((function(e){return e.jobs.historyJobs}));return(0,b.jsxs)(a.ZP,{container:!0,spacing:3,sx:{padding:"10px"},children:[(0,b.jsx)(a.ZP,{item:!0,xs:12,sx:{display:"flex"},children:(0,b.jsxs)(o.Z,{sx:{display:"inline-flex",alignItems:"center"},direction:"row",children:[(0,b.jsx)(c.Z,{onClick:function(){window.history.back()},children:(0,b.jsx)(p.Z,{sx:{color:e.palette.primary.darker}})}),(0,b.jsx)(l.Z,{variant:"body2",sx:{color:e.palette.secondary},children:"Jobs/Active"})]})}),(0,b.jsxs)(a.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"space-between"},children:[(0,b.jsx)(l.Z,{variant:"h2",children:"Jobs"}),(0,b.jsx)(c.Z,{disableElevation:!0,size:"medium",type:"submit",variant:"contained",onClick:function(){i("/client/job-post-step1")},style:{color:"white",backgroundColor:e.palette.primary.darker},children:(0,b.jsx)(l.Z,{variant:"body2",style:{paddingRight:"15px",paddingLeft:"15px"},children:"Post a New Job"})})]}),(0,b.jsx)(a.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center",minHeight:"73vh"},children:(0,b.jsx)(d.Z,{sx:{width:"100%"},children:(0,b.jsx)(x.Z,{children:(0,b.jsx)(u.Z,{sx:{width:"100%",display:"flex",justifyContent:"center"},children:(0,b.jsxs)(a.ZP,{container:!0,children:[(0,b.jsx)(a.ZP,{item:!0,xs:12,children:(0,b.jsx)(u.Z,{sx:{borderBottom:"1px solid ".concat(e.palette.secondary.lighter),width:"100%"},children:(0,b.jsxs)(Z.Z,{value:P,onChange:function(e,i){k(i)},"aria-label":"Job tabs",children:[(0,b.jsx)(j.Z,(0,s.Z)({label:"Active"},C(0))),(0,b.jsx)(j.Z,(0,s.Z)({label:"history"},C(1)))]})})}),(0,b.jsxs)(a.ZP,{item:!0,xs:12,children:[(0,b.jsx)(y,{value:P,index:0,children:(0,b.jsxs)(a.ZP,{container:!0,spacing:7,sx:{display:"flex",alignItems:"left"},children:[(0,b.jsx)(a.ZP,{item:!0,xs:12,children:(0,b.jsxs)(a.ZP,{container:!0,children:[(0,b.jsx)(a.ZP,{item:!0,xs:3,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"Project Title"})}),(0,b.jsx)(a.ZP,{item:!0,xs:1,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"Type"})}),(0,b.jsx)(a.ZP,{item:!0,xs:1,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"Live from"})}),(0,b.jsx)(a.ZP,{item:!0,xs:2,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"Proposals Received"})}),(0,b.jsx)(a.ZP,{item:!0,xs:1,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"Invites"})}),(0,b.jsx)(a.ZP,{item:!0,xs:1,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"No. of Meetings"})}),(0,b.jsx)(a.ZP,{item:!0,xs:3,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"2vw"},children:"Actions"})})]})}),(0,b.jsx)(a.ZP,{item:!0,xs:12,children:(0,b.jsx)(a.ZP,{container:!0,children:(0,b.jsx)(a.ZP,{item:!0,xs:12,children:(0,b.jsx)(v.Z,{JobItems:L})})})})]})}),(0,b.jsx)(y,{value:P,index:1,children:(0,b.jsxs)(a.ZP,{container:!0,spacing:7,sx:{display:"flex",alignItems:"left"},children:[(0,b.jsx)(a.ZP,{item:!0,xs:12,children:(0,b.jsxs)(a.ZP,{container:!0,children:[(0,b.jsx)(a.ZP,{item:!0,xs:3,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"Project Title"})}),(0,b.jsx)(a.ZP,{item:!0,xs:1,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"Type"})}),(0,b.jsx)(a.ZP,{item:!0,xs:1,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"Live from"})}),(0,b.jsx)(a.ZP,{item:!0,xs:2,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"Proposals Received"})}),(0,b.jsx)(a.ZP,{item:!0,xs:1,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"Invites"})}),(0,b.jsx)(a.ZP,{item:!0,xs:1,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"No. of Meetings"})}),(0,b.jsx)(a.ZP,{item:!0,xs:3,children:(0,b.jsx)(l.Z,{variant:"h6",sx:{whiteSpace:"nowrap",paddingLeft:"1vw"},children:"Actions"})})]})}),(0,b.jsx)(a.ZP,{item:!0,xs:12,children:(0,b.jsx)(a.ZP,{container:!0,children:(0,b.jsx)(a.ZP,{item:!0,xs:12,children:(0,b.jsx)(v.Z,{JobItems:A})})})})]})})]})]})})})})})]})}},88070:function(e,i,n){n.d(i,{Z:function(){return g}});var t=n(36222),s=n(32793),r=n(1048),a=n(88391),o=n(29595),c=n(47792),l=n(17344),d=n(34684),x=n(16625),h=n(19812);function p(e){return(0,h.Z)("MuiCardActionArea",e)}var Z=(0,x.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),j=n(25849),u=n(23712),f=["children","className","focusVisibleClassName"],v=(0,d.ZP)(j.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,i){return i.root}})((function(e){var i,n=e.theme;return i={display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%"},(0,t.Z)(i,"&:hover .".concat(Z.focusHighlight),{opacity:(n.vars||n).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,t.Z)(i,"&.".concat(Z.focusVisible," .").concat(Z.focusHighlight),{opacity:(n.vars||n).palette.action.focusOpacity}),i})),m=(0,d.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,i){return i.focusHighlight}})((function(e){var i=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:i.transitions.create("opacity",{duration:i.transitions.duration.short})}})),g=a.forwardRef((function(e,i){var n=(0,l.Z)({props:e,name:"MuiCardActionArea"}),t=n.children,a=n.className,d=n.focusVisibleClassName,x=(0,r.Z)(n,f),h=n,Z=function(e){var i=e.classes;return(0,c.Z)({root:["root"],focusHighlight:["focusHighlight"]},p,i)}(h);return(0,u.jsxs)(v,(0,s.Z)({className:(0,o.Z)(Z.root,a),focusVisibleClassName:(0,o.Z)(d,Z.focusVisible),ref:i,ownerState:h},x,{children:[t,(0,u.jsx)(m,{className:Z.focusHighlight,ownerState:h})]}))}))},87681:function(e,i,n){var t=(0,n(1624).Z)();i.Z=t}}]);