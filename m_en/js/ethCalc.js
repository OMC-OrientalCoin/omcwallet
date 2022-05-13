function init() {
    inputWei = document.getElementById("wei"), inputGwei = document.getElementById("gwei"), inputEther = document.getElementById("ether"), document.getElementById("jsmissing").style.display = "none", document.getElementById("jsavailable").style.display = "block", document.getElementById("ether").value = 1, converter(document.getElementById("ether"))
}

function initExtended() {
    inputWei = document.getElementById("wei"), inputKwei = document.getElementById("kwei"), inputMwei = document.getElementById("mwei"), inputGwei = document.getElementById("gwei"), inputSzabo = document.getElementById("szabo"), inputFinney = document.getElementById("finney"), inputEther = document.getElementById("ether"), inputKether = document.getElementById("kether"), inputMether = document.getElementById("mether"), inputGether = document.getElementById("gether"), inputTether = document.getElementById("tether"), document.getElementById("jsmissing").style.display = "none", document.getElementById("jsavailable").style.display = "block", document.getElementById("ether").value = 1, extendedConverter(document.getElementById("ether"))
}

function convert(e, t, n) {
    alert(e+t+n)
    var i = new BigNumber(e);
    return (i = i.times(new BigNumber(toEther[t]))).times(new BigNumber(scale[n])).toString()
}

function converter(e) {
    var t = document.getElementById(e.id).value;
    "wei" == e.id && (inputGwei.value = convert(t, "wei", "gwei"), inputEther.value = convert(t, "wei", "ether")), "gwei" == e.id && (inputWei.value = convert(t, "gwei", "wei"), inputEther.value = convert(t, "gwei", "ether")), "ether" == e.id && (inputWei.value = convert(t, "ether", "wei"), inputGwei.value = convert(t, "ether", "gwei"))
}

