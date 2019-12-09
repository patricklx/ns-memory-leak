const Observable = require("tns-core-modules/data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

const Test = my.Test.Test.extend({
    invoke(arg) {
        const val = arg.toString();
        console.log('invoked', val.length);
    }
});

function createViewModel() {
    const viewModel = new Observable();
    viewModel.message = 'click to start';

    viewModel.onTap = () => {
        viewModel.set("message", 'running test...');
        let test = new Test();
        global.te = test;
        test.run();

        setTimeout(function () {
            viewModel.set("message", 'click to start');
            delete global.te;
            test.stop();
            test = null;
        }, 30 * 1000);
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
