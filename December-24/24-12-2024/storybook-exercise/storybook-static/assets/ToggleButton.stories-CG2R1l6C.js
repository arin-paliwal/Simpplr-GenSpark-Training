import{j as a}from"./jsx-runtime-BjgbQsUx.js";import"./index-D2MAbzvX.js";const n=({checked:e,onChange:l,onLabel:T="On",offLabel:w="Off",disabled:c=!1})=>{const L=y=>{c||l(y.target.checked)};return a.jsxs("label",{className:"toggle-switch",htmlFor:"toggle-switch",children:[a.jsx("span",{className:`toggle-switch__label ${e?"toggle-switch__label--on":"toggle-switch__label--off"}`,children:e?T:w}),a.jsx("input",{type:"checkbox",id:"toggle-switch",className:"toggle-switch__checkbox",checked:e,onChange:L,disabled:c}),a.jsx("div",{className:"toggle-switch__slider"})]})};n.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},onLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"On"',computed:!1}},offLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Off"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const k={component:n,title:"Components/ToggleSwitch",tags:["autodocs"],argTypes:{checked:{control:{type:"boolean"},description:"The current state of the toggle switch"},onLabel:{control:{type:"text"},description:"Label to display when the switch is on"},offLabel:{control:{type:"text"},description:"Label to display when the switch is off"},onChange:{action:"changed",description:"Function called when the switch state changes"},disabled:{control:{type:"boolean"},description:"Disables the toggle switch when true"}}},r={render:e=>a.jsx(n,{...e,disabled:e.disabled,onChange:l=>e.onChange(l)})},s={...r,args:{checked:!0,onLabel:"Enabled",offLabel:"Disabled",disabled:!1}},t={...r,args:{checked:!1,onLabel:"Enabled",offLabel:"Disabled",disabled:!1}},o={...r,args:{checked:!1,onLabel:"Enabled",offLabel:"Disabled",disabled:!0},parameters:{controls:{disabled:!0}}};var d,i,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    onLabel: 'Enabled',
    offLabel: 'Disabled',
    disabled: false
  }
}`,...(g=(i=s.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var b,p,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: false,
    onLabel: 'Enabled',
    offLabel: 'Disabled',
    disabled: false
  }
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,u,m;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: false,
    onLabel: 'Enabled',
    offLabel: 'Disabled',
    disabled: true
  },
  parameters: {
    controls: {
      disabled: true
    }
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const D=["ToggleEnabledToggle","ToggleDisabledToggle","DisabledButton"];export{o as DisabledButton,t as ToggleDisabledToggle,s as ToggleEnabledToggle,D as __namedExportsOrder,k as default};
