
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


NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock('send-to-worker', null, null, (obj) => {

});
require('globals');
setTimeout(() => {
   close();
}, 10 * 1000);

onmessage = function(msg) {
};

