(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{449:function(e,t,a){"use strict";a.r(t);var s=a(55),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"page-frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$page.frontmatter.title))]),e._v(" "),a("p",[e._v(e._s(e.$page.frontmatter.abstract))]),e._v(" "),a("MetadataTable"),e._v(" "),a("h2",{attrs:{id:"language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[e._v("#")]),e._v(" Language")]),e._v(" "),a("Language"),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("Data Resource")]),e._v(" format describes a data resource such as an individual file or table."),a("br"),e._v("\nThe essence of a Data Resource is a locator for the data it describes."),a("br"),e._v("\nA range of other properties can be declared to provide a richer set of metadata.")]),e._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("A minimal Data Resource looks as follows:")]),e._v(" "),a("p",[e._v("With data accessible via the local filesystem.")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"resource-path.csv"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("With data accessible via http.")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://example.com/resource-path.csv"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("A minimal Data Resource pointing to some inline data looks as follows.")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"resource-name-data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"a"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"b"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("A comprehensive Data Resource example with all required, recommended and optional properties looks as follows.")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"solar-system"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://example.com/solar-system.csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"The Solar System"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"My favourite data about the solar system."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"format"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mediatype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"text/csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"encoding"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bytes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"schema"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sources"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"licenses"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"descriptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#descriptor"}},[e._v("#")]),e._v(" Descriptor")]),e._v(" "),a("p",[e._v("A Data Resource descriptor MUST be a valid JSON "),a("code",[e._v("object")]),e._v(". (JSON is defined in "),a("a",{attrs:{href:"http://www.ietf.org/rfc/rfc4627.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 4627"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("p",[e._v("Key properties of the descriptor are described below. A descriptor MAY include any number of properties in additional to those described below as required and optional properties.")]),e._v(" "),a("h3",{attrs:{id:"data-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-location"}},[e._v("#")]),e._v(" Data Location")]),e._v(" "),a("p",[e._v("A resource MUST contain a property describing the location of the"),a("br"),e._v("\ndata associated to the resource. The location of resource data MUST be"),a("br"),e._v("\nspecified by the presence of one (and only one) of these two properties:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("path")]),e._v(": for data in files located online or locally on disk.")]),e._v(" "),a("li",[a("code",[e._v("data")]),e._v(": for data inline in the descriptor itself.")])]),e._v(" "),a("h4",{attrs:{id:"path-data-in-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-data-in-files"}},[e._v("#")]),e._v(" "),a("code",[e._v("path")]),e._v(" Data in Files")]),e._v(" "),a("p",[a("code",[e._v("path")]),e._v(" MUST be a string – or an array of strings (see “Data in Multiple"),a("br"),e._v("\nFiles”). Each string MUST be a “url-or-path” as defined in the next section.")]),e._v(" "),a("h5",{attrs:{id:"url-or-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-or-path"}},[e._v("#")]),e._v(" URL or Path")]),e._v(" "),a("p",[e._v("A “url-or-path” is a "),a("code",[e._v("string")]),e._v(" with the following additional constraints:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("MUST")]),e._v(" either be a URL or a POSIX path")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Uniform_Resource_Locator",target:"_blank",rel:"noopener noreferrer"}},[e._v("URLs"),a("OutboundLink")],1),e._v(" MUST be fully qualified. MUST be using either http or https scheme. (Absence of a scheme indicates "),a("code",[e._v("MUST")]),e._v(" be a POSIX path)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Path_%28computing%29#POSIX_pathname_definition",target:"_blank",rel:"noopener noreferrer"}},[e._v("POSIX paths"),a("OutboundLink")],1),e._v(" (unix-style with "),a("code",[e._v("/")]),e._v(" as separator) are supported for referencing local files, with the security restraint that they "),a("code",[e._v("MUST")]),e._v(" be relative siblings or children of the descriptor. Absolute paths (/) and relative parent paths (…/) MUST NOT be used, and implementations SHOULD NOT support these path types.")])]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# fully qualified url\n"path": "http://ex.datapackages.org/big-csv/my-big.csv"\n\n# relative path\n# note: this will work both as a relative path on disk and on online\n"path": "my-data-directory/my-csv.csv"\n')])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[a("code",[e._v("/")]),e._v(" (absolute path) and "),a("code",[e._v("../")]),e._v(" (relative parent path) are forbidden to avoid security vulnerabilities when implementing data package software. These limitations on resource "),a("code",[e._v("path")]),e._v(" ensure that resource paths only point to files within the data package directory and its subdirectories. This prevents data package software being exploited by a malicious user to gain unintended access to sensitive information.")]),e._v(" "),a("p",[e._v("For example, suppose a data package hosting service stores packages on disk and allows access via an API. A malicious user uploads a data package with a resource path like "),a("code",[e._v("/etc/passwd")]),e._v(".  The user then requests the data for that resource and the server naively opens "),a("code",[e._v("/etc/passwd")]),e._v(" and returns that data to the caller.")]),e._v(" "),a("p",[e._v("Prior to release 1.0.0-beta.18 (Nov 17 2016) there was a "),a("code",[e._v("url")]),e._v(" property distinct from "),a("code",[e._v("path")]),e._v(". In order to support backwards compatibility, implementors MAY want to automatically convert a "),a("code",[e._v("url")]),e._v(" property to a "),a("code",[e._v("path")]),e._v(" property and issue a warning.")])]),e._v(" "),a("h4",{attrs:{id:"data-in-multiple-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-in-multiple-files"}},[e._v("#")]),e._v(" Data in Multiple Files")]),e._v(" "),a("p",[e._v("Usually, a resource will have only a single file associated to it. However, sometimes it may be convenient to have a single resource whose data is split across multiple files – perhaps the data is large and having it in one file would be inconvenient.")]),e._v(" "),a("p",[e._v("To support this use case the "),a("code",[e._v("path")]),e._v(" property MAY be an array of strings rather"),a("br"),e._v("\nthan a single string:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"path": [ "myfile1.csv", "myfile2.csv" ]\n')])])]),a("p",[e._v("It is NOT permitted to mix fully qualified URLs and relative paths in a "),a("code",[e._v("path")]),e._v(" array: strings MUST either all be relative paths or all URLs.")]),e._v(" "),a("p",[a("strong",[e._v("NOTE:")]),e._v(" All files in the array MUST be similar in terms of structure, format etc. Implementors MUST be able to concatenate together the files in the simplest way and treat the result as one large file. For tabular data there is the issue of header rows. See the "),a("RouterLink",{attrs:{to:"/specs/tabular-data-package/"}},[e._v("Tabular Data Package spec")]),e._v(" for more on this.")],1),e._v(" "),a("h4",{attrs:{id:"data-inline-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-inline-data"}},[e._v("#")]),e._v(" "),a("code",[e._v("data")]),e._v(" Inline Data")]),e._v(" "),a("p",[e._v("Resource data rather than being stored in external files can be shipped "),a("code",[e._v("inline")]),e._v(" on a Resource using the "),a("code",[e._v("data")]),e._v(" property.")]),e._v(" "),a("p",[e._v("The value of the data property can be any type of data. However, restrictions of JSON require that the value be a string so for binary data you will need to encode (e.g. to Base64). Information on the type and encoding of the value of the data property SHOULD be provided by the format (or mediatype) property and the encoding property.")]),e._v(" "),a("p",[e._v("Specifically: the value of the data property MUST be:")]),e._v(" "),a("ul",[a("li",[e._v("EITHER: a "),a("strong",[e._v("JSON")]),e._v(" array or "),a("strong",[e._v("Object")]),e._v("- the data is then assumed to be JSON data and SHOULD be processed as such")]),e._v(" "),a("li",[e._v("OR: a "),a("strong",[e._v("JSON")]),e._v(" string - in this case the format or mediatype properties MUST be provided.")])]),e._v(" "),a("p",[e._v("Thus, a consumer of resource object MAY assume if no format or mediatype property is provided that the data is JSON and attempt to process it as such.")]),e._v(" "),a("p",[a("strong",[e._v("Examples 1 - inline JSON:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('{\n   ...\n   "resources": [\n     {\n        "format": "json",\n        # some json data e.g.\n        "data": [\n           { "a": 1, "b": 2 },\n           { .... }\n        ]\n     }\n   ]\n}\n')])])]),a("p",[a("strong",[e._v("Example 2 - inline CSV:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('{\n   ...\n   "resources": [\n     {\n        "format": "csv",\n        "data": "A,B,C\\n1,2,3\\n4,5,6"\n     }\n   ]\n}\n')])])]),a("h3",{attrs:{id:"metadata-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-properties"}},[e._v("#")]),e._v(" Metadata Properties")]),e._v(" "),a("h4",{attrs:{id:"required-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#required-properties"}},[e._v("#")]),e._v(" Required Properties")]),e._v(" "),a("p",[e._v("A descriptor MUST contain the following properties:")]),e._v(" "),a("h4",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" "),a("code",[e._v("name")])]),e._v(" "),a("p",[e._v("A resource MUST contain a "),a("code",[e._v("name")]),e._v(" property. The name is a simple name or"),a("br"),e._v("\nidentifier to be used for this resource.")]),e._v(" "),a("ul",[a("li",[e._v("If present, the name MUST be unique amongst all resources in this data"),a("br"),e._v("\npackage.")]),e._v(" "),a("li",[e._v("It MUST consist only of lowercase alphanumeric characters plus “.”, “-” and “_”.")]),e._v(" "),a("li",[e._v("It would be usual for the name to correspond to the file name (minus the"),a("br"),e._v("\nextension) of the data file the resource describes.")])]),e._v(" "),a("h4",{attrs:{id:"recommended-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recommended-properties"}},[e._v("#")]),e._v(" Recommended Properties")]),e._v(" "),a("h4",{attrs:{id:"profile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#profile"}},[e._v("#")]),e._v(" "),a("code",[e._v("profile")])]),e._v(" "),a("p",[e._v("A string identifying the "),a("RouterLink",{attrs:{to:"/profiles/"}},[e._v("profile")]),e._v(" of this descriptor as per the "),a("RouterLink",{attrs:{to:"/profiles/"}},[e._v("profiles")]),e._v(" specification.")],1),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"profile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tabular-data-resource"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "profile": "http://example.com/my-profiles-json-schema.json"\n}\n')])])]),a("h4",{attrs:{id:"optional-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-properties"}},[e._v("#")]),e._v(" Optional Properties")]),e._v(" "),a("p",[e._v("A descriptor MAY contain any number of additional properties. Common properties include:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("title")]),e._v(": a title or label for the resource.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("description")]),e._v(": a description of the resource.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("format")]),e._v(": ‘csv’, ‘xls’, ‘json’ etc. Would be expected to be the standard file"),a("br"),e._v("\nextension for this type of resource.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("mediatype")]),e._v(": the mediatype/mimetype of the resource e.g. ‘text/csv’, ‘application/vnd.ms-excel’")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("mediatype")]),e._v(": the mediatype/mimetype of the resource e.g. “text/csv”, or “application/vnd.ms-excel”. Mediatypes are maintained by the Internet Assigned Numbers Authority (IANA) in a "),a("a",{attrs:{href:"https://www.iana.org/assignments/media-types/media-types.xhtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("media type registry"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("encoding")]),e._v(": specify the character encoding of the resource’s data file. The values should be one of"),a("br"),e._v("\nthe “Preferred MIME Names” for "),a("a",{attrs:{href:"http://www.iana.org/assignments/character-sets/character-sets.xhtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("a character encoding registered with IANA"),a("OutboundLink")],1),e._v(". If no"),a("br"),e._v("\nvalue for this key is specified then the default is UTF-8.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("bytes")]),e._v(": size of the file in bytes.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("hash")]),e._v(": the MD5 hash for this resource. Other algorithms can be indicated by prefixing"),a("br"),e._v("\nthe hash’s value with the algorithm name in lower-case. For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('"hash": "sha1:8843d7f92416211de9ebb963ff4ce28125932878"\n')])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("sources")]),e._v(": as for "),a("RouterLink",{attrs:{to:"/specs/data-package/"}},[e._v("Data Package metadata")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("licenses")]),e._v(": as for "),a("RouterLink",{attrs:{to:"/specs/data-package/"}},[e._v("Data Package metadata")]),e._v(". If not specified the resource"),a("br"),e._v("\ninherits from the data package.")],1)])]),e._v(" "),a("h3",{attrs:{id:"resource-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resource-schemas"}},[e._v("#")]),e._v(" Resource Schemas")]),e._v(" "),a("p",[e._v("A Data Resource MAY have a "),a("code",[e._v("schema")]),e._v(" property to describe the schema of the resource data.")]),e._v(" "),a("p",[e._v("The value for the "),a("code",[e._v("schema")]),e._v(" property on a "),a("code",[e._v("resource")]),e._v(" MUST be an "),a("code",[e._v("object")]),e._v(" representing the schema OR a "),a("code",[e._v("string")]),e._v(" that identifies the location of the schema.")]),e._v(" "),a("p",[e._v("If a "),a("code",[e._v("string")]),e._v(" it must be a "),a("a",{attrs:{href:"#url-or-path"}},[e._v("url-or-path as defined above")]),e._v(", that is a fully qualified http URL or a relative POSIX path. The file at the location specified by this url-or-path string "),a("code",[e._v("MUST")]),e._v(" be a JSON document containing the schema.")]),e._v(" "),a("p",[e._v("NOTE: the Data Package specification places no restrictions on the form of the schema Object. This flexibility enables specific communities to define schemas appropriate for the data they manage. As an example, the "),a("RouterLink",{attrs:{to:"/specs/tabular-data-package/"}},[e._v("Tabular Data Package")]),e._v(" specification requires the schema to conform to "),a("RouterLink",{attrs:{to:"/specs/table-schema/"}},[e._v("Table Schema")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);