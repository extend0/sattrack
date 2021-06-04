define(["exports","./Cartesian2-b4b7b0b3","./Check-5e798bbf","./Transforms-d5dbea8d","./OrientedBoundingBox-9c75ee89"],function(n,g,e,l,f){"use strict";var t={},i=new g.Cartesian3,x=new g.Cartesian3,b=new g.Cartesian3,B=new g.Cartesian3,P=new f.OrientedBoundingBox;function o(n,e,t,r,a){e=g.Cartesian3.subtract(n,e,i),t=g.Cartesian3.dot(t,e),e=g.Cartesian3.dot(r,e);return g.Cartesian2.fromElements(t,e,a)}t.validOutline=function(n){var e=f.OrientedBoundingBox.fromPoints(n,P).halfAxes,t=l.Matrix3.getColumn(e,0,x),n=l.Matrix3.getColumn(e,1,b),e=l.Matrix3.getColumn(e,2,B),t=g.Cartesian3.magnitude(t),n=g.Cartesian3.magnitude(n),e=g.Cartesian3.magnitude(e);return!(0===t&&(0===n||0===e)||0===n&&0===e)},t.computeProjectTo2DArguments=function(n,e,t,r){var a,i,o=f.OrientedBoundingBox.fromPoints(n,P),u=o.halfAxes,s=l.Matrix3.getColumn(u,0,x),C=l.Matrix3.getColumn(u,1,b),m=l.Matrix3.getColumn(u,2,B),c=g.Cartesian3.magnitude(s),d=g.Cartesian3.magnitude(C),n=g.Cartesian3.magnitude(m),u=Math.min(c,d,n);return(0!==c||0!==d&&0!==n)&&(0!==d||0!==n)&&(u!==d&&u!==n||(a=s),u===c?a=C:u===n&&(i=C),u!==c&&u!==d||(i=m),g.Cartesian3.normalize(a,t),g.Cartesian3.normalize(i,r),g.Cartesian3.clone(o.center,e),!0)},t.createProjectPointsTo2DFunction=function(r,a,i){return function(n){for(var e=new Array(n.length),t=0;t<n.length;t++)e[t]=o(n[t],r,a,i);return e}},t.createProjectPointTo2DFunction=function(t,r,a){return function(n,e){return o(n,t,r,a,e)}},n.CoplanarPolygonGeometryLibrary=t});
