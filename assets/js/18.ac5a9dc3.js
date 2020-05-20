(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{453:function(e,a,t){"use strict";t.r(a);var r=t(55),i=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("This document is meant to serve as an introduction and an entry point into writing a library that implements a Frictionless Data specification. The focus is on two libraries in particular - Data Package and Table Schema - as implementing these libraries essentially implements the whole family of specifications.")]),e._v(" "),t("p",[e._v("The reader, being an implementer/maintainer of such libraries, should get a clear understanding of the reference material available for undertaking work, and the minimal set of "),t("strong",[e._v("actions")]),e._v(" that such libraries must enable for their users.")]),e._v(" "),t("p",[e._v("We prefer to focus on "),t("strong",[e._v("actions")]),e._v(" rather than features, feature sets, user stories, or more formal API specifications as we want to leave enough flexibility for implementations that follow the idioms of the host language, yet we do want to ensure a common base of "),t("em",[e._v("what can be done")]),e._v(" with an implementation in any language.")]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("While OKI and various other 3rd parties have been using the "),t("RouterLink",{attrs:{to:"/"}},[e._v("Data Package family of specifications")]),e._v(" with great success for several years, it has mostly been over the last 12 months that we are starting to see more mature libraries to implement the specifications at a “low level” for ease of reuse.")],1),e._v(" "),t("p",[e._v("At present, we consider the libraries maintained by Open Knowledge International in both Python and JavaScript to be reference implementations that serve as a guide for how to approach the specifications in code, and the type of actions that are enabled for users of the libraries. Further, we make extensive use of "),t("a",{attrs:{href:"http://json-schema.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Schema"),t("OutboundLink")],1),e._v(" to validate "),t("code",[e._v("descriptors")]),e._v(" that are passed to these libraries. This enables significant reuse across implementations for descriptor validation logic.")]),e._v(" "),t("h2",{attrs:{id:"high-level-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#high-level-requirements"}},[e._v("#")]),e._v(" High-level requirements")]),e._v(" "),t("p",[e._v("Here we will describe the minimal requirements for implementing Frictionless Data specifications in a given programming language. Based on the Python and JavaScript implementations, the implementations are split across two packages: "),t("code",[e._v("Data Package")]),e._v(" and "),t("code",[e._v("Table Schema")]),e._v(".")]),e._v(" "),t("p",[e._v("Also, see the "),t("a",{attrs:{href:"https://github.com/frictionlessdata/stack/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("stack reference"),t("OutboundLink")],1),e._v(" section below for some naming conventions we use, and that ideally should be followed in new implementations.")]),e._v(" "),t("h3",{attrs:{id:"data-package-library"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-package-library"}},[e._v("#")]),e._v(" Data Package library")]),e._v(" "),t("p",[e._v("The Data Package library can load and validate any "),t("code",[e._v("descriptor")]),e._v(" for a "),t("strong",[e._v("Data Package Profile")]),e._v(", allow the creation and modification of "),t("code",[e._v("descriptors")]),e._v(", and expose methods for reading and streaming data in the package. When a "),t("code",[e._v("descriptor")]),e._v(" is a Tabular Data Package, it uses the Table Schema library, and exposes its functionality, for each "),t("code",[e._v("resource")]),e._v(" object in the "),t("code",[e._v("resources")]),e._v(" array.")]),e._v(" "),t("h4",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/data-package/"}},[e._v("Data Package specification")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/data-package/#profiles"}},[e._v("Data Package Profiles")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/tabular-data-package/"}},[e._v("Tabular Data Package specification (the most commonly used and useful Profile)")])],1),e._v(" "),t("li",[t("a",{attrs:{href:"/schemas/registry.json"}},[e._v("JSON Schema Registry")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript implementation"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python implementation"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/christophergandrud/dpmr",target:"_blank",rel:"noopener noreferrer"}},[e._v("R implementation"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[e._v("#")]),e._v(" Actions")]),e._v(" "),t("ul",[t("li",[e._v("read an existing Data Package descriptor")]),e._v(" "),t("li",[e._v("validate an existing Data Package descriptor, including profile-specific validation via the registry of JSON Schemas")]),e._v(" "),t("li",[e._v("create a new Data Package descriptor")]),e._v(" "),t("li",[e._v("edit an existing Data Package descriptor")]),e._v(" "),t("li",[e._v("as part of editing a descriptor, helper methods to add and remove resources from the resources array")]),e._v(" "),t("li",[e._v("validate edits made to a data package descriptor")]),e._v(" "),t("li",[e._v("save a Data Package descriptor to a file path")]),e._v(" "),t("li",[e._v("zip a Data Package descriptor and its co-located references (more generically: “zip a data package”)")]),e._v(" "),t("li",[e._v("read a zip file that “claims” to be a data package")]),e._v(" "),t("li",[e._v("save a zipped Data Package to disk")])]),e._v(" "),t("h4",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-js/blob/master/src/package.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Datapackage"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-js/blob/master/src/resource.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Resource"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-js/blob/master/src/validate.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("validate"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"table-schema-library"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-schema-library"}},[e._v("#")]),e._v(" Table Schema library")]),e._v(" "),t("p",[e._v("The Table Schema library can load and validate any Table Schema "),t("code",[e._v("descriptor")]),e._v(", allow the creation and modification of "),t("code",[e._v("descriptors")]),e._v(", expose methods for reading and streaming data that conforms to a Table Schema via the Tabular Data Resource abstraction.")]),e._v(" "),t("h4",{attrs:{id:"references-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references-2"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/table-schema/"}},[e._v("Table Schema specification")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/tabular-data-resource/"}},[e._v("Tabular Data Resource specification")])],1),e._v(" "),t("li",[t("a",{attrs:{href:"/schemas/registry.json"}},[e._v("JSON Schema Registry")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript implementation"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python implementation"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"actions-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#actions-2"}},[e._v("#")]),e._v(" Actions")]),e._v(" "),t("ul",[t("li",[e._v("read an existing Table Schema descriptor")]),e._v(" "),t("li",[e._v("validate an existing Table Schema descriptor using the JSON Schema spec")]),e._v(" "),t("li",[e._v("create a new Table Schema descriptor")]),e._v(" "),t("li",[e._v("edit an existing Table Schema descriptor")]),e._v(" "),t("li",[e._v("provide a model-type interface to interact with a descriptor")]),e._v(" "),t("li",[e._v("infer a Table Schema descriptor from a supplied sample of data")]),e._v(" "),t("li",[e._v("validate a data source against the Table Schema descriptor, including in response to editing the descriptor")]),e._v(" "),t("li",[e._v("enable streaming and reading of a data source "),t("em",[e._v("through")]),e._v(" a Table Schema (cast on iteration)")])]),e._v(" "),t("h4",{attrs:{id:"examples-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-py/blob/master/tableschema/table.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Table"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-py/blob/master/tableschema/schema.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Schema"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-py/blob/master/tableschema/field.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Field"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-py/blob/master/tableschema/validate.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("validate"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-py/blob/master/tableschema/infer.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("infer"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"on-dereferencing-and-descriptor-validation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#on-dereferencing-and-descriptor-validation"}},[e._v("#")]),e._v(" On dereferencing and descriptor validation")]),e._v(" "),t("p",[e._v("Some properties in the Frictionless Data specifications allow a path (a URL or a POSIX path) that resolves to an object.")]),e._v(" "),t("p",[e._v("The most prominent example of this is the "),t("code",[e._v("schema")]),e._v(" property on Tabular Data Resource descriptors.")]),e._v(" "),t("p",[e._v("Allowing such references has practical use for publishers, for example in allowing schema reuse. However, it does introduce difficulties in the validation of such properties. For example, validating a path pointing to a schema rather than the schema object itself will do little to guarantee the integrity of the schema definition. Therefore implementors "),t("code",[e._v("MUST")]),e._v(" dereference such “referential” property values before attempting to validate a descriptor. At present, this requirement applies to the following properties in Tabular Data Package and Tabular Data Resource:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("schema")])]),e._v(" "),t("li",[t("code",[e._v("dialect")])])]),e._v(" "),t("h3",{attrs:{id:"other-libraries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-libraries"}},[e._v("#")]),e._v(" Other libraries")]),e._v(" "),t("p",[e._v("Data Package and Table Schema implement the core Frictionless Data specifications. The JavaScript implementations maintained by Open Knowledge International essentially follow the above requirements as is. However, our Python toolchain has some additional libraries - "),t("code",[e._v("goodtables")]),e._v(" and "),t("code",[e._v("tabulator")]),e._v(" - which are an important part of the Frictionless Data stack, and we would be delighted to see them implemented in other languages either as standalone libraries, or, as part of a wider effort in implementing Data Package and Table Schema.")]),e._v(" "),t("h4",{attrs:{id:"tabulator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tabulator"}},[e._v("#")]),e._v(" tabulator")]),e._v(" "),t("p",[e._v("tabulator provides a consistent interface for streaming reading and writing of tabular data. It supports CSV, which is required for Table Schema, Tabular Data Resource, and Tabular Data Package, and also supports Excel, JSON, newline delimited JSON, Google Sheets, and ODS.")]),e._v(" "),t("h5",{attrs:{id:"references-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references-3"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/tabulator-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python implementation"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"goodtables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#goodtables"}},[e._v("#")]),e._v(" goodtables")]),e._v(" "),t("p",[e._v("goodtables validates tabular data, checking for structural and schematic errors, and producing reports that can be used to iterate on data file sources as part of common data publication work flows. goodtables uses "),t("code",[e._v("tabulator")]),e._v(", "),t("code",[e._v("tableschema")]),e._v(", and "),t("code",[e._v("datapackage")]),e._v(" internally, as well as implementing "),t("code",[e._v("data-quality-spec")]),e._v(".")]),e._v(" "),t("p",[e._v("It may be of general interest that "),t("code",[e._v("goodtables")]),e._v(" is also available as a service - "),t("a",{attrs:{href:"https://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("goodtables.io")]),t("OutboundLink")],1),e._v(" - providing continuous data validation in the style of CI solutions for code.")]),e._v(" "),t("h5",{attrs:{id:"references-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references-4"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python implementation"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/data-quality-spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Quality Spec"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"work-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#work-process"}},[e._v("#")]),e._v(" Work process")]),e._v(" "),t("p",[e._v("Open Knowledge International "),t("a",{attrs:{href:"https://github.com/okfn/coding-standards",target:"_blank",rel:"noopener noreferrer"}},[e._v("coding standards can be found here"),t("OutboundLink")],1),e._v(". While some of the standards document refers to idioms in JavaScript and Python, much of it is about more general standards around using git, testing requirements and so on. These need to be adhered to.")]),e._v(" "),t("p",[e._v("We have some small example code repositories in Python and JavaScript that demonstrate these coding standards.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/okfn/oki-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python Package Example"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/okfn/oki-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript Package Example"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("If you would "),t("em",[e._v("like")]),e._v(" to contribute sections based on idioms in your target language, that would be great: it will serve as a further reference to others, and also have the added benefit of enabling our team to learn from you.")])])}),[],!1,null,null,null);a.default=i.exports}}]);