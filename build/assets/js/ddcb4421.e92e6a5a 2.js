"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[8910],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),k=i,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||r;return a?n.createElement(c,l(l({ref:t},m),{},{components:a})):n.createElement(c,l({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1169:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={},l="Keyframe Animations",o={unversionedId:"animations/keyframe-animations",id:"animations/keyframe-animations",title:"Keyframe Animations",description:"Keyframe animations in Avalonia are heavily inspired by CSS Animations. They can be used to animate any number of properties on a control, using any number of keyframes to define the states that each property must pass through. Keyframe animations can run any number of times, in either direction.",source:"@site/docs/animations/keyframe-animations.md",sourceDirName:"animations",slug:"/animations/keyframe-animations",permalink:"/docs/animations/keyframe-animations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/animations/keyframe-animations.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\ud83d\udd11 Animations",permalink:"/docs/animations/"},next:{title:"Transitions",permalink:"/docs/animations/transitions"}},p={},s=[{value:'Defining A Keyframe Animation <a id="defining-a-keyframe-animation"></a>',id:"defining-a-keyframe-animation-",level:2},{value:'Triggering Animations <a id="triggering-animations"></a>',id:"triggering-animations-",level:2},{value:'<code>KeyFrames</code> <a id="keyframes"></a>',id:"keyframes-",level:2},{value:'Delay <a id="delay"></a>',id:"delay-",level:2},{value:'Repeat <a id="repeat"></a>',id:"repeat-",level:2},{value:'Playback Direction <a id="playback-direction"></a>',id:"playback-direction-",level:2},{value:'Value fill modes <a id="value-fill-modes"></a>',id:"value-fill-modes-",level:2},{value:'Easings <a id="easings"></a>',id:"easings-",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keyframe-animations"},"Keyframe Animations"),(0,i.kt)("p",null,"Keyframe animations in Avalonia are heavily inspired by CSS Animations. They can be used to animate any number of properties on a control, using any number of keyframes to define the states that each property must pass through. Keyframe animations can run any number of times, in either direction."),(0,i.kt)("h2",{id:"defining-a-keyframe-animation-"},"Defining A Keyframe Animation ",(0,i.kt)("a",{id:"defining-a-keyframe-animation"})),(0,i.kt)("p",null,"Keyframe animations are applied using styles. They can be defined on any style by adding an ",(0,i.kt)("inlineCode",{parentName:"p"},"Animation")," object to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Style.Animation")," property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui">\n    <Window.Styles>\n        <Style Selector="Rectangle.red">\n            <Setter Property="Height" Value="100"/>\n            <Setter Property="Width" Value="100"/>\n            <Setter Property="Fill" Value="Red"/>\n            <Style.Animations>\n                <Animation Duration="0:0:1"> \n                    <KeyFrame Cue="0%">\n                        <Setter Property="Opacity" Value="0.0"/>\n                    </KeyFrame>\n                    <KeyFrame Cue="100%">\n                        <Setter Property="Opacity" Value="1.0"/>\n                    </KeyFrame>\n                </Animation>\n            </Style.Animations>\n        </Style>\n    </Window.Styles>\n\n    <Rectangle Classes="red"/>\n</Window>\n')),(0,i.kt)("p",null,"The example above animates the target ",(0,i.kt)("inlineCode",{parentName:"p"},"Control")," as defined by its ",(0,i.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/styling/selectors"},"selector"),". It will be run immediately when the control is loaded."),(0,i.kt)("h2",{id:"triggering-animations-"},"Triggering Animations ",(0,i.kt)("a",{id:"triggering-animations"})),(0,i.kt)("p",null,"Unlike WPF's ",(0,i.kt)("inlineCode",{parentName:"p"},"Triggers"),", Animations defined in XAML rely on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/styling/selectors"},"selectors")," for their triggering behavior. Selectors can always apply to a control, or they can conditionally apply ","(","for example if the control has a style class appled",")","."),(0,i.kt)("p",null,"If the selector isn't conditional then the animation will be triggered when a matching ",(0,i.kt)("inlineCode",{parentName:"p"},"Control")," is spawned into the visual tree. Otherwise, the animations will run whenever its selector is activated. When the selector no longer matches, the currently running animation will be canceled."),(0,i.kt)("h2",{id:"keyframes-"},(0,i.kt)("inlineCode",{parentName:"h2"},"KeyFrames")," ",(0,i.kt)("a",{id:"keyframes"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyFrame")," objects defines when the target ",(0,i.kt)("inlineCode",{parentName:"p"},"Setter")," objects should be applied on the target ",(0,i.kt)("inlineCode",{parentName:"p"},"Control"),", with value interpolation in-between."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Cue")," property of an ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyFrame")," object is based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Duration")," of the parent animation and can be an absolute time index ","(","i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},'"0:0:1"'),")"," or a percent of the animation's ",(0,i.kt)("inlineCode",{parentName:"p"},"Duration")," ","(","i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},'"0%"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"100%"'),")",". However, ",(0,i.kt)("inlineCode",{parentName:"p"},"Cue"),"'s value should not exceed the ",(0,i.kt)("inlineCode",{parentName:"p"},"Duration")," specified."),(0,i.kt)("p",null,"All ",(0,i.kt)("inlineCode",{parentName:"p"},"Animation")," objects should contain at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyFrame"),", with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Setter")," that has target property and value."),(0,i.kt)("p",null,"Multiple properties can be also animated in a single Animation by adding additional ",(0,i.kt)("inlineCode",{parentName:"p"},"Setter")," objects on the desired ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyFrame"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Animation Duration="0:0:1"> \n    <KeyFrame Cue="0%">\n        <Setter Property="Opacity" Value="0.0"/>\n        <Setter Property="RotateTransform.Angle" Value="0.0"/>\n    </KeyFrame>\n    <KeyFrame Cue="100%">\n        <Setter Property="Opacity" Value="1.0"/>\n        <Setter Property="RotateTransform.Angle" Value="90.0"/>\n    </KeyFrame>\n</Animation>\n')),(0,i.kt)("h2",{id:"delay-"},"Delay ",(0,i.kt)("a",{id:"delay"})),(0,i.kt)("p",null,"You can add a delay in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Animation")," by defining the desired delay time on its ",(0,i.kt)("inlineCode",{parentName:"p"},"Delay")," property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Animation Duration="0:0:1"\n           Delay="0:0:1"> \n    ...\n</Animation>\n')),(0,i.kt)("h2",{id:"repeat-"},"Repeat ",(0,i.kt)("a",{id:"repeat"})),(0,i.kt)("p",null,"You can set the following repeat behaviors on ",(0,i.kt)("inlineCode",{parentName:"p"},"IterationCount")," property of an ",(0,i.kt)("inlineCode",{parentName:"p"},"Animation"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")," to N"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Play N times.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"INFINITE")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Repeat Indefinitely")))),(0,i.kt)("h2",{id:"playback-direction-"},"Playback Direction ",(0,i.kt)("a",{id:"playback-direction"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PlaybackDirection")," property defines how should the animation be played, including repeats."),(0,i.kt)("p",null,"The following table describes the possible behaviors:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Normal")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The animation is played normally.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Reverse")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The animation is played in reverse direction.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Alternate")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The animation is played forwards first, then backwards.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"AlternateReverse")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The animation is played backwards first, then forwards.")))),(0,i.kt)("h2",{id:"value-fill-modes-"},"Value fill modes ",(0,i.kt)("a",{id:"value-fill-modes"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FillMode")," property defines whether the first or last interpolated value of an animation persist before or after running an animation and on delays in-between runs."),(0,i.kt)("p",null,"The following table describes the possible behaviors:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"None")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Value will not persist after animation nor the first value will be applied when the animation is delayed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Forward")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The last interpolated value will be persisted to the target property.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Backward")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The first interpolated value will be displayed on animation delay.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Both")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Both ",(0,i.kt)("inlineCode",{parentName:"td"},"Forward")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"Backward")," behaviors will be applied.")))),(0,i.kt)("h2",{id:"easings-"},"Easings ",(0,i.kt)("a",{id:"easings"})),(0,i.kt)("p",null,"Easing functions can be set by setting the name of the desired function to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Animation"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"Easing")," property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Animation Duration="0:0:1"\n           Delay="0:0:1"\n           Easing="BounceEaseIn"> \n    ...\n</Animation>\n')),(0,i.kt)("p",null,"You can also add your custom easing function class like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Animation Duration="0:0:1"\n           Delay="0:0:1">\n    <Animation.Easing>\n        <local:YourCustomEasingClassHere/>\n    </Animation.Easing> \n    ...\n</Animation>\n')),(0,i.kt)("p",null,"The following list contains the built-in easing functions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LinearEasing ","(","Default",")"),(0,i.kt)("li",{parentName:"ul"},"BackEaseIn"),(0,i.kt)("li",{parentName:"ul"},"BackEaseInOut"),(0,i.kt)("li",{parentName:"ul"},"BackEaseOut"),(0,i.kt)("li",{parentName:"ul"},"BounceEaseIn"),(0,i.kt)("li",{parentName:"ul"},"BounceEaseInOut"),(0,i.kt)("li",{parentName:"ul"},"BounceEaseOut"),(0,i.kt)("li",{parentName:"ul"},"CircularEaseIn"),(0,i.kt)("li",{parentName:"ul"},"CircularEaseInOut"),(0,i.kt)("li",{parentName:"ul"},"CircularEaseOut"),(0,i.kt)("li",{parentName:"ul"},"CubicEaseIn"),(0,i.kt)("li",{parentName:"ul"},"CubicEaseInOut"),(0,i.kt)("li",{parentName:"ul"},"CubicEaseOut"),(0,i.kt)("li",{parentName:"ul"},"ElasticEaseIn"),(0,i.kt)("li",{parentName:"ul"},"ElasticEaseInOut"),(0,i.kt)("li",{parentName:"ul"},"ElasticEaseOut"),(0,i.kt)("li",{parentName:"ul"},"ExponentialEaseIn"),(0,i.kt)("li",{parentName:"ul"},"ExponentialEaseInOut"),(0,i.kt)("li",{parentName:"ul"},"ExponentialEaseOut"),(0,i.kt)("li",{parentName:"ul"},"QuadraticEaseIn"),(0,i.kt)("li",{parentName:"ul"},"QuadraticEaseInOut"),(0,i.kt)("li",{parentName:"ul"},"QuadraticEaseOut"),(0,i.kt)("li",{parentName:"ul"},"QuarticEaseIn"),(0,i.kt)("li",{parentName:"ul"},"QuarticEaseInOut"),(0,i.kt)("li",{parentName:"ul"},"QuarticEaseOut"),(0,i.kt)("li",{parentName:"ul"},"QuinticEaseIn"),(0,i.kt)("li",{parentName:"ul"},"QuinticEaseInOut"),(0,i.kt)("li",{parentName:"ul"},"QuinticEaseOut"),(0,i.kt)("li",{parentName:"ul"},"SineEaseIn"),(0,i.kt)("li",{parentName:"ul"},"SineEaseInOut"),(0,i.kt)("li",{parentName:"ul"},"SineEaseOut")))}u.isMDXComponent=!0}}]);