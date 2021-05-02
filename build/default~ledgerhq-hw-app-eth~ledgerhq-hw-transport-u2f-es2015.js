(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ledgerhq-hw-app-eth~ledgerhq-hw-transport-u2f"],{

/***/ "qPxQ":
/*!*****************************************************!*\
  !*** ./node_modules/@ledgerhq/errors/dist/index.js ***!
  \*****************************************************/
/*! exports provided: AccountNameRequiredError, AccountNotSupported, AmountRequired, BluetoothRequired, BtcUnmatchedApp, CantOpenDevice, CantScanQRCode, CashAddrNotSupported, CurrencyNotSupported, DBNotReset, DBWrongPassword, DeviceAppVerifyNotSupported, DeviceGenuineSocketEarlyClose, DeviceHalted, DeviceInOSUExpected, DeviceNameInvalid, DeviceNotGenuineError, DeviceOnDashboardExpected, DeviceOnDashboardUnexpected, DeviceShouldStayInApp, DeviceSocketFail, DeviceSocketNoBulkStatus, DisconnectedDevice, DisconnectedDeviceDuringOperation, ETHAddressNonEIP, EnpointConfigError, EthAppPleaseEnableContractData, FeeEstimationFailed, FeeNotLoaded, FeeRequired, FeeTooHigh, FirmwareNotRecognized, FirmwareOrAppUpdateRequired, GasLessThanEstimate, GenuineCheckFailed, HardResetFail, InvalidAddress, InvalidAddressBecauseDestinationIsAlsoSource, InvalidXRPTag, LatestMCUInstalledError, LedgerAPI4xx, LedgerAPI5xx, LedgerAPIError, LedgerAPIErrorWithMessage, LedgerAPINotAvailable, MCUNotGenuineToDashboard, ManagerAppAlreadyInstalledError, ManagerAppDepInstallRequired, ManagerAppDepUninstallRequired, ManagerAppRelyOnBTCError, ManagerDeviceLockedError, ManagerFirmwareNotEnoughSpaceError, ManagerNotEnoughSpaceError, ManagerUninstallBTCDep, NetworkDown, NoAccessToCamera, NoAddressesFound, NoDBPathGiven, NotEnoughBalance, NotEnoughBalanceBecauseDestinationNotCreated, NotEnoughBalanceInParentAccount, NotEnoughBalanceToDelegate, NotEnoughGas, NotEnoughSpendableBalance, NotSupportedLegacyAddress, PairingFailed, PasswordIncorrectError, PasswordsDontMatchError, RecipientRequired, RecommendSubAccountsToEmpty, RecommendUndelegation, StatusCodes, SyncError, TimeoutTagged, TransportError, TransportInterfaceNotAvailable, TransportOpenUserCancelled, TransportRaceCondition, TransportStatusError, TransportWebUSBGestureRequired, UnavailableTezosOriginatedAccountReceive, UnavailableTezosOriginatedAccountSend, UnexpectedBootloader, UnknownMCU, UpdateFetchFileFail, UpdateIncorrectHash, UpdateIncorrectSig, UpdateYourApp, UserRefusedAddress, UserRefusedAllowManager, UserRefusedDeviceNameChange, UserRefusedFirmwareUpdate, UserRefusedOnDevice, WebsocketConnectionError, WebsocketConnectionFailed, WrongAppForCurrency, WrongDeviceForAccount, addCustomErrorDeserializer, createCustomErrorClass, deserializeError, getAltStatusMessage, serializeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNameRequiredError", function() { return AccountNameRequiredError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNotSupported", function() { return AccountNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountRequired", function() { return AmountRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothRequired", function() { return BluetoothRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtcUnmatchedApp", function() { return BtcUnmatchedApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CantOpenDevice", function() { return CantOpenDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CantScanQRCode", function() { return CantScanQRCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashAddrNotSupported", function() { return CashAddrNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyNotSupported", function() { return CurrencyNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBNotReset", function() { return DBNotReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBWrongPassword", function() { return DBWrongPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceAppVerifyNotSupported", function() { return DeviceAppVerifyNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceGenuineSocketEarlyClose", function() { return DeviceGenuineSocketEarlyClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceHalted", function() { return DeviceHalted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceInOSUExpected", function() { return DeviceInOSUExpected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceNameInvalid", function() { return DeviceNameInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceNotGenuineError", function() { return DeviceNotGenuineError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOnDashboardExpected", function() { return DeviceOnDashboardExpected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOnDashboardUnexpected", function() { return DeviceOnDashboardUnexpected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceShouldStayInApp", function() { return DeviceShouldStayInApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceSocketFail", function() { return DeviceSocketFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceSocketNoBulkStatus", function() { return DeviceSocketNoBulkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectedDevice", function() { return DisconnectedDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectedDeviceDuringOperation", function() { return DisconnectedDeviceDuringOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETHAddressNonEIP", function() { return ETHAddressNonEIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnpointConfigError", function() { return EnpointConfigError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthAppPleaseEnableContractData", function() { return EthAppPleaseEnableContractData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeEstimationFailed", function() { return FeeEstimationFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeNotLoaded", function() { return FeeNotLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeRequired", function() { return FeeRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeTooHigh", function() { return FeeTooHigh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareNotRecognized", function() { return FirmwareNotRecognized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareOrAppUpdateRequired", function() { return FirmwareOrAppUpdateRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GasLessThanEstimate", function() { return GasLessThanEstimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenuineCheckFailed", function() { return GenuineCheckFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardResetFail", function() { return HardResetFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidAddress", function() { return InvalidAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidAddressBecauseDestinationIsAlsoSource", function() { return InvalidAddressBecauseDestinationIsAlsoSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidXRPTag", function() { return InvalidXRPTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestMCUInstalledError", function() { return LatestMCUInstalledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPI4xx", function() { return LedgerAPI4xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPI5xx", function() { return LedgerAPI5xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPIError", function() { return LedgerAPIError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPIErrorWithMessage", function() { return LedgerAPIErrorWithMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPINotAvailable", function() { return LedgerAPINotAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCUNotGenuineToDashboard", function() { return MCUNotGenuineToDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppAlreadyInstalledError", function() { return ManagerAppAlreadyInstalledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppDepInstallRequired", function() { return ManagerAppDepInstallRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppDepUninstallRequired", function() { return ManagerAppDepUninstallRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppRelyOnBTCError", function() { return ManagerAppRelyOnBTCError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerDeviceLockedError", function() { return ManagerDeviceLockedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerFirmwareNotEnoughSpaceError", function() { return ManagerFirmwareNotEnoughSpaceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerNotEnoughSpaceError", function() { return ManagerNotEnoughSpaceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerUninstallBTCDep", function() { return ManagerUninstallBTCDep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkDown", function() { return NetworkDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessToCamera", function() { return NoAccessToCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAddressesFound", function() { return NoAddressesFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDBPathGiven", function() { return NoDBPathGiven; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughBalance", function() { return NotEnoughBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughBalanceBecauseDestinationNotCreated", function() { return NotEnoughBalanceBecauseDestinationNotCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughBalanceInParentAccount", function() { return NotEnoughBalanceInParentAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughBalanceToDelegate", function() { return NotEnoughBalanceToDelegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughGas", function() { return NotEnoughGas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughSpendableBalance", function() { return NotEnoughSpendableBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotSupportedLegacyAddress", function() { return NotSupportedLegacyAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairingFailed", function() { return PairingFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordIncorrectError", function() { return PasswordIncorrectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordsDontMatchError", function() { return PasswordsDontMatchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientRequired", function() { return RecipientRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendSubAccountsToEmpty", function() { return RecommendSubAccountsToEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendUndelegation", function() { return RecommendUndelegation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCodes", function() { return StatusCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncError", function() { return SyncError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutTagged", function() { return TimeoutTagged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportError", function() { return TransportError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportInterfaceNotAvailable", function() { return TransportInterfaceNotAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportOpenUserCancelled", function() { return TransportOpenUserCancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportRaceCondition", function() { return TransportRaceCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportStatusError", function() { return TransportStatusError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportWebUSBGestureRequired", function() { return TransportWebUSBGestureRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnavailableTezosOriginatedAccountReceive", function() { return UnavailableTezosOriginatedAccountReceive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnavailableTezosOriginatedAccountSend", function() { return UnavailableTezosOriginatedAccountSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnexpectedBootloader", function() { return UnexpectedBootloader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownMCU", function() { return UnknownMCU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFetchFileFail", function() { return UpdateFetchFileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIncorrectHash", function() { return UpdateIncorrectHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIncorrectSig", function() { return UpdateIncorrectSig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateYourApp", function() { return UpdateYourApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedAddress", function() { return UserRefusedAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedAllowManager", function() { return UserRefusedAllowManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedDeviceNameChange", function() { return UserRefusedDeviceNameChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedFirmwareUpdate", function() { return UserRefusedFirmwareUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedOnDevice", function() { return UserRefusedOnDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketConnectionError", function() { return WebsocketConnectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketConnectionFailed", function() { return WebsocketConnectionFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongAppForCurrency", function() { return WrongAppForCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongDeviceForAccount", function() { return WrongDeviceForAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomErrorDeserializer", function() { return addCustomErrorDeserializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCustomErrorClass", function() { return createCustomErrorClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeError", function() { return deserializeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAltStatusMessage", function() { return getAltStatusMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeError", function() { return serializeError; });
/* eslint-disable no-continue */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
var errorClasses = {};
var deserializers = {};
var addCustomErrorDeserializer = function (name, deserializer) {
    deserializers[name] = deserializer;
};
var createCustomErrorClass = function (name) {
    var C = function CustomError(message, fields) {
        Object.assign(this, fields);
        this.name = name;
        this.message = message || name;
        this.stack = new Error().stack;
    };
    C.prototype = new Error();
    errorClasses[name] = C;
    return C;
};
// inspired from https://github.com/programble/errio/blob/master/index.js
var deserializeError = function (object) {
    if (typeof object === "object" && object) {
        try {
            // $FlowFixMe FIXME HACK
            var msg = JSON.parse(object.message);
            if (msg.message && msg.name) {
                object = msg;
            }
        }
        catch (e) {
            // nothing
        }
        var error = void 0;
        if (typeof object.name === "string") {
            var name_1 = object.name;
            var des = deserializers[name_1];
            if (des) {
                error = des(object);
            }
            else {
                var constructor = name_1 === "Error" ? Error : errorClasses[name_1];
                if (!constructor) {
                    console.warn("deserializing an unknown class '" + name_1 + "'");
                    constructor = createCustomErrorClass(name_1);
                }
                error = Object.create(constructor.prototype);
                try {
                    for (var prop in object) {
                        if (object.hasOwnProperty(prop)) {
                            error[prop] = object[prop];
                        }
                    }
                }
                catch (e) {
                    // sometimes setting a property can fail (e.g. .name)
                }
            }
        }
        else {
            error = new Error(object.message);
        }
        if (!error.stack && Error.captureStackTrace) {
            Error.captureStackTrace(error, deserializeError);
        }
        return error;
    }
    return new Error(String(object));
};
// inspired from https://github.com/sindresorhus/serialize-error/blob/master/index.js
var serializeError = function (value) {
    if (!value)
        return value;
    if (typeof value === "object") {
        return destroyCircular(value, []);
    }
    if (typeof value === "function") {
        return "[Function: " + (value.name || "anonymous") + "]";
    }
    return value;
};
// https://www.npmjs.com/package/destroy-circular
function destroyCircular(from, seen) {
    var to = {};
    seen.push(from);
    for (var _i = 0, _a = Object.keys(from); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = from[key];
        if (typeof value === "function") {
            continue;
        }
        if (!value || typeof value !== "object") {
            to[key] = value;
            continue;
        }
        if (seen.indexOf(from[key]) === -1) {
            to[key] = destroyCircular(from[key], seen.slice(0));
            continue;
        }
        to[key] = "[Circular]";
    }
    if (typeof from.name === "string") {
        to.name = from.name;
    }
    if (typeof from.message === "string") {
        to.message = from.message;
    }
    if (typeof from.stack === "string") {
        to.stack = from.stack;
    }
    return to;
}

var AccountNameRequiredError = createCustomErrorClass("AccountNameRequired");
var AccountNotSupported = createCustomErrorClass("AccountNotSupported");
var AmountRequired = createCustomErrorClass("AmountRequired");
var BluetoothRequired = createCustomErrorClass("BluetoothRequired");
var BtcUnmatchedApp = createCustomErrorClass("BtcUnmatchedApp");
var CantOpenDevice = createCustomErrorClass("CantOpenDevice");
var CashAddrNotSupported = createCustomErrorClass("CashAddrNotSupported");
var CurrencyNotSupported = createCustomErrorClass("CurrencyNotSupported");
var DeviceAppVerifyNotSupported = createCustomErrorClass("DeviceAppVerifyNotSupported");
var DeviceGenuineSocketEarlyClose = createCustomErrorClass("DeviceGenuineSocketEarlyClose");
var DeviceNotGenuineError = createCustomErrorClass("DeviceNotGenuine");
var DeviceOnDashboardExpected = createCustomErrorClass("DeviceOnDashboardExpected");
var DeviceOnDashboardUnexpected = createCustomErrorClass("DeviceOnDashboardUnexpected");
var DeviceInOSUExpected = createCustomErrorClass("DeviceInOSUExpected");
var DeviceHalted = createCustomErrorClass("DeviceHalted");
var DeviceNameInvalid = createCustomErrorClass("DeviceNameInvalid");
var DeviceSocketFail = createCustomErrorClass("DeviceSocketFail");
var DeviceSocketNoBulkStatus = createCustomErrorClass("DeviceSocketNoBulkStatus");
var DisconnectedDevice = createCustomErrorClass("DisconnectedDevice");
var DisconnectedDeviceDuringOperation = createCustomErrorClass("DisconnectedDeviceDuringOperation");
var EnpointConfigError = createCustomErrorClass("EnpointConfig");
var EthAppPleaseEnableContractData = createCustomErrorClass("EthAppPleaseEnableContractData");
var FeeEstimationFailed = createCustomErrorClass("FeeEstimationFailed");
var FirmwareNotRecognized = createCustomErrorClass("FirmwareNotRecognized");
var HardResetFail = createCustomErrorClass("HardResetFail");
var InvalidXRPTag = createCustomErrorClass("InvalidXRPTag");
var InvalidAddress = createCustomErrorClass("InvalidAddress");
var InvalidAddressBecauseDestinationIsAlsoSource = createCustomErrorClass("InvalidAddressBecauseDestinationIsAlsoSource");
var LatestMCUInstalledError = createCustomErrorClass("LatestMCUInstalledError");
var UnknownMCU = createCustomErrorClass("UnknownMCU");
var LedgerAPIError = createCustomErrorClass("LedgerAPIError");
var LedgerAPIErrorWithMessage = createCustomErrorClass("LedgerAPIErrorWithMessage");
var LedgerAPINotAvailable = createCustomErrorClass("LedgerAPINotAvailable");
var ManagerAppAlreadyInstalledError = createCustomErrorClass("ManagerAppAlreadyInstalled");
var ManagerAppRelyOnBTCError = createCustomErrorClass("ManagerAppRelyOnBTC");
var ManagerAppDepInstallRequired = createCustomErrorClass("ManagerAppDepInstallRequired");
var ManagerAppDepUninstallRequired = createCustomErrorClass("ManagerAppDepUninstallRequired");
var ManagerDeviceLockedError = createCustomErrorClass("ManagerDeviceLocked");
var ManagerFirmwareNotEnoughSpaceError = createCustomErrorClass("ManagerFirmwareNotEnoughSpace");
var ManagerNotEnoughSpaceError = createCustomErrorClass("ManagerNotEnoughSpace");
var ManagerUninstallBTCDep = createCustomErrorClass("ManagerUninstallBTCDep");
var NetworkDown = createCustomErrorClass("NetworkDown");
var NoAddressesFound = createCustomErrorClass("NoAddressesFound");
var NotEnoughBalance = createCustomErrorClass("NotEnoughBalance");
var NotEnoughBalanceToDelegate = createCustomErrorClass("NotEnoughBalanceToDelegate");
var NotEnoughBalanceInParentAccount = createCustomErrorClass("NotEnoughBalanceInParentAccount");
var NotEnoughSpendableBalance = createCustomErrorClass("NotEnoughSpendableBalance");
var NotEnoughBalanceBecauseDestinationNotCreated = createCustomErrorClass("NotEnoughBalanceBecauseDestinationNotCreated");
var NoAccessToCamera = createCustomErrorClass("NoAccessToCamera");
var NotEnoughGas = createCustomErrorClass("NotEnoughGas");
var NotSupportedLegacyAddress = createCustomErrorClass("NotSupportedLegacyAddress");
var GasLessThanEstimate = createCustomErrorClass("GasLessThanEstimate");
var PasswordsDontMatchError = createCustomErrorClass("PasswordsDontMatch");
var PasswordIncorrectError = createCustomErrorClass("PasswordIncorrect");
var RecommendSubAccountsToEmpty = createCustomErrorClass("RecommendSubAccountsToEmpty");
var RecommendUndelegation = createCustomErrorClass("RecommendUndelegation");
var TimeoutTagged = createCustomErrorClass("TimeoutTagged");
var UnexpectedBootloader = createCustomErrorClass("UnexpectedBootloader");
var MCUNotGenuineToDashboard = createCustomErrorClass("MCUNotGenuineToDashboard");
var RecipientRequired = createCustomErrorClass("RecipientRequired");
var UnavailableTezosOriginatedAccountReceive = createCustomErrorClass("UnavailableTezosOriginatedAccountReceive");
var UnavailableTezosOriginatedAccountSend = createCustomErrorClass("UnavailableTezosOriginatedAccountSend");
var UpdateFetchFileFail = createCustomErrorClass("UpdateFetchFileFail");
var UpdateIncorrectHash = createCustomErrorClass("UpdateIncorrectHash");
var UpdateIncorrectSig = createCustomErrorClass("UpdateIncorrectSig");
var UpdateYourApp = createCustomErrorClass("UpdateYourApp");
var UserRefusedDeviceNameChange = createCustomErrorClass("UserRefusedDeviceNameChange");
var UserRefusedAddress = createCustomErrorClass("UserRefusedAddress");
var UserRefusedFirmwareUpdate = createCustomErrorClass("UserRefusedFirmwareUpdate");
var UserRefusedAllowManager = createCustomErrorClass("UserRefusedAllowManager");
var UserRefusedOnDevice = createCustomErrorClass("UserRefusedOnDevice"); // TODO rename because it's just for transaction refusal
var TransportOpenUserCancelled = createCustomErrorClass("TransportOpenUserCancelled");
var TransportInterfaceNotAvailable = createCustomErrorClass("TransportInterfaceNotAvailable");
var TransportRaceCondition = createCustomErrorClass("TransportRaceCondition");
var TransportWebUSBGestureRequired = createCustomErrorClass("TransportWebUSBGestureRequired");
var DeviceShouldStayInApp = createCustomErrorClass("DeviceShouldStayInApp");
var WebsocketConnectionError = createCustomErrorClass("WebsocketConnectionError");
var WebsocketConnectionFailed = createCustomErrorClass("WebsocketConnectionFailed");
var WrongDeviceForAccount = createCustomErrorClass("WrongDeviceForAccount");
var WrongAppForCurrency = createCustomErrorClass("WrongAppForCurrency");
var ETHAddressNonEIP = createCustomErrorClass("ETHAddressNonEIP");
var CantScanQRCode = createCustomErrorClass("CantScanQRCode");
var FeeNotLoaded = createCustomErrorClass("FeeNotLoaded");
var FeeRequired = createCustomErrorClass("FeeRequired");
var FeeTooHigh = createCustomErrorClass("FeeTooHigh");
var SyncError = createCustomErrorClass("SyncError");
var PairingFailed = createCustomErrorClass("PairingFailed");
var GenuineCheckFailed = createCustomErrorClass("GenuineCheckFailed");
var LedgerAPI4xx = createCustomErrorClass("LedgerAPI4xx");
var LedgerAPI5xx = createCustomErrorClass("LedgerAPI5xx");
var FirmwareOrAppUpdateRequired = createCustomErrorClass("FirmwareOrAppUpdateRequired");
// db stuff, no need to translate
var NoDBPathGiven = createCustomErrorClass("NoDBPathGiven");
var DBWrongPassword = createCustomErrorClass("DBWrongPassword");
var DBNotReset = createCustomErrorClass("DBNotReset");
/**
 * TransportError is used for any generic transport errors.
 * e.g. Error thrown when data received by exchanges are incorrect or if exchanged failed to communicate with the device for various reason.
 */
function TransportError(message, id) {
    this.name = "TransportError";
    this.message = message;
    this.stack = new Error().stack;
    this.id = id;
}
TransportError.prototype = new Error();
addCustomErrorDeserializer("TransportError", function (e) { return new TransportError(e.message, e.id); });
var StatusCodes = {
    PIN_REMAINING_ATTEMPTS: 0x63c0,
    INCORRECT_LENGTH: 0x6700,
    MISSING_CRITICAL_PARAMETER: 0x6800,
    COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 0x6981,
    SECURITY_STATUS_NOT_SATISFIED: 0x6982,
    CONDITIONS_OF_USE_NOT_SATISFIED: 0x6985,
    INCORRECT_DATA: 0x6a80,
    NOT_ENOUGH_MEMORY_SPACE: 0x6a84,
    REFERENCED_DATA_NOT_FOUND: 0x6a88,
    FILE_ALREADY_EXISTS: 0x6a89,
    INCORRECT_P1_P2: 0x6b00,
    INS_NOT_SUPPORTED: 0x6d00,
    CLA_NOT_SUPPORTED: 0x6e00,
    TECHNICAL_PROBLEM: 0x6f00,
    OK: 0x9000,
    MEMORY_PROBLEM: 0x9240,
    NO_EF_SELECTED: 0x9400,
    INVALID_OFFSET: 0x9402,
    FILE_NOT_FOUND: 0x9404,
    INCONSISTENT_FILE: 0x9408,
    ALGORITHM_NOT_SUPPORTED: 0x9484,
    INVALID_KCV: 0x9485,
    CODE_NOT_INITIALIZED: 0x9802,
    ACCESS_CONDITION_NOT_FULFILLED: 0x9804,
    CONTRADICTION_SECRET_CODE_STATUS: 0x9808,
    CONTRADICTION_INVALIDATION: 0x9810,
    CODE_BLOCKED: 0x9840,
    MAX_VALUE_REACHED: 0x9850,
    GP_AUTH_FAILED: 0x6300,
    LICENSING: 0x6f42,
    HALTED: 0x6faa,
};
function getAltStatusMessage(code) {
    switch (code) {
        // improve text of most common errors
        case 0x6700:
            return "Incorrect length";
        case 0x6800:
            return "Missing critical parameter";
        case 0x6982:
            return "Security not satisfied (dongle locked or have invalid access rights)";
        case 0x6985:
            return "Condition of use not satisfied (denied by the user?)";
        case 0x6a80:
            return "Invalid data received";
        case 0x6b00:
            return "Invalid parameter received";
    }
    if (0x6f00 <= code && code <= 0x6fff) {
        return "Internal error, please report";
    }
}
/**
 * Error thrown when a device returned a non success status.
 * the error.statusCode is one of the `StatusCodes` exported by this library.
 */
function TransportStatusError(statusCode) {
    this.name = "TransportStatusError";
    var statusText = Object.keys(StatusCodes).find(function (k) { return StatusCodes[k] === statusCode; }) ||
        "UNKNOWN_ERROR";
    var smsg = getAltStatusMessage(statusCode) || statusText;
    var statusCodeStr = statusCode.toString(16);
    this.message = "Ledger device: " + smsg + " (0x" + statusCodeStr + ")";
    this.stack = new Error().stack;
    this.statusCode = statusCode;
    this.statusText = statusText;
}
TransportStatusError.prototype = new Error();
addCustomErrorDeserializer("TransportStatusError", function (e) { return new TransportStatusError(e.statusCode); });




/***/ })

}]);
//# sourceMappingURL=default~ledgerhq-hw-app-eth~ledgerhq-hw-transport-u2f-es2015.js.map