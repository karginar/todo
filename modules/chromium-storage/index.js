/*-----------------------------------------------------------------------------
>>> MODULE: CHROMIUM STORAGE
-------------------------------------------------------------------------------
1.0 Set
2.0 Sync
-----------------------------------------------------------------------------*/

Satus.chromium_storage = function() {
    /*-------------------------------------------------------------------------
    1.0 Get
    -------------------------------------------------------------------------*/
    this.on('set', function(name, value) {
        let object = {};

        object[name] = value;

        chrome.storage.local.set(object);
    });


    /*-------------------------------------------------------------------------
	2.0 Sync
	-------------------------------------------------------------------------*/

    chrome.storage.local.get(function(object) {
        for (let key in object)
            Satus.set(key, object[key], false);
    });
};

Satus.chromium_storage();