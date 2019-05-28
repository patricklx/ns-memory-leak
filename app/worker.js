
function pointerTo(type, value) {
    var outerPtr = interop.alloc(interop.sizeof(interop.Pointer));
    var outerRef = new interop.Reference(type, outerPtr);
    outerRef.value = value;
    return outerPtr;
}

function valueFromPointerNumber(type, value) {
    const ptr = new interop.Pointer(value);
    const ptrToPtr = pointerTo(interop.Pointer, ptr);
    const ref = new interop.Reference(type, ptrToPtr);

    return ref.value;
}


let o = NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock('send-to-worker', null, null, (obj) => {

});
require('globals');
const  u = require('tns-core-modules/utils/utils');
setTimeout(() => {
    console.log('closing');
    NSNotificationCenter.defaultCenter.removeObserver(o);
    //u.releaseNativeObject(o); // crashes without this
    close();
}, 10 * 1000);


onmessage = function(msg) {
};