function extendedConverter(e) {
    var t = document.getElementById(e.id).value;
    "wei" == e.id && (inputKwei.value = convert(t, "wei", "kwei"), inputMwei.value = convert(t, "wei", "mwei"), inputGwei.value = convert(t, "wei", "gwei"), inputSzabo.value = convert(t, "wei", "szabo"), inputFinney.value = convert(t, "wei", "finney"), inputEther.value = convert(t, "wei", "ether"), inputKether.value = convert(t, "wei", "kether"), inputMether.value = convert(t, "wei", "mether"), inputGether.value = convert(t, "wei", "gether"), inputTether.value = convert(t, "wei", "tether")), "kwei" == e.id && (inputWei.value = convert(t, "kwei", "wei"), inputMwei.value = convert(t, "kwei", "mwei"), inputGwei.value = convert(t, "kwei", "gwei"), inputSzabo.value = convert(t, "kwei", "szabo"), inputFinney.value = convert(t, "kwei", "finney"), inputEther.value = convert(t, "kwei", "ether"), inputKether.value = convert(t, "kwei", "kether"), inputMether.value = convert(t, "kwei", "mether"), inputGether.value = convert(t, "kwei", "gether"), inputTether.value = convert(t, "kwei", "tether")), "mwei" == e.id && (inputWei.value = convert(t, "mwei", "wei"), inputKwei.value = convert(t, "mwei", "kwei"), inputGwei.value = convert(t, "mwei", "gwei"), inputSzabo.value = convert(t, "mwei", "szabo"), inputFinney.value = convert(t, "mwei", "finney"), inputEther.value = convert(t, "mwei", "ether"), inputKether.value = convert(t, "mwei", "kether"), inputMether.value = convert(t, "mwei", "mether"), inputGether.value = convert(t, "mwei", "gether"), inputTether.value = convert(t, "mwei", "tether")), "gwei" == e.id && (inputWei.value = convert(t, "gwei", "wei"), inputKwei.value = convert(t, "gwei", "kwei"), inputMwei.value = convert(t, "gwei", "mwei"), inputSzabo.value = convert(t, "gwei", "szabo"), inputFinney.value = convert(t, "gwei", "finney"), inputEther.value = convert(t, "gwei", "ether"), inputKether.value = convert(t, "gwei", "kether"), inputMether.value = convert(t, "gwei", "mether"), inputGether.value = convert(t, "gwei", "gether"), inputTether.value = convert(t, "gwei", "tether")), "szabo" == e.id && (inputWei.value = convert(t, "szabo", "wei"), inputKwei.value = convert(t, "szabo", "kwei"), inputMwei.value = convert(t, "szabo", "mwei"), inputGwei.value = convert(t, "szabo", "gwei"), inputFinney.value = convert(t, "szabo", "finney"), inputEther.value = convert(t, "szabo", "ether"), inputKether.value = convert(t, "szabo", "kether"), inputMether.value = convert(t, "szabo", "mether"), inputGether.value = convert(t, "szabo", "gether"), inputTether.value = convert(t, "szabo", "tether")), "finney" == e.id && (inputWei.value = convert(t, "finney", "wei"), inputKwei.value = convert(t, "finney", "kwei"), inputMwei.value = convert(t, "finney", "mwei"), inputGwei.value = convert(t, "finney", "gwei"), inputSzabo.value = convert(t, "finney", "szabo"), inputEther.value = convert(t, "finney", "ether"), inputKether.value = convert(t, "finney", "kether"), inputMether.value = convert(t, "finney", "mether"), inputGether.value = convert(t, "finney", "gether"), inputTether.value = convert(t, "finney", "tether")), "ether" == e.id && (inputWei.value = convert(t, "ether", "wei"), inputKwei.value = convert(t, "ether", "kwei"), inputMwei.value = convert(t, "ether", "mwei"), inputGwei.value = convert(t, "ether", "gwei"), inputSzabo.value = convert(t, "ether", "szabo"), inputFinney.value = convert(t, "ether", "finney"), inputKether.value = convert(t, "ether", "kether"), inputMether.value = convert(t, "ether", "mether"), inputGether.value = convert(t, "ether", "gether"), inputTether.value = convert(t, "ether", "tether")), "kether" == e.id && (inputWei.value = convert(t, "kether", "wei"), inputKwei.value = convert(t, "kether", "kwei"), inputMwei.value = convert(t, "kether", "mwei"), inputGwei.value = convert(t, "kether", "gwei"), inputSzabo.value = convert(t, "kether", "szabo"), inputFinney.value = convert(t, "kether", "finney"), inputEther.value = convert(t, "kether", "ether"), inputMether.value = convert(t, "kether", "mether"), inputGether.value = convert(t, "kether", "gether"), inputTether.value = convert(t, "kether", "tether")), "mether" == e.id && (inputWei.value = convert(t, 'mether")', "wei"), inputKwei.value = convert(t, 'mether")', "kwei"), inputMwei.value = convert(t, 'mether")', "mwei"), inputGwei.value = convert(t, 'mether")', "gwei"), inputSzabo.value = convert(t, 'mether")', "szabo"), inputFinney.value = convert(t, 'mether")', "finney"), inputEther.value = convert(t, 'mether")', "ether"), inputKether.value = convert(t, 'mether")', "kether"), inputGether.value = convert(t, 'mether")', "gether"), inputTether.value = convert(t, 'mether")', "tether")), "gether" == e.id && (inputWei.value = convert(t, "gether", "wei"), inputKwei.value = convert(t, "gether", "kwei"), inputMwei.value = convert(t, "gether", "mwei"), inputGwei.value = convert(t, "gether", "gwei"), inputSzabo.value = convert(t, "gether", "szabo"), inputFinney.value = convert(t, "gether", "finney"), inputEther.value = convert(t, "gether", "ether"), inputKether.value = convert(t, "gether", "kether"), inputMether.value = convert(t, "gether", "mether"), inputTether.value = convert(t, "gether", "tether")), "tether" == e.id && (inputWei.value = convert(t, "tether", "wei"), inputKwei.value = convert(t, "tether", "kwei"), inputMwei.value = convert(t, "tether", "mwei"), inputGwei.value = convert(t, "tether", "gwei"), inputSzabo.value = convert(t, "tether", "szabo"), inputFinney.value = convert(t, "tether", "finney"), inputEther.value = convert(t, "tether", "ether"), inputKether.value = convert(t, "tether", "kether"), inputMether.value = convert(t, "tether", "mether"), inputGether.value = convert(t, "tether", "gether"))
}


BigNumber.config({EXPONENTIAL_AT: 31})

var inputWei, inputKwei, inputMwei, inputGwei, inputSzabo, inputFinney, inputEther, inputKether, inputMether, inputGether, inputTether, toEther = {
        wei: "0.000000000000000001",
        kwei: "0.000000000000001",
        mwei: "0.000000000001",
        gwei: "0.000000001",
        szabo: "0.000001",
        finney: "0.001",
        ether: "1",
        kether: "1000",
        mether: "1000000",
        gether: "1000000000",
        tether: "1000000000000"
    },
    scale = {
        wei: "1000000000000000000",
        kwei: "1000000000000000",
        mwei: "1000000000000",
        gwei: "1000000000",
        szabo: "1000000",
        finney: "1000",
        ether: "1",
        kether: "0.001",
        mether: "0.000001",
        gether: "0.000000001",
        tether: "0.000000000001"
    };