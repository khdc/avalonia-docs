"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[7817],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="Controls & Layouts",l={unversionedId:"getting-started/programming-with-avalonia/controls-and-layouts",id:"getting-started/programming-with-avalonia/controls-and-layouts",title:"Controls & Layouts",description:"Controls",source:"@site/docs/getting-started/programming-with-avalonia/controls-and-layouts.md",sourceDirName:"getting-started/programming-with-avalonia",slug:"/getting-started/programming-with-avalonia/controls-and-layouts",permalink:"/docs/getting-started/programming-with-avalonia/controls-and-layouts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/programming-with-avalonia/controls-and-layouts.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"The Model-View-ViewModel Pattern \\(MVVM\\)",permalink:"/docs/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm"},next:{title:"Data Binding",permalink:"/docs/getting-started/programming-with-avalonia/data-binding"}},s={},p=[{value:'Controls <a id="controls"></a>',id:"controls-",level:3},{value:"Input and Commands",id:"input-and-commands",level:2},{value:'Layout <a id="layout"></a>',id:"layout-",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"controls--layouts"},"Controls & Layouts"),(0,r.kt)("h3",{id:"controls-"},"Controls ",(0,r.kt)("a",{id:"controls"})),(0,r.kt)("p",null,"Avalonia provides many core controls. Here are some of the most common:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Buttons: ",(0,r.kt)("a",{parentName:"li",href:"../../controls/button.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Button")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/repeatbutton.md"},(0,r.kt)("inlineCode",{parentName:"a"},"RepeatButton"))),(0,r.kt)("li",{parentName:"ul"},"Data Display: ",(0,r.kt)("a",{parentName:"li",href:"../../controls/itemscontrol.md"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemsControl")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/itemsrepeater.md"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemsRepeater")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/listbox.md"},(0,r.kt)("inlineCode",{parentName:"a"},"ListBox")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/treeview-1.md"},(0,r.kt)("inlineCode",{parentName:"a"},"TreeView"))),(0,r.kt)("li",{parentName:"ul"},"Input: ",(0,r.kt)("a",{parentName:"li",href:"../../controls/checkbox.md"},(0,r.kt)("inlineCode",{parentName:"a"},"CheckBox")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/combobox.md"},(0,r.kt)("inlineCode",{parentName:"a"},"ComboBox")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/radiobutton.md"},(0,r.kt)("inlineCode",{parentName:"a"},"RadioButton")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/slider.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Slider")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/textbox.md"},(0,r.kt)("inlineCode",{parentName:"a"},"TextBox"))),(0,r.kt)("li",{parentName:"ul"},"Layout: ",(0,r.kt)("a",{parentName:"li",href:"../../controls/border.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Border")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/canvas.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Canvas")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/dockpanel.md"},(0,r.kt)("inlineCode",{parentName:"a"},"DockPanel")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/expander.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Expander")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/grid.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Grid")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/gridsplitter.md"},(0,r.kt)("inlineCode",{parentName:"a"},"GridSplitter")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/panel.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Panel")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/separator.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Separator")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/scrollbar.md"},(0,r.kt)("inlineCode",{parentName:"a"},"ScrollBar")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/scrollviewer.md"},(0,r.kt)("inlineCode",{parentName:"a"},"ScrollViewer")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/stackpanel.md"},(0,r.kt)("inlineCode",{parentName:"a"},"StackPanel")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/viewbox.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Viewbox")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/wrappanel.md"},(0,r.kt)("inlineCode",{parentName:"a"},"WrapPanel"))),(0,r.kt)("li",{parentName:"ul"},"Menus: ",(0,r.kt)("a",{parentName:"li",href:"../../controls/contextmenu.md"},(0,r.kt)("inlineCode",{parentName:"a"},"ContextMenu")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/menu.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Menu")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/nativemenu.md"},(0,r.kt)("inlineCode",{parentName:"a"},"NativeMenu"))),(0,r.kt)("li",{parentName:"ul"},"Navigation: ",(0,r.kt)("a",{parentName:"li",href:"../../controls/tabcontrol.md"},(0,r.kt)("inlineCode",{parentName:"a"},"TabControl")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/tabstrip.md"},(0,r.kt)("inlineCode",{parentName:"a"},"TabStrip"))),(0,r.kt)("li",{parentName:"ul"},"User Information: ",(0,r.kt)("a",{parentName:"li",href:"../../controls/progressbar.md"},(0,r.kt)("inlineCode",{parentName:"a"},"ProgressBar")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/textblock.md"},(0,r.kt)("inlineCode",{parentName:"a"},"TextBlock")),", ",(0,r.kt)("a",{parentName:"li",href:"../../controls/tooltip.md"},(0,r.kt)("inlineCode",{parentName:"a"},"ToolTip")))),(0,r.kt)("h2",{id:"input-and-commands"},"Input and Commands"),(0,r.kt)("p",null,"Controls most often detect and respond to user input. The Avalonia ",(0,r.kt)("a",{parentName:"p",href:"../../input/"},"input system")," uses both ",(0,r.kt)("a",{parentName:"p",href:"../../input/routed-events.md"},"direct and routed events")," to support text input, focus management, and mouse positioning."),(0,r.kt)("p",null,"Applications often have complex input requirements. Avalonia provides a ",(0,r.kt)("a",{parentName:"p",href:"../../data-binding/binding-to-commands.md"},"command system")," that separates user-input actions from the code that responds to those actions."),(0,r.kt)("h3",{id:"layout-"},"Layout ",(0,r.kt)("a",{id:"layout"})),(0,r.kt)("p",null,"When you create a user interface, you arrange your controls by location and size to form a layout. A key requirement of any layout is to adapt to changes in window size and display settings. Rather than forcing you to write the code to adapt a layout in these circumstances, Avalonia provides a first-class, extensible layout system for you."),(0,r.kt)("p",null,"The cornerstone of the layout system is relative positioning, which increases the ability to adapt to changing window and display conditions. In addition, the layout system manages the negotiation between controls to determine the layout. The negotiation is a two-step process: first, a control tells its parent what location and size it requires; second, the parent tells the control what space it can have."),(0,r.kt)("p",null,"The layout system is exposed to child controls through base Avalonia classes. For common layouts such as grids, stacking, and docking, Avalonia includes several layout controls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../controls/panel.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Panel")),": Child controls are stacked on top of each other to fill the panel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../controls/dockpanel.md"},(0,r.kt)("inlineCode",{parentName:"a"},"DockPanel")),": Child controls are aligned to the edges of the panel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../controls/stackpanel.md"},(0,r.kt)("inlineCode",{parentName:"a"},"StackPanel")),": Child controls are stacked either vertically or horizontally"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../controls/wrappanel.md"},(0,r.kt)("inlineCode",{parentName:"a"},"WrapPanel")),": Child controls are positioned in left-to-right order and wrapped to the next line when there are more controls on the current line than space allows"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../controls/grid.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Grid")),": Child controls are positioned by rows and columns"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../controls/canvas.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Canvas")),": Child controls provide their own layout")),(0,r.kt)("p",null,"You can also create your own layouts by deriving from the ",(0,r.kt)("a",{parentName:"p",href:"../../controls/panel.md"},(0,r.kt)("inlineCode",{parentName:"a"},"Panel"))," class."))}c.isMDXComponent=!0}}]);