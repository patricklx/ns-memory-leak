
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

onmessage = function(msg) {
    const dict = NSDictionary.dictionaryWithObjectForKey("value", "key".repeat(1000));
};
