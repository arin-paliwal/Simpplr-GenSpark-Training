import{j as a}from"./jsx-runtime-BjgbQsUx.js";import{f as x}from"./index-Dj6nxAlZ.js";import"./index-D2MAbzvX.js";const o=({children:r,onClick:e,variant:p="primary",size:l="md"})=>{const y={primary:{backgroundColor:"blue",color:"white"},secondary:{backgroundColor:"gray"}},g={sm:{padding:"0.5rem"},md:{padding:"0.75rem"},lg:{padding:"1rem"}};return a.jsx("button",{style:{outline:"none",border:"none",cursor:"pointer",borderRadius:10,...y[p],...g[l]},onClick:e,children:r})};o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const B={component:o,tags:["autodocs"],argTypes:{variant:{options:["primary","secondary"],control:{type:"select"}},size:{options:["sm","md","lg"],control:{type:"select"}}},args:{onClick:x()}},t={args:{buttonText:"Test Button Primary",variant:"primary",size:"md"},render({buttonText:r,...e}){return a.jsx(o,{...e,children:r})}},n={args:{buttonText:"Test Button Secondary",variant:"secondary",size:"md"},render({buttonText:r,...e}){return a.jsx(o,{...e,children:r})}};var s,d,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    buttonText: "Test Button Primary",
    variant: "primary",
    size: "md"
  },
  render({
    buttonText,
    ...args
  }) {
    return <Button {...args}>{buttonText}</Button>;
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,c,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    buttonText: "Test Button Secondary",
    variant: "secondary",
    size: "md"
  },
  render({
    buttonText,
    ...args
  }) {
    return <Button {...args}>{buttonText}</Button>;
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const v=["Primary","Secondary"];export{t as Primary,n as Secondary,v as __namedExportsOrder,B as default};
