(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{TStF:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n("k1TG"),i=n("8o2o"),o=(n("q1tI"),n("7ljp")),r=n("hhGP"),p=(n("qKvR"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/Contributing/conventions-and-typing.mdx"}});var c={_frontmatter:p},s=r.a;function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(s,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"conventions"},"Conventions"),Object(o.b)("h3",{id:"python"},"Python"),Object(o.b)("p",null,"Parameters in the ",Object(o.b)("inlineCode",{parentName:"p"},"config.py")," (which are accessible via the Flask app.config dictionary) are assumed to always be defined and thus should be accessed directly via,"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'blueprints = app.config["BLUEPRINTS"]\n')),Object(o.b)("p",null,"rather than,"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'blueprints = app.config.get("BLUEPRINTS")\n')),Object(o.b)("p",null,"or similar as the later will cause typing issues. The former is of type ",Object(o.b)("inlineCode",{parentName:"p"},"List[Callable]")," whereas the later is of type ",Object(o.b)("inlineCode",{parentName:"p"},"Optional[List[Callable]]"),"."),Object(o.b)("h2",{id:"typing"},"Typing"),Object(o.b)("h3",{id:"python-1"},"Python"),Object(o.b)("p",null,"To ensure clarity, consistency, all readability, ",Object(o.b)("em",{parentName:"p"},"all")," new functions should use\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.python.org/3/library/typing.html"}),"type hints")," and include a\ndocstring."),Object(o.b)("p",null,"Note per ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.python.org/dev/peps/pep-0484/#exceptions"}),"PEP-484")," no\nsyntax for listing explicitly raised exceptions is proposed and thus the\nrecommendation is to put this information in a docstring, i.e.,"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'import math\nfrom typing import Union\n\n\ndef sqrt(x: Union[float, int]) -> Union[float, int]:\n    """\n    Return the square root of x.\n\n    :param x: A number\n    :returns: The square root of the given number\n    :raises ValueError: If the number is negative\n    """\n\n    return math.sqrt(x)\n')),Object(o.b)("h3",{id:"typescript"},"TypeScript"),Object(o.b)("p",null,"TypeScript is fully supported and is the recommended language for writing all new frontend components. When modifying existing functions/components, migrating to TypeScript is appreciated, but not required. Examples of migrating functions/components to TypeScript can be found in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apache/superset/pull/9162"}),"#9162")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apache/superset/pull/9180"}),"#9180"),"."))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/Contributing/conventions-and-typing.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-contributing-conventions-and-typing-mdx-54d1e005f2a8e5c2b16f.js.map